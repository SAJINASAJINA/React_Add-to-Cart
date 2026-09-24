function ProductCard({ product, cart, addToCart, removeFromCart }) {
  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col">
      <div className="h-64 flex items-center justify-center p-6 bg-white">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <span className="text-xs uppercase tracking-wide text-blue-600 font-semibold mb-2">
          {product.category}
        </span>

        <h2 className="font-semibold text-gray-800 text-lg line-clamp-2 min-h-[56px]">
          {product.title}
        </h2>

        <p className="text-gray-500 text-sm mt-3 line-clamp-3 min-h-[60px]">
          {product.description}
        </p>

        <div className="mt-auto pt-5">
          <p className="text-2xl font-bold text-gray-900 mb-4">
            ${product.price.toFixed(2)}
          </p>

          {isInCart ? (
            <button
              onClick={() => removeFromCart(product.id)}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-xl transition"
            >
              Remove from Cart
            </button>
          ) : (
            <button
              onClick={() => addToCart(product)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
