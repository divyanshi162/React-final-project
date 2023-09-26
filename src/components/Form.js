import React, { useContext, useState } from "react";
import CourseContext from "../utils/CourseContext";
import { useParams, useNavigate } from "react-router-dom";
import { v4 } from "uuid";

const Form = () => {
  const { id } = useParams();
  const { data, setData } = useContext(CourseContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("cory-house");
  const [length, setLength] = useState("");
  const [catergory, setCatergory] = useState("");

  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    const newCourse = {
      title: title,
      author: author,
      length: length,
      catergory: catergory,
      id: v4(),
    };
    setData((data) => {
      return [...data, newCourse];
    });
    navigate("/courses");
  }

  function cancelHandler(e) {
    e.preventDefault()
    navigate("/courses")
  }

  return (
    <div className="mt-4 px-16 flex flex-col gap-8">
      <p className="text-4xl font-bold">ADD</p>
      <form className="flex flex-col gap-6 w-full" onSubmit={submitHandler}>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="title" className=" font-semibold">
            Title
          </label>
          <input
            type="text"
            placeholder="Title of the course"
            name="title"
            id="title"
            required
            className="border px-4 py-2 rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="author" className=" font-semibold">
            Author
          </label>
          <select
            name="author"
            id="author"
            className="border px-4 py-2 rounded-md"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value={"cory-house"}>Cory House</option>
            <option value={"scott-allen"}>Scott Allen</option>
            <option value={"don-wahlin"}>Dan Wahlin</option>
          </select>
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="catergory" className=" font-semibold">
            Catergory
          </label>
          <input
            type="text"
            id="catergory"
            name="catergory"
            className="border px-4 py-2 rounded-md"
            placeholder="Category of the course"
            value={catergory}
            onChange={(e) => setCatergory(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="length" className=" font-semibold">
            Length
          </label>
          <input
            type="text"
            id="length"
            name="length"
            className="border px-4 py-2 rounded-md"
            placeholder="Length of course in minutes or hours"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        <div className="flex gap-4">
          <button className="px-5 py-1 border rounded-md bg-[#0275d8] text-white">Submit</button>
          <button className="px-5 py-1 border rounded-md bg-[#d0d0d1] text-black" onClick={cancelHandler}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
