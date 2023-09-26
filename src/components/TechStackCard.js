import React from "react";

const TechStackCard = ({ img, title, desc, link }) => {
  return (
    <div>
      <a href={link} target="_blank">
        <img src={img} />
      </a>
      <div className="border p-4 flex flex-col gap-4">
        <p className="font-bold text-2xl">{title}</p>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default TechStackCard;
