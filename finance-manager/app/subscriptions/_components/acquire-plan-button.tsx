"use client";

import { Button } from "@/app/_components/ui/button";
import { loadStripe } from "@stripe/stripe-js";
import { createStripeCheckout } from "../_actions/create-checkout";
import Stripe from "stripe";

const AcquirePlanButton = () => {
  const handleAcquirePlanClick = async () => {
    const { sessionId } = await createStripeCheckout();
    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
      throw new Error("Stripe publishable key not found");
    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
    );
    if (!stripe) throw new Error("Stripe not initialized");
    await stripe.redirectToCheckout({ sessionId });
  };

    

  return (
    <Button
      onClick={handleAcquirePlanClick}
      className="w-full rounded-full py-4 text-lg font-bold"
    >
      Assinar
    </Button>
  );
};

export default AcquirePlanButton;
