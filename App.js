import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header"; // Import the Header component
import Bill from "./Bill";
import "./styles.css";
import CheckoutForm from "./CheckoutForm";
import Menu from "./Menu";
import Footer from "./Footer";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "./pay.css";

// Replace 'your-public-key' with your actual Stripe public key
const stripePromise = loadStripe("your-public-key");

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const generateBill = () => {
    // Logic to generate the bill
  };

  return (
    <Router>
      <Header /> {/* Include the Header component */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Menu addToCart={addToCart} />
              <Footer
                cartItems={cartItems}
                generateBill={generateBill}
                cartItemCount={cartItems.length}
              />
            </>
          }
        />
        <Route path="/bill" element={<Bill cartItems={cartItems} />} />
        <Route
          path="/payment"
          element={
            <div className="payment-container">
              <h2>Payment</h2>
              <Elements stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
