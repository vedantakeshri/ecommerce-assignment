import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CartContext from "./context/CartContext";
import cartStore from "./store/CartStore";

function App() {
  return (
    <CartContext.Provider value={cartStore}>
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/product/:slug/details"
            element={<ProductDetails />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;