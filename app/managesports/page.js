'use client';
import { AiFillDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import Sidebar from '../components/Sidebar';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2';

export default function ProductTable() {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState('');
      const [showModal, setShowModal] = useState(false);
 const [selectedProduct, setSelectedProduct] = useState(null);

  // Fetch products from the API
  useEffect(() => {
    fetch('/api/sports')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error('Fetch error:', err));
  }, []);

//view
      const handleViewClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

// Delete Product with SweetAlert2
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to undo this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    });

    if (result.isConfirmed) {
      const res = await fetch(`/api/sports?id=${id}`, {
        method: 'DELETE',
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(data.message);
        setProducts(products.filter((p) => p._id !== id));

        Swal.fire('Deleted!', 'Product has been deleted.', 'success');
      } else {
        Swal.fire('Failed!', data.message || 'Delete failed.', 'error');
      }
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">All Products</h1>
        

        <div className="overflow-x-auto bg-white shadow-md rounded-lg border border-gray-200">
          <table className="min-w-full text-sm text-gray-700">
            <thead className="bg-gray-700 text-white text-left uppercase tracking-wider">
              <tr>
                <th className="p-4">Image</th>
                <th className="p-4">Product Name</th>
                <th className="p-4">Category</th>
                <th className="p-4">Price</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p._id} className="border-t hover:bg-gray-50 transition">
                  <td className="p-4">
                    <img
                      src={p.image}
                      alt={p.productName}
                      className="h-14 w-14 object-cover rounded shadow-sm"
                    />
                  </td>
                  <td className="p-4 font-medium">{p.productName}</td>
                  <td className="p-4">{p.category}</td>
                  <td className="p-4 font-semibold text-green-700">₹{p.price}</td>
                  <td className="p-4">
                    <div className="flex gap-4 items-center">
                      <button 
                        onClick={() => handleViewClick(p)}
                          title="View"
                          className="text-gray-600 hover:text-blue-600 transition"
                        >
                          <FaEye size={18} />
                        </button>
                      <Link href={`/edit-product/${p._id}`}>
                        <button
                          title="Edit"
                          className="text-gray-600 hover:text-yellow-500 transition"
                        >
                          <MdModeEdit size={20} />
                        </button>
                      </Link>
                      <button
                        title="Delete"
                        onClick={() => handleDelete(p._id)}
                        className="text-gray-600 hover:text-red-600 transition"
                      >
                        <AiFillDelete size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-6 text-center text-gray-500">No products found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {message && <div className="mt-4 text-sm text-center text-green-700 bg-green-100 p-2 rounded">{message}</div>}
{/* Modal */}
{showModal && selectedProduct && (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center "  style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
    <div className="bg-white w-full max-w-md mx-4 md:mx-auto rounded shadow-lg p-6 relative">
      {/* Close Button */}
      <button
        className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
        onClick={() => setShowModal(false)}
      >
        &times;
      </button>

      {/* Modal Content */}
      <div className="flex flex-col items-center gap-4">
        <img
          src={selectedProduct.image}
          alt={selectedProduct.productName}
          className="w-40 h-40 object-cover rounded"
        />
        <h2 className="text-2xl font-semibold text-[#04263b] text-center">
          {selectedProduct.productName}
        </h2>
        <p className="text-gray-500">{selectedProduct.category}</p>
        <p className="text-lg font-bold text-green-600">
          ₹{selectedProduct.price}
        </p>
      </div>
    </div>
  </div>
)}
      </div>
    </div>
  );
}
