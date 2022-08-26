import React from "react";
import { useGlobalContext } from "../context";
import phone from "../Images/phone.svg";

const Hero = () => {
  const { closeSubMenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubMenu}>
      <div className="hero-center">
        <div className="hero-info">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of businesses of all sizes—from startups to large
            enterprises—use Stripe’s software and APIs to accept payments, send
            payouts, and manage their businesses online.
          </p>
        </div>
        <img src={phone} alt="" className="hero-phone" />
      </div>
    </section>
  );
};

export default Hero;
