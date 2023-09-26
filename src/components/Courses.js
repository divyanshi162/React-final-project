import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CourseElement from "./CourseElement";
import CourseContext from "../utils/CourseContext";
import SelectedContext from "../utils/SelectedContext";
import find from "../utils/find";
import { sortAscending, sortDescending } from "../utils/sort";

const Courses = () => {
  const { data, setData } = useContext(CourseContext);
  const { selected, setSelected } = useContext(SelectedContext);

  const [filteredList, setFilteredList] = useState(data);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [catergory, setCatergory] = useState("");

  const [titleSort, setTitleSort] = useState(null);
  const [authorSort, setAuthorSort] = useState(null);
  const [catergorySort, setCatergorySort] = useState(null);
  const [lengthSort, setLengthSort] = useState(null);

  function search(field, searchfor) {
    const filteredData = data.filter((d) => {
      return d[field].toUpperCase().includes(searchfor.toUpperCase());
    });
    setFilteredList(filteredData);
  }

  useEffect(() => {
    search("title", title);
  }, [title]);

  useEffect(() => {
    search("author", author);
  }, [author]);

  useEffect(() => {
    search("catergory", catergory);
  }, [catergory]);

  function sortHandler(basedOn, sortBasedOn, updateBasedOn) {
    if (sortBasedOn === null || sortBasedOn === "descending") {
      sortAscending(basedOn, filteredList, setFilteredList);
      updateBasedOn("ascending");
    } else {
      sortDescending(basedOn, filteredList, setFilteredList);
      updateBasedOn("descending");
    }
  }

  return (
    <div className="px-16 mt-4 w-full flex flex-col gap-4">
      <p className="text-4xl font-bold">Courses</p>
      <div className="flex gap-4">
        <Link to="/course">
          <button className="px-5 py-1 border rounded-md bg-[#0275d8] text-white">
            New
          </button>
        </Link>

        <Link
          to={selected !== null ? `/course/${find(data, selected).title}` : "#"}
        >
          <button className="px-5 py-1 border rounded-md bg-[#f0ad4e] text-white">
            Edit
          </button>
        </Link>
        <button
          className="px-5 py-1 border rounded-md bg-[#d9534f] text-white"
          disabled={selected !== null ? false : true}
          onClick={(e) => {
            setFilteredList((filteredData) => {
              return filteredData.filter((d) => {
                return d.id !== selected;
              });
            });
            setSelected(null);
          }}
        >
          Delete
        </button>
      </div>
      <div className="w-full border rounded-md flex flex-col">
        <div className="flex w-full justify-evenly gap-2">
          <div className="w-[25%] px-3 py-2 flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <p
                className="text-l font-bold hover:cursor-pointer"
                onClick={() => {
                  sortHandler("title", titleSort, setTitleSort);
                }}
              >
                Title
              </p>
              <div>
                {titleSort === null || titleSort === "ascending" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 320 512"
                  >
                    <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
                  </svg>
                ) : null}

                {titleSort === null || titleSort === "descending" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 320 512"
                  >
                    <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                  </svg>
                ) : null}
              </div>
            </div>
            <input
              type="text"
              name="title"
              id="title"
              className="border py-1 px-2"
              placeholder="Enter Title..."
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="w-[25%] px-3 py-2 flex gap-2">
            <p
              className="text-l font-bold hover:cursor-pointer"
              onClick={() => {
                sortHandler("length", lengthSort, setLengthSort);
              }}
            >
              Length
            </p>
            <div>
              {lengthSort === null || lengthSort === "ascending" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 320 512"
                >
                  <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
                </svg>
              ) : null}

              {lengthSort === null || lengthSort === "descending" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 320 512"
                >
                  <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                </svg>
              ) : null}
            </div>
          </div>
          <div className="w-[25%] px-3 py-2 flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <p
                className="text-l font-bold hover:cursor-pointer"
                onClick={() => {
                  sortHandler("catergory", catergorySort, setCatergorySort);
                }}
              >
                Category
              </p>
              <div>
                {catergorySort === null || catergorySort === "ascending" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 320 512"
                  >
                    <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
                  </svg>
                ) : null}

                {catergorySort === null || catergorySort === "descending" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 320 512"
                  >
                    <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                  </svg>
                ) : null}
              </div>
            </div>
            <input
              type="text"
              name="category"
              id="category"
              className="border py-1 px-2"
              placeholder="Enter Category..."
              value={catergory}
              onChange={(e) => setCatergory(e.target.value)}
            />
          </div>
          <div className="w-[25%] px-3 py-2 flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <p
                className="text-l font-bold hover:cursor-pointer"
                onClick={() => {
                  sortHandler("author", authorSort, setAuthorSort);
                }}
              >
                Author
              </p>
              <div>
                {authorSort === null || authorSort === "ascending" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 320 512"
                  >
                    <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
                  </svg>
                ) : null}

                {authorSort === null || authorSort === "descending" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 320 512"
                  >
                    <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                  </svg>
                ) : null}
              </div>
            </div>
            <input
              type="text"
              name="author"
              id="author"
              className="border py-1 px-2"
              placeholder="Enter Author..."
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
        </div>
        <div className="flex w-full justify-evenly flex-col overflow-auto odd:bg-red-800">
          {filteredList.map(
            ({ title, length, author, catergory, id, link }, index) => (
              <CourseElement
                id={id}
                index={index}
                key={index}
                title={title}
                length={length}
                author={author}
                catergory={catergory}
                link={link}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
