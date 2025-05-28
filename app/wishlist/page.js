'use client';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const [showModal, setShowModal] = useState(false);
 const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
      setWishlist(savedWishlist);
    }
  }, []);

  const handleViewClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleRemove = (productName) => {
    const updatedWishlist = wishlist.filter((item) => item.productName !== productName);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  return (
    <main className="bg-white">
      <Header />

      {/* Wishlist Section */}
      <section id="wishlist" className="mt-30">
        <div className="w-full px-5 flex justify-center items-center py-5 flex-col mb-10">
          <h3 className="text-5xl font-serif text-[#567081] mb-6 border-b-2 py-5 border-gray-300">
            Your Wishlist
          </h3>
        </div>

        {/* Wishlist Items */}
        {wishlist.length > 0 ? (
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((product, i) => (
              <div key={i} className="relative bg-white border border-gray-300 shadow-md overflow-hidden hover:shadow-xl transition flex flex-col justify-center items-center p-7 group">
              
                <img
                  src={product.image}
                  alt={product.productName}
                  className="w-full h-50 object-cover"
                />
                <div className="p-4 space-y-2 flex flex-col justify-center items-center">
                  <p className="text-sm text-gray-500">{product.category}</p>
                  <h3 className="text-lg font-semibold text-[#04263b]">{product.productName}</h3>
                  <span className="bg-gray-100 px-3 py-1 rounded text-gray-900 text-sm font-medium">
                    ₹{product.price}
                  </span>
                </div>

                 
  <div
        className="absolute inset-0 bg-gray-100 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100  space-y-2 transition duration-300"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <button
          onClick={() => handleViewClick(product)}
          className="bg-white text-blue-600 font-medium px-6 py-2 rounded w-40 text-sm hover:bg-gray-400 hover:text-white"
        >
          Quick View
        </button>
                <div className='h-[1px] w-30 bg-white'/>
    
                  <button
                    onClick={() => handleRemove(product.productName)}
                    className="px-4 py-2 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                  >
                    Remove from Wishlist
                  </button>
               </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-xl">Your wishlist is empty.</p>
          </div>
        )}


          {/* Modal */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <div className="bg-white w-full max-w-2xl mx-4 md:mx-auto rounded shadow-lg p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.productName}
                className="w-full md:w-1/2 h-auto object-cover border-r-1 border-gray-600"
              />
              <div className="flex flex-col space-y-3 items-center justify-center">
                <h2 className="text-2xl font-semibold text-[#04263b]">
                  {selectedProduct.productName}
                </h2>
                <p className="text-gray-500">{selectedProduct.category}</p>
                <p className="text-lg font-bold text-green-600">
                  ₹{selectedProduct.price}
                </p>
                  <button
                    onClick={() => handleRemove(selectedProduct.productName)}
                    className="px-4 py-2 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                  >
                    Remove from Wishlist
                  </button>
              </div>
            </div>
          </div>
        </div>
      )}
      </section>

      <Footer />
    </main>
  );
};

export default WishlistPage;
