import React from "react";
import { createRoot } from "react-dom/client";
import AppLayout from "./components/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import Form from "./components/Form";
import FormEdit from "./components/FormEdit";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/about",
        element: <About />,
      },
      { path: "/courses", element: <Courses /> },
      {
        path: "/course",
        element: <Form />,
      },
      {
        path: "/course/:title",
        element: <FormEdit />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
