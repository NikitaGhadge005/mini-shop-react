'use client';

import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

export default function Sports() {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('image', image);

    try {
      const res = await fetch('/api/sports', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(data.message);
        setProductName('');
        setCategory('');
        setPrice('');
        setImage(null);
      } else {
        setMessage(data.message || 'Something went wrong');
      }
    } catch (err) {
      console.error('Error:', err);
      setMessage('Failed to submit data');
    }
  };

  return (
    <div className="flex flex-col h-screen">
    
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-4">Add Sports</h1>
          <div className="bg-[#F5F7FA]  p-6 rounded-lg shadow-md max-w-lg mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="product-name">
                  Product Name
                </label>
                <input
                  type="text"
                  id="product-name"
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter product name"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="category">
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="price">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="image">
                  Image
                </label>
                <input
                  type="file"
                  id="image"
                  className="w-full p-2 border rounded-md"
                  onChange={(e) => setImage(e.target.files[0])}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-2 rounded-md"
              >
                Add Sports
              </button>
              {message && (
                <p className="mt-4 text-center text-sm text-green-600">{message}</p>
              )}
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
