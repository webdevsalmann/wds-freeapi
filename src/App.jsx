import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from "./pages/home/Home";
import { DataProvider } from "./context/DataContext";

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);


export default function App() {
  return (
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  )
}