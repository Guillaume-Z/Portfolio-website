import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import App from './App.tsx'

// Composants pages
import Home from './pages/Home'
import About from './pages/About'
import Myprojects from './pages/Myprojects'

// Création du router

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/myprojects",
        element: <Myprojects />,
      },
    ]
  },
]);

// Rendering

const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}