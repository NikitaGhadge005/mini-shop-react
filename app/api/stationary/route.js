import path from 'path';
import { MongoClient, ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';

export const config = {
  api: {
    bodyParser: false,
  },
};

const uri = 'mongodb://localhost:27017';
const dbName = 'rayatstore';

// POST: Upload new product
export async function POST(req) {
  try {
    const formData = await req.formData();

    const productName = formData.get('productName');
    const category = formData.get('category');
    const price = parseFloat(formData.get('price'));
    const file = formData.get('image');

    if (!file) {
      return NextResponse.json({ message: 'Image file is required' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const imageName = `${Date.now()}-${file.name}`;
    const savePath = path.join(process.cwd(), 'public', 'uploads');

    await mkdir(savePath, { recursive: true });
    await writeFile(path.join(savePath, imageName), buffer);

    const imagePath = `/uploads/${imageName}`;

    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);
    const collection = db.collection('stationary');

    const result = await collection.insertOne({
      productName,
      category,
      price,
      image: imagePath,
      createdAt: new Date(),
    });

    client.close();

    return NextResponse.json({ message: 'Stationary added successfully!', result }, { status: 200 });
  } catch (error) {
    console.error('MongoDB Error:', error);
    return NextResponse.json({ message: 'Failed to add stationary', error: error.message }, { status: 500 });
  }
}

// GET: Fetch all products
export async function GET() {
  try {
    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);
    const collection = db.collection('stationary');

    const products = await collection.find().sort({ createdAt: -1 }).toArray();

    client.close();

    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    console.error('Fetch Error:', error);
    return NextResponse.json({ message: 'Failed to fetch stationary', error: error.message }, { status: 500 });
  }
}

// DELETE: Delete a product
export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id || !ObjectId.isValid(id)) {
      return NextResponse.json({ message: 'Invalid or missing Product ID' }, { status: 400 });
    }

    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);
    const collection = db.collection('stationary');

    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    client.close();

    if (result.deletedCount === 1) {
      return NextResponse.json({ message: 'Product deleted successfully' }, { status: 200 });
    } else {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Delete Error:', error);
    return NextResponse.json({ message: 'Failed to delete product', error: error.message }, { status: 500 });
  }
}
