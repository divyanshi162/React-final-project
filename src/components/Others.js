import React from "react";

const Others = ({ show }) => {
  if (show !== "others") return;

  return (
    <div>
      <p className="text-3xl">Others</p>
      <ul className="list-disc pl-6">
        <li>Redux</li>
        <li>Redux Form</li>
        <li>Lodash</li>
        <li>React Bootstrap Table</li>
        <li>Font Awesome (for icons)</li>
        <li>Hot Module Replacement (HMR)</li>
      </ul>
    </div>
  );
};

export default Others;
