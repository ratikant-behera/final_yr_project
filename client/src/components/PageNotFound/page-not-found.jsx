import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 px-4">
      <div className="text-center bg-white p-10 rounded-xl shadow-2xl max-w-md animate-fade-in-up">
        <div className="mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
            alt="404"
            className="w-28 h-28 mx-auto animate-bounce"
          />
        </div>
        <h1 className="text-5xl font-extrabold text-gray-800 mb-2">404</h1>
        <p className="text-lg text-gray-600 mb-4">Oops! Page not found.</p>
        <p className="text-sm text-gray-500 mb-6">The page you are looking for might have been removed or temporarily unavailable.</p>
        <Link
          to="/"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg transition-transform hover:scale-105 hover:bg-gray-800"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
