import React, { useState, useEffect } from 'react';

function Panier({ name, prix, picture }) {
  const [isVisible, setIsVisible] = useState(false);
  const [cart, setCart] = useState([]); // To store the cart items

  // Toggle modal visibility
  const show = () => setIsVisible(true);
  const closeModal = () => setIsVisible(false);

  // Delete product from cart
  const deleteProduct = (productToDelete) => {
    const updatedCart = cart.filter(product => product !== productToDelete);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save updated cart to localStorage
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    const total = cart.reduce((total, product) => total + parseFloat(product.prix), 0);
    return total.toFixed(2); // Round to 2 decimal places
  };

  // Add product to the cart (when the product props are available)
  useEffect(() => {
    if (name && prix && picture) {
      const newProduct = { name, prix, picture };
      const updatedCart = [...cart, newProduct];

      // Update cart state and save to localStorage
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  }, [name, prix, picture]); // Only run when name, prix, or picture changes

  // Retrieve cart from localStorage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart); // Set cart state from localStorage data
    }
  }, []); // Run only once when the component mounts

  return (
    <>
      {/* Cart Icon with Product Count */}
      <p className="font-title text-4xl z-50 right-5 top-11 fixed cursor-pointer ">
        <svg
          className="hover:fill-zinc-800"
          onClick={show}
          xmlns="http://www.w3.org/2000/svg"
          height="28px"
          viewBox="0 -960 960 960"
          width="28px"
          fill="#FFFFFF"
        >
          <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
        </svg>
        <p className="text-xs text-white ml-6 mt-[-30%]">{cart.length}</p>
      </p>

      {/* Cart Modal */}
      {isVisible && (
        <div className="w-full flex items-center fixed right-0 top-0 mt-24 z-40">
          <div className="bg-black opacity-95 w-full sm:w-2/3 md:w-2/3 lg:w-1/3 justify-center flex flex-col p-10 items-center relative">
            <p className="text-white text-3xl font-title mb-6 underline">
              Sushi Al Bahri
              {/* Button positioned top right */}
              <button
                className="absolute top-0 right-0 mt-4 mr-4 text-white"
                onClick={closeModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="28px"
                  viewBox="0 -960 960 960"
                  width="28px"
                  fill="#FFFFFF"
                >
                  <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                </svg>
              </button>
            </p>

            <p className="text-white w-full text-xl font-title flex flex-col">
              {cart.length > 0 ? (
                <div className="flex flex-col overflow-y-auto max-h-80 min-h-80">
                  {/* Limiting the height and enabling scroll */}
                  {cart.map((item, index) => (
                    <div key={index} className="mb-4">
                      <div className="flex flex-row gap-4 relative">
                        <img
                          src={item.picture}
                          alt={item.name}
                          className="w-24 h-24"
                        />
                        <div className="flex flex-col">
                          <div>{item.name}</div>
                          <div>{item.prix}$</div>
                        </div>
                        <div>
                          <svg
                            onClick={() => deleteProduct(item)}
                            className="bg-red-500 cursor-pointer absolute right-4 hover:bg-red-600"
                            xmlns="http://www.w3.org/2000/svg"
                            height="16px"
                            viewBox="0 -960 960 960"
                            width="16px"
                            fill="white"
                          >
                            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                          </svg>
                        </div>
                      </div>
                      <hr />
                    </div>
                  ))}
                </div>
              ) : (
                "Panier est vide"
              )}
            </p>

            <div className="flex flex-row gap-3 mt-4 text-xl font-title text-white w-1/2">
              <p className="text-3xl mt-1">Total</p>
              <p className="border-2 border-white p-2 py-2 w-40 flex items-center justify-center">
                {calculateTotalPrice()} €
              </p>
            </div>
            <button
              className="mt-4 px-4 ml-3 rounded-md py-2 bg-red-500 text-white hover:bg-red-700"
              onClick={closeModal}
            >
              Pay now
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Panier;
