import React from "react";
import "./error-indicator.css";

const ErrorIndicator = () => {
  return (
    <div className="card text-white bg-danger mb-3">
      <div className="card-body">
        <h4 className="card-title">ERROR!</h4>
        <p className="card-text">Something has gone terribly wrong</p>
      </div>
    </div>
  );
};

export default ErrorIndicator;
