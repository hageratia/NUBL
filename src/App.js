import { createHashRouter, redirect, RouterProvider } from "react-router-dom";
import Layout from "../src/Components/Layout/Layout";
import "./App.css";
import Home from "./Components/Home/Home";

function App() {
  const router = createHashRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, loader: () => redirect("home") },
        {
          path: "home",
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
