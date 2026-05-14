import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";
import { getProducts, getCategories } from "../api/productsApi";
import Loader from "../components/Loader";

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getProducts(selectedCategory);

        setProducts(data);
      } catch (error) {
        console.log(error);
        setError("Unable to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  const fetchCategories = async () => {
    try {
      const data = await getCategories();

      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

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
          maxWidth: "1300px",
          margin: "0 auto"
        }}
      >
        <div
          style={{
            marginBottom: "25px"
          }}
        >
          <h1
            style={{
              marginBottom: "10px",
              color: "#222"
            }}
          >
            Explore Products
          </h1>

          <p
            style={{
              color: "#666",
              margin: 0
            }}
          >
            Browse products and add your favourite items to cart.
          </p>
        </div>

        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onChange={setSelectedCategory}
        />

        {loading && <Loader />}

        {!loading && error && (
          <div
            style={{
              textAlign: "center",
              padding: "40px 20px"
            }}
          >
            <h2>{error}</h2>
          </div>
        )}

        {!loading && !error && products.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "40px 20px"
            }}
          >
            <h2>No products found</h2>

            <p>Try changing the selected category.</p>
          </div>
        )}

        {!loading && !error && products.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "22px",
              marginTop: "25px"
            }}
          >
            {products.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default Home;