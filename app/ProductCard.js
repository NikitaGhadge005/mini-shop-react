import { FaShoppingCart } from 'react-icons/fa';

export default function ProductCard({ image, category, title, author, rating, price }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-xl">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4 space-y-2">
        <p className="text-sm text-gray-500">{category}</p>
        <h3 className="text-lg font-semibold text-teal-900">{title}</h3>
        <p className="text-sm text-gray-700">{author}</p>
        <div className="flex items-center space-x-1">
          {Array(5)
            .fill()
            .map((_, i) => (
              <div key={i} className={`w-3 h-3 rounded-full ${i < rating ? 'bg-green-400' : 'bg-gray-200'}`} />
            ))}
        </div>
        <div className="flex items-center justify-between pt-2">
          <span className="bg-gray-100 px-3 py-1 rounded text-sm font-medium">${price}</span>
          <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded">
            <FaShoppingCart className="inline mr-1" /> View Details
          </button>
        </div>
      </div>
    </div>
  );
}
