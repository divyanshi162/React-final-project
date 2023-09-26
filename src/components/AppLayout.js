import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import { Outlet } from "react-router-dom";
import courseData from "../utils/courseData";
import CourseContext from "../utils/CourseContext";
import SelectedContext from "../utils/SelectedContext";

const AppLayout = () => {
  const [data, setData] = useState(courseData);
  const [selected, setSelected] = useState(null);

  return (
    <CourseContext.Provider value={{ data, setData }}>
      <SelectedContext.Provider value={{ selected, setSelected }}>
        <div>
          <Navbar />
          <Outlet />
        </div>
      </SelectedContext.Provider>
    </CourseContext.Provider>
  );
};

export default AppLayout;
