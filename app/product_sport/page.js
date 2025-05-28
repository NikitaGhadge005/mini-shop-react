'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/sports');
      const data = await res.json();
      setProducts(data.products || []);
    };
    fetchProducts();
  }, []);

  const handleAddToWishlist = (product) => {
  const existing = JSON.parse(localStorage.getItem('wishlist')) || [];
  const alreadyAdded = existing.find(item => item.productName === product.productName);
  if (!alreadyAdded) {
    const updated = [...existing, product];
    localStorage.setItem('wishlist', JSON.stringify(updated));
    alert("Added to wishlist!");
  } else {
    alert("Already in wishlist.");
  }
};



  const categories = ['All', ...new Set(products.map((p) => p.category))];

  const filtered = selectedCategory === 'All'
    ? products
    : products.filter((p) => p.category === selectedCategory);

  const ProductCard = ({ image, category, productName, price, onViewClick, onAddToWishlist }) => (
    <div className="relative bg-white border border-gray-300 shadow-md overflow-hidden hover:shadow-xl transition flex flex-col justify-center items-center p-7 group">
      <img src={image} alt={productName} className="w-full h-50 object-cover" />
      <div className="p-4 space-y-2 flex flex-col justify-center items-center">
        <p className="text-sm text-gray-500">{category}</p>
        <h3 className="text-lg font-semibold text-[#04263b]">{productName}</h3>
        <span className="bg-gray-100 px-3 py-1 rounded text-gray-900 text-sm font-medium">₹{price}</span>
      </div>

      <div
        className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 space-y-2 transition duration-300"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <button
          onClick={onViewClick}
          className="bg-white text-blue-600 font-medium px-6 py-2 rounded w-40 text-sm hover:bg-gray-400 hover:text-white"
        >
          Quick View
        </button>
        <div className='h-[1px] w-30 bg-white' />
        <button
          onClick={onAddToWishlist}
          className="bg-white text-blue-600 font-medium px-6 py-2 rounded w-40 text-sm hover:bg-gray-400 hover:text-white"
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  );

  return (
    <main className="bg-white">
      <Header />

      {/* Product Section */}
      <section id="shop" className="mt-30">
        <div className="">
          <div className="w-full px-5 flex justify-center items-center py-5 flex-col mb-10">
            <h3 className="text-5xl font-serif text-[#567081] mb-6 border-b-2 py-5 border-gray-300">
              Our Products
            </h3>

            {/* Tabs */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-sm rounded-md font-medium transition ${
                    selectedCategory === cat
                      ? 'bg-[#508285] text-white'
                      : 'text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Product Cards */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product, i) => (
              <ProductCard
                key={i}
                {...product}
                onViewClick={() => {
                  setSelectedProduct(product);
                  setShowModal(true);
                }}
               onAddToWishlist={() => handleAddToWishlist(product)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 z-50 bg-red-200 bg-opacity-50 flex justify-center items-center"   style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          
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
  onClick={() => handleAddToWishlist(selectedProduct)}
  className="bg-blue-600 text-white font-semibold px-6 py-2 rounded w-40 text-sm hover:bg-gray-800 hover:text-white"
>
  + Add to Wishlist
</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
};

export default ProductPage;
