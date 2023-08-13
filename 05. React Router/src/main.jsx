import ReactDOM from "react-dom/client";
import Body from "./Body.jsx";
import App from "./App.jsx";
import Contact from "./contact.jsx";
import ProductWatcher from "./ProductWatcher.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <h1>This is About Page.</h1>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <h1>Please login here......</h1>,
      },
      {
        path: "/email",
        element: <h1>Please email here......</h1>,
      },
      {
        path: "/product/:id",
        element: <ProductWatcher />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
