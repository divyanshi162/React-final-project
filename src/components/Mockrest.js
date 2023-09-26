import React from "react";

const Mockrest = ({ show }) => {
  if (show !== "mockrest") return;
  return (
    <div>
      <p className="text-3xl">Mock REST</p>
      <p>Custom written mock REST</p>
    </div>
  );
};

export default Mockrest;
