import React, { useContext } from "react";
import SelectedContext from "../utils/SelectedContext";

const CourseElement = ({
  title,
  length,
  author,
  catergory,
  id,
  link,
  index,
}) => {
  const { selected, setSelected } = useContext(SelectedContext);

  return (
    <div
      className={`min-w-full flex gap-2 hover:cursor-pointer ${
        index % 2 === 0 ? "bg-gray-200" : ""
      } ${selected === id ? "!bg-[#C1F291]" : ""}`}
      onClick={() => setSelected(id)}
    >
      <div className="w-[25%] whitespace-nowrap text-ellipsis overflow-hidden px-3 py-2">
        <a
          href={link || "#"}
          className="text-[#0275d8] hover:underline"
          target="_blank"
        >
          {title}
        </a>
      </div>
      <div className="w-[25%] whitespace-nowrap text-ellipsis overflow-hidden px-3 py-2">
        <p>{length}</p>
      </div>
      <div className="w-[25%] whitespace-nowrap text-ellipsis overflow-hidden px-3 py-2">
        <p>{catergory}</p>
      </div>
      <div className="w-[25%] whitespace-nowrap text-ellipsis overflow-hidden px-3 py-2">
        <p>{author}</p>
      </div>
    </div>
  );
};

export default CourseElement;
