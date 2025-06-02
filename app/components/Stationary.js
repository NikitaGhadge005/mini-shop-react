import React from 'react';

const Stationary = () => {
  const items = [
    {
      id: 1,
      image: '/uploads/strimg1.jpeg',
      name: 'Premium Notebook',
      details: 'Smooth pages, perfect for everyday notes.',
    },
    {
      id: 2,
      image: '/uploads/strimg3.jpg',
      name: 'Designer Pens',
      details: 'Elegant, stylish, and smooth writing experience.',
    },
    {
      id: 3,
      image: '/uploads/strimg2.jpg',
      name: 'Colorful Sticky Notes',
      details: 'Bright colors to organize your ideas easily.',
    },
  ];

  return (
    <section className="mt-14 flex flex-col justify-center items-center gap-2 bg-slate-100 p-5">
      <h1 className="text-gray-700 text-2xl font-medium">Our Customers' Favorite Stationery Picks!</h1>
      <div className="bg-gray-600 w-10 h-0.5 rounded-md m-3" />

      <div className="max-w-5xl flex items-center justify-center gap-7 flex-wrap">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative w-72 bg-white p-4 rounded-md flex flex-col items-center shadow-xl group overflow-hidden"
          >
            <img
              src={item.image}
              alt={`${item.name} image`}
              className="w-60 h-60 object-cover rounded"
            />

            {/* Hover Overlay */}
            <div
              className="absolute inset-0 flex flex-col justify-center items-center text-white text-center opacity-0 group-hover:opacity-100 transition-all duration-300 p-4"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              <h2 className="text-xl font-bold mb-2">{item.name}</h2>
              <p className="text-sm">{item.details}</p>
            </div>
          </div>
        ))}
      </div>

      <a href="/product#shop">
        <button
          type="button"
          className="inline-block bg-[#3a6668] text-white text-center px-6 py-3 rounded hover:bg-gray-800 mt-8"
        >
          View More
        </button>
      </a>
    </section>
  );
};

export default Stationary;
