import { makeAutoObservable } from "mobx";

class CartStore {
  cartItems = [];

  constructor() {
    makeAutoObservable(this);

    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      this.cartItems = JSON.parse(savedCart);
    }
  }

  addToCart(product) {
    const existingProduct = this.cartItems.find((item) => {
      return item.id === product.id;
    });

    if (existingProduct) {
      existingProduct.quantity = existingProduct.quantity + product.quantity;
    } else {
      this.cartItems.push(product);
    }

    this.saveCart();
  }

  removeFromCart(index) {
    this.cartItems.splice(index, 1);
    this.saveCart();
  }

  saveCart() {
    localStorage.setItem("cart", JSON.stringify(this.cartItems));
  }

  get totalItems() {
    return this.cartItems.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
  }

  get totalPrice() {
    return this.cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }
}

const cartStore = new CartStore();

export default cartStore;
