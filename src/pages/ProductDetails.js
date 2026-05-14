import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import CartContext from "../context/CartContext";
import Loader from "../components/Loader";

function ProductDetails() {
  const { slug } = useParams();

  const cartStore = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchProductBySlug();
  }, [slug]);

  const fetchProductBySlug = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      );

      const products = response.data;

      const matchedProduct = products.find((item) => {
        return (
          item.slug &&
          slug &&
          item.slug.toLowerCase() === slug.toLowerCase()
        );
      });

      setProduct(matchedProduct || null);
    } catch (error) {
      console.log("Error fetching product", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    cartStore.addToCart({
      ...product,
      quantity
    });
  };

  if (loading) {
    return <Loader />;
  }

  if (!product) {
    return (
      <div
        style={{
          padding: "40px",
          textAlign: "center"
        }}
      >
        <h2>Product not found</h2>

        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "black",
            fontWeight: "600"
          }}
        >
          Back To Home
        </Link>
      </div>
    );
  }

  return (
    <section
      style={{
        padding: "30px 20px",
        background: "#f5f5f5",
        minHeight: "100vh"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto"
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#111",
            fontWeight: "600",
            display: "inline-block",
            marginBottom: "20px"
          }}
        >
          ← Continue Shopping
        </Link>

        <div
          style={{
            background: "#fff",
            borderRadius: "12px",
            padding: "25px",
            display: "flex",
            gap: "40px",
            flexWrap: "wrap",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
          }}
        >
          <div
            style={{
              flex: "1 1 350px"
            }}
          >
            <img
              src={product.images?.[0]}
              alt={product.title}
              style={{
                width: "100%",
                borderRadius: "10px",
                objectFit: "cover"
              }}
            />
          </div>

          <div
            style={{
              flex: "1 1 400px"
            }}
          >
            <h1
              style={{
                marginBottom: "15px",
                color: "#222"
              }}
            >
              {product.title}
            </h1>

            <p
              style={{
                lineHeight: "1.7",
                color: "#555",
                marginBottom: "20px"
              }}
            >
              {product.description}
            </p>

            <h2
              style={{
                marginBottom: "10px"
              }}
            >
              ₹ {product.price}
            </h2>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginTop: "20px"
              }}
            >
              <button
                onClick={() => {
                  if (quantity > 1) {
                    setQuantity(quantity - 1);
                  }
                }}
                style={{
                  width: "35px",
                  height: "35px",
                  border: "1px solid #ccc",
                  background: "#fff",
                  cursor: "pointer",
                  borderRadius: "6px",
                  fontSize: "18px"
                }}
              >
                -
              </button>

              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "600"
                }}
              >
                {quantity}
              </span>

              <button
                onClick={() => setQuantity(quantity + 1)}
                style={{
                  width: "35px",
                  height: "35px",
                  border: "1px solid #ccc",
                  background: "#fff",
                  cursor: "pointer",
                  borderRadius: "6px",
                  fontSize: "18px"
                }}
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              style={{
                marginTop: "25px",
                padding: "14px 24px",
                background: "#111",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: "600"
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;