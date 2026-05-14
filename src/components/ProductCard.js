import { Link } from "react-router-dom";
import { useState } from "react";

function ProductCard({ product }) {
  const [hovered, setHovered] =
    useState(false);

  return (
    <div
      onMouseEnter={() =>
        setHovered(true)
      }
      onMouseLeave={() =>
        setHovered(false)
      }
      style={{
        background: "#fff",
        borderRadius: "14px",
        overflow: "hidden",
        boxShadow:
          "0 2px 12px rgba(0,0,0,0.08)",
        transition: "0.3s ease",
        transform: hovered
          ? "translateY(-5px)"
          : "translateY(0px)"
      }}
    >
      <img
        src={product.images?.[0]}
        alt={product.title}
        style={{
          width: "100%",
          height: "240px",
          objectFit: "cover"
        }}
      />

      <div
        style={{
          padding: "16px"
        }}
      >
        <h3>{product.title}</h3>

        <p
          style={{
            color: "#666",
            lineHeight: "1.5"
          }}
        >
          {product.description?.slice(
            0,
            70
          )}
          ...
        </p>

        <div
          style={{
            marginTop: "18px",
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center"
          }}
        >
          <h2>₹ {product.price}</h2>

          <Link
            to={`/product/${product.slug}/details`}
            style={{
              textDecoration: "none",
              background: "#111",
              color: "#fff",
              padding: "10px 14px",
              borderRadius: "8px"
            }}
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;