'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const EditProduct = ({ params }) => {
  const { id } = params; // Get the dynamic product ID from the URL
  const router = useRouter();

  const [product, setProduct] = useState({
    productName: '',
    category: '',
    price: '',
    image: '',
  });

  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch product data by ID
    fetch(`/api/sports?id=${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.product))
      .catch((err) => console.error('Fetch error:', err));
  }, [id]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('id', id);
    formData.append('productName', product.productName);
    formData.append('category', product.category);
    formData.append('price', product.price);
    formData.append('image', product.image);

    const res = await fetch(`/api/sports/edit-product/${id}`, {
      method: 'PUT',
      body: formData,
    });

    const data = await res.json();
    if (res.ok) {
      setMessage('Product updated successfully!');
      router.push('/products'); // Redirect after success
    } else {
      setMessage('Failed to update product: ' + data.message);
    }
  };

  return (
    <div>
      <h1>Edit Product</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            name="productName"
            value={product.productName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
            name="image"
            onChange={(e) => setProduct({ ...product, image: e.target.files[0] })}
          />
        </div>
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default EditProduct;
