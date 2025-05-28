// app/stationary/page.js
"use client"
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

export default function Stationary() {
  const [formData, setFormData] = useState({
    productName: '',
    category: '',
    price: '',
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // FormData to send to API
    const formDataToSend = new FormData();
    formDataToSend.append('productName', formData.productName);
    formDataToSend.append('category', formData.category);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('image', formData.image);

    try {
      const response = await fetch('/api/stationary', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(result.message);
        setFormData({
          productName: '',
          category: '',
          price: '',
          image: null,
        });
      } else {
        setMessage(result.message || 'Failed to add stationary');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen">
    
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 ">
          <Topbar/>
          <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-4">Add Stationary</h1>
          <div className="bg-[#F5F7FA] p-6 rounded-lg shadow-md max-w-lg mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="product-name">
                  Product Name
                </label>
                <input
                  type="text"
                  id="product-name"
                  name="productName"
                  value={formData.productName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter product name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="category">
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter category"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="price">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter price"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="image">
                  Image
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleFileChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-2 rounded-md"
                disabled={loading}
              >
                {loading ? 'Adding...' : 'Add Stationary'}
              </button>
            </form>
            {message && <p className="mt-4 text-center">{message}</p>}
          </div>
          
</div>

        </main>
        
      </div>
    </div>
  );
}
