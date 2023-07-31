import React from "react";
import "./Cart.css";
import { useShoppingCart } from "../context/ShoppingContext";

export default function Cart() {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    clearCart,
    cartItems,
    cartQuantity,
    openCart,
    isOpen,
    closeCart,
  } = useShoppingCart();

  const toggleCart = () => {
    openCart();
  };
  const toggleCart2 = () => {
    closeCart();
  };

  return (
    <div>
      <button className="floating-cart-button" onClick={toggleCart}>
        Cart
      </button>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#ff5e00",
              color: " #ffffff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={toggleCart2}
          >
            Close
          </button>
          <div
            style={{
              marginTop: "30px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {cartItems.map((item, key) => (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "10px",
                }}
                key={key}
              >
                <div
                  style={{
                    width: "200px",
                    padding: "10px",
                    borderRadius: "10px",
                    border: "2px solid black",
                    textAlign: "center",
                  }}
                >
                  {item.id} : {item.quantity}
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => removeFromCart(item.id)}
                >
                  ❌
                </div>
              </div>
            ))}
          </div>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#ff5e00",
              color: " #ffffff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "30px",
            }}
            onClick={clearCart}
          >
            Clear Cart
          </button>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "green",
              color: " #ffffff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "30px",
            }}
            onClick={() => alert("Order")}
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
