import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "14px",
        overflow: "hidden",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        transition: "0.3s ease",
        display: "flex",
        flexDirection: "column",
        height: "100%"
      }}
    >
      <div
        style={{
          width: "100%",
          height: "250px",
          overflow: "hidden",
          background: "#f4f4f4"
        }}
      >
        <img
          src={product.images?.[0]}
          alt={product.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />
      </div>

      <div
        style={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          flex: 1
        }}
      >
        <h3
          style={{
            margin: "0 0 10px 0",
            fontSize: "18px",
            color: "#222"
          }}
        >
          {product.title}
        </h3>

        <p
          style={{
            color: "#666",
            fontSize: "14px",
            lineHeight: "1.5",
            flex: 1
          }}
        >
          {product.description?.slice(0, 70)}...
        </p>

        <div
          style={{
            marginTop: "16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "20px",
              color: "#111"
            }}
          >
            ₹ {product.price}
          </h2>

          <Link
            to={`/product/${product.slug}/details`}
            style={{
              textDecoration: "none",
              background: "#111",
              color: "#fff",
              padding: "10px 14px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "500"
            }}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;