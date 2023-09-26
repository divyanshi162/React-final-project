import React from "react";

const ES2015 = ({ show }) => {
  if (show !== "es2015") return;

  return (
    <div>
      <p className="text-3xl">ES2015</p>
      <p>aka ES6</p>
    </div>
  );
};

export default ES2015;
