import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bill from "./Bill";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "./pay.css";

// Replace 'your-public-key' with your actual Stripe public key
const stripePromise = loadStripe("your-public-key");

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Bill />} />
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
