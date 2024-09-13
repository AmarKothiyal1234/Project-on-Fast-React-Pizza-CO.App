import React from "react";
import { Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import Order from "./Order";

export default function Footer({
  cartItems,
  totalBill,
  generateBill,
  cartItemCount,
}) {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  const calculateTotalBill = () => {
    return cartItems.reduce((acc, curr) => acc + curr.price, 0);
  };

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
      <ShoppingCart cartItems={cartItems} generateBill={generateBill} />
      <div>Items in cart: {cartItemCount}</div>
      <div>Total Bill: ${calculateTotalBill().toFixed(2)}</div>
      <Link to="/bill">
        <button className="btn" onClick={generateBill}>
          Generate Bill
        </button>
      </Link>
      <Link to="/payment">
        <button className="btn">Proceed to Payment</button>
      </Link>
    </footer>
  );
}
