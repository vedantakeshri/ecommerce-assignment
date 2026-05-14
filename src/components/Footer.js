import { observer } from "mobx-react-lite";
import { useContext } from "react";
import CartContext from "../context/CartContext";

function Footer() {
  const cartStore = useContext(CartContext);

  return (
    <footer
      style={{
        width: "100%",
        background: "#111",
        color: "#fff",
        marginTop: "40px",
        padding: "18px 25px",
        boxSizing: "border-box"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px"
        }}
      >
        <div>
          <h3
            style={{
              margin: 0,
              fontSize: "20px"
            }}
          >
            ShopKart
          </h3>

          <p
            style={{
              margin: "5px 0 0 0",
              fontSize: "14px",
              color: "#bbb"
            }}
          >
            Simple React E-commerce Application
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "25px",
            flexWrap: "wrap"
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                fontSize: "13px",
                color: "#bbb"
              }}
            >
              Total Items
            </p>

            <h4
              style={{
                margin: "4px 0 0 0"
              }}
            >
              {cartStore.totalItems}
            </h4>
          </div>

          <div>
            <p
              style={{
                margin: 0,
                fontSize: "13px",
                color: "#bbb"
              }}
            >
              Total Amount
            </p>

            <h4
              style={{
                margin: "4px 0 0 0"
              }}
            >
              ₹ {cartStore.totalPrice}
            </h4>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default observer(Footer);