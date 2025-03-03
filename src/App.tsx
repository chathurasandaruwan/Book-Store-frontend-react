import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {RootLayout} from "./components/RootLayout.tsx";
import {Dashboard} from "./pages/Dashboard.tsx";
import {Books} from "./pages/Books.tsx";
import {Categories} from "./pages/Categories.tsx";
import {ContactUs} from "./pages/ContactUs.tsx";

function App() {
    const routes = createBrowserRouter([
        {
            path: "",
            element: <RootLayout />,
            children: [
                { path: "", element: <Dashboard /> },
                { path: "/books", element: <Books /> },
                { path: "/categories", element: <Categories /> },
                { path: "/contactUs", element: <ContactUs /> }
            ]
        }
    ])
  return (
      <><RouterProvider router={routes} /></>
  )
}

export default App
