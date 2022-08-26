import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section-center">
      <h2>Ooops! Dead End</h2>
      <Link to="/" className="btn">
        Back to home
      </Link>
    </section>
  );
};

export default Error;
