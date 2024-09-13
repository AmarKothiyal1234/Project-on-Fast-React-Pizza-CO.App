import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [paymentSucceeded, setPaymentSucceeded] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setError(error.message);
      setProcessing(false);
    } else {
      console.log("PaymentMethod:", paymentMethod);

      setTimeout(() => {
        setPaymentSucceeded(true);
        setProcessing(false);
        alert("Payment successful!");
      }, 1000);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement className="StripeElement" />
      {error && <div className="error-message">{error}</div>}
      <button type="submit" disabled={!stripe || processing}>
        {processing ? "Processing..." : "Pay"}
      </button>
      {paymentSucceeded && (
        <div className="success-message">Payment succeeded!</div>
      )}
    </form>
  );
}
