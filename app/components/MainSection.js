
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <section
        className="bg-cover bg-center text-right text-[#04263b]  py-20 px-50 "
        style={{ backgroundImage: "url('/uploads/img4.jpg')", height:'400px' }}
      >
        <h1 className="text-4xl font-bold mb-4">RAYAT SAVA CO-OPERATIVE STORES</h1>
        <p className="text-lg">Chhatrapati Shivaji College Campus,Satara</p>
      </section>

      {/* Content Card */}
      <div className="max-w-4xl mx-auto -mt-30 bg-white shadow-lg  overflow-hidden rounded-md flex flex-col md:flex-row ">
        
        {/* Left Text Section */}
        <div className="flex flex-col justify-start  p-10 text-justify md:w-1/2 text-[#3a6668]  space-y-3">
          <h2 className="text-2xl font-semibold mb-4">
          Welcome to Rayat Store
          </h2>
          <p className="text-gray-800 font-serif">
          Explore a wide variety of products at unbeatable prices. Rayat Store offers fast delivery,
            secure checkout, and exceptional customer service. Whether you're shopping for the latest fashion,
            electronics, or daily essentials — we’ve got you covered!
          </p>
          <a href="/product" className="inline-block bg-[#3a6668] text-white text-center px-2 py-3 w-35 rounded hover:bg-gray-800 i">
            Read More
          </a>
        </div>

        {/* Right Image Section */}
        <div
          className="md:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: "url('/uploads/img2.jpeg')" }}
        ></div>

      </div>
    </div>
  );
}
