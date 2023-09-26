import React from "react";

const UnitTests = ({ show }) => {
  if (show !== "unittest") return;

  return (
    <div>
      <p className="text-3xl">Unit Testing</p>
      <ul className="list-disc pl-6">
        <li>Jest</li>
        <li>Enzyme</li>
        <li>Nock</li>
        <li>Expect assertion</li>
        <li>Code coverage</li>
      </ul>
    </div>
  );
};

export default UnitTests;
