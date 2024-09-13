import React from "react";
export default function Pizza({ pizzaObj, addToCart }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
        {!pizzaObj.soldOut && (
          <button onClick={() => addToCart(pizzaObj)}>
            Add to Cart {pizzaObj.name}
          </button>
        )}
      </div>
    </li>
  );
}
