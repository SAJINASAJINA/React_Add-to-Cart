import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-gray-200">
          🛍️ Add to Cart
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-gray-200 font-medium">
            Products
          </Link>

          <Link to="/cart" className="relative hover:text-gray-200 font-medium">
            🛒 Cart
            {cartCount > 0 && (
              <span className="absolute -top-3 -right-4 bg-red-500 text-white text-xs font-bold rounded-full min-w-5 h-5 px-1 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
