function Cart({ cart, removeFromCart, increaseQuantity, decreaseQuantity }) {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const discount = totalPrice * 0.1;
  const finalPrice = totalPrice - discount;

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center bg-white rounded-2xl shadow-md p-10 max-w-md w-full">
          <div className="text-6xl mb-5">🛒</div>

          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            Your Cart is Empty
          </h1>

          <p className="text-gray-500">
            You haven't added any products to your cart yet.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Shopping Cart</h1>

          <p className="text-gray-500 mt-2">
            Review your items before checkout.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-5">
            {cart.map((item) => {
              const itemTotal = item.price * item.quantity;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5"
                >
                  <div className="flex flex-col sm:flex-row gap-5">
                    <div className="w-full sm:w-32 h-32 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>

                    <div className="flex-1">
                      <h2 className="font-semibold text-lg text-gray-800">
                        {item.title}
                      </h2>

                      <p className="text-blue-600 font-bold text-lg mt-2">
                        ${item.price.toFixed(2)}
                      </p>

                      {/* Quantity */}
                      <div className="flex items-center gap-4 mt-5">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="w-9 h-9 rounded-lg bg-gray-200 hover:bg-gray-300 font-bold text-lg"
                        >
                          −
                        </button>

                        <span className="font-semibold text-lg">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="w-9 h-9 rounded-lg bg-gray-200 hover:bg-gray-300 font-bold text-lg"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex sm:flex-col justify-between items-end">
                      <p className="font-bold text-xl text-gray-800">
                        ${itemTotal.toFixed(2)}
                      </p>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Total Price</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-green-600">
                  <span>Discount (10%)</span>
                  <span>− ${discount.toFixed(2)}</span>
                </div>

                <div className="border-t pt-4 flex justify-between text-xl font-bold text-gray-800">
                  <span>Final Price</span>
                  <span>${finalPrice.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;
