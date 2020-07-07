import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51H228LGXDMKckQOhzTuVNqZP55AxzWu0G9JQV46iuzhaGh8nrWwwAHm4vvHC76OLOIq5l4txmL73ICX6jvaKRLTS00esE4Sepm";
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay"
      token={(token) => console.log(token)}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
