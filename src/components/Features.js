import React, { useState } from "react";
import Mockrest from "./Mockrest";
import UnitTests from "./UnitTests";
import ES2015 from "./ES2015";
import Others from "./Others";

const Features = () => {
  const [show, setShow] = useState("mockrest");

  function clickHandler(option) {
    setShow(option);
  }

  return (
    <div className="flex justify-center flex-col gap-8 px-16 mt-8 mb-8">
      <p className="text-center text-6xl">Features</p>
      <div className="flex gap-4 justify-center">
        <button
          className={`py-2 px-4  rounded-md ${
            show === "mockrest" ? "bg-[#0275d8] text-white" : "text-[#0275d8]"
          }`}
          onClick={() => clickHandler("mockrest")}
        >
          Mock REST
        </button>
        <button
          className={`py-2 px-4  rounded-md ${
            show === "unittest" ? "bg-[#0275d8] text-white" : "text-[#0275d8]"
          }`}
          onClick={() => clickHandler("unittest")}
        >
          Unit Tests
        </button>
        <button
          className={`py-2 px-4  rounded-md ${
            show === "es2015" ? "bg-[#0275d8] text-white" : "text-[#0275d8]"
          }`}
          onClick={() => clickHandler("es2015")}
        >
          ES2015
        </button>
        <button
          className={`py-2 px-4  rounded-md ${
            show === "others" ? "bg-[#0275d8] text-white" : "text-[#0275d8]"
          }`}
          onClick={() => clickHandler("others")}
        >
          Others
        </button>
      </div>
      <Mockrest show={show} />
      <UnitTests show={show} />
      <ES2015 show={show} />
      <Others show={show} />
    </div>
  );
};

export default Features;
