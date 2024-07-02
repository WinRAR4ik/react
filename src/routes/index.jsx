import { useRoutes } from "react-router-dom";
import { Layout } from "../components/layout";
import { Gallery, About, Contact, Home } from "../pages";

export const PageRoutes = () =>
  useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/gallery", element: <Gallery /> },
      ],
    },
  ]);
