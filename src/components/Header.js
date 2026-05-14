import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import CartContext from "../context/CartContext";

function Header() {
  const cartStore = useContext(CartContext);

  const [showCart, setShowCart] = useState(false);

  return (
    <header
      style={{
        width: "100%",
        padding: "15px 25px",
        background: "black",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxSizing: "border-box",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        ShopKart
      </Link>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          position: "relative",
        }}
      >
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "16px",
          }}
        >
          Home
        </Link>

        <div style={{ position: "relative" }}>
          <button
            onClick={() => setShowCart(!showCart)}
            style={{
              background: "white",
              color: "black",
              padding: "8px 14px",
              borderRadius: "20px",
              fontWeight: "bold",
              border: "none",
              cursor: "pointer",
            }}
          >
            Cart: {cartStore.totalItems}
          </button>

          {showCart && (
            <div
              style={{
                position: "absolute",
                top: "55px",
                right: 0,
                width: "340px",
                background: "white",
                color: "black",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
                maxHeight: "420px",
                overflowY: "auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "15px",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                  }}
                >
                  My Cart
                </h3>

                <span
                  style={{
                    fontSize: "14px",
                    color: "#666",
                  }}
                >
                  {cartStore.totalItems} Items
                </span>
              </div>

              {cartStore.cartItems.length === 0 ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "20px 0",
                  }}
                >
                  <p>Your cart is empty</p>
                </div>
              ) : (
                <>
                  {cartStore.cartItems.map((item, index) => {
                    return (
                      <div
                        key={index}
                        style={{
                          borderBottom: "1px solid #eee",
                          paddingBottom: "14px",
                          marginBottom: "14px",
                          display: "flex",
                          gap: "12px",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={item.images?.[0]}
                          alt={item.title}
                          style={{
                            width: "65px",
                            height: "65px",
                            objectFit: "cover",
                            borderRadius: "8px",
                          }}
                        />

                        <div
                          style={{
                            flex: 1,
                          }}
                        >
                          <p
                            style={{
                              margin: 0,
                              fontWeight: "600",
                              fontSize: "14px",
                              lineHeight: "1.4",
                            }}
                          >
                            {item.title}
                          </p>
                          <p
                            style={{
                              margin: "6px 0",
                              color: "#555",
                              fontSize: "14px",
                            }}
                          >
                            ₹ {item.price} × {item.quantity}
                          </p>

                          <p
                            style={{
                              margin: 0,
                              fontSize: "13px",
                              color: "#777",
                            }}
                          >
                            Quantity: {item.quantity}
                          </p>

                          <button
                            onClick={() => cartStore.removeFromCart(index)}
                            style={{
                              border: "none",
                              background: "transparent",
                              color: "red",
                              cursor: "pointer",
                              padding: 0,
                              fontSize: "13px",
                            }}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    );
                  })}

                  <div
                    style={{
                      marginTop: "20px",
                      borderTop: "1px solid #ddd",
                      paddingTop: "15px",
                      display: "flex",
                      justifyContent: "space-between",
                      fontWeight: "bold",
                    }}
                  >
                    <span>Total</span>

                    <span>₹ {cartStore.totalPrice}</span>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default observer(Header);
