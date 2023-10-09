import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App.tsx";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Post from "@/components/Post";
import Login from "@/components/Login";
import Profile from "@/components/Profile";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/post/:id",
    element: <Post />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
