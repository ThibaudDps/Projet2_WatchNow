import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";

import Home from "./pages/Home";
import AllMovies from "./pages/AllMovies";
import MoviePage from "./pages/MoviePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movies",
    element: <AllMovies />,
    loader: () => {
      return axios
        .get("http://localhost:3310/api/movies")
        .then((res) => res.data)
        .catch((err) => console.error(err));
    },
  },
  {
    path: "/movies/:movieId",
    element: <MoviePage />,
    loader: () => {
      return axios
        .get("http://localhost:3310/api/movies/")
        .then((res) => res.data)
        .catch((err) => console.error(err));
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
