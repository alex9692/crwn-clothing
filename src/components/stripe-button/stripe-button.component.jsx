import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const apiKey = "pk_test_pyY1zKCQesvnmM7ylC4SN0bo00fN3tMNCX";

  const tokenHandler = (token) => {
    console.log(token);
    alert("payment successfull");
  };

  return (
    <StripeCheckout
      label="PAY NOW"
      name="CRWN Clothin Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      stripeKey={apiKey}
      token={tokenHandler}
    />
  );
};

export default StripeCheckoutButton;
