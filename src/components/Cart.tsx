import "./Cart.css";
import { useShoppingCart } from "../context/ShoppingContext";
import { MdClose } from "react-icons/md"
import { useState } from "react";
import { FaOpencart } from "react-icons/fa"
export default function Cart() {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    clearCart,
    cartItems,
    totalAmount,
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
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const handleOrderNowButton = () => {
    clearCart();

    setShowSuccessMessage(true);

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
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
          <div style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between"
          }}>

            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#ff5e00",
                color: " #ffffff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={clearCart}
            >
              Clear Cart
            </button>
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#ff5e00",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={toggleCart2}
            >
              <MdClose />
            </button></div>
          <div>
            <div className="cart-items">
              <table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="item-image">
                        <img
                          src={item.image}
                          alt={item.name}
                          width="50px"
                          height="50px"
                        />
                        <div style={{ maxWidth: "70px" }}>{item.name}</div>
                      </td>

                      <td className="item-quantity">
                        <div style={{ display: "flex", width: "100%", gap: "3px" }}>
                          <button onClick={() => decreaseCartQuantity(item.id)}>
                            -
                          </button>
                          {item.quantity}
                          <button onClick={() => increaseCartQuantity(item.id)}>
                            +
                          </button>
                        </div>
                      </td>
                      <td className="item-price">
                        ${(item.quantity * item.price).toFixed(2)}
                      </td>
                      <td
                        className="remove-item"
                        onClick={() => removeFromCart(item.id)}
                      >
                        ❌
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div style={{ marginTop: "10px", border: "1px solid black", width: "100%" }}></div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "10px", width: "100%" }}>
            <span>
              Total :
            </span>
            <span style={{ fontSize: "20px", fontWeight: "800" }}>
              ${totalAmount}
            </span>
          </div>

          <button
            disabled={cartQuantity ? false : true}
            style={{
              padding: "10px 20px",
              backgroundColor: "green",
              color: " #ffffff",
              border: "none",
              borderRadius: "5px",
              cursor: cartQuantity ? "pointer" : "not-allowed",
              marginTop: "30px",
            }}
            onClick={handleOrderNowButton}
          >
            Order Now
          </button>
        </div>
        {showSuccessMessage && (
          <div className="success-message">
            <div style={{ fontSize: "100px" }}><FaOpencart /></div>

            <div>Order Successful!</div>
            <div>Thank You For the visit</div>
          </div>
        )}
      </div>
    </div >
  );
}
