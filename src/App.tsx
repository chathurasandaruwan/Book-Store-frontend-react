import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {RootLayout} from "./components/RootLayout.tsx";
import {Dashboard} from "./pages/Dashboard.tsx";
import {Books} from "./pages/Books.tsx";
import {Categories} from "./pages/Categories.tsx";
import {About} from "./pages/About.tsx";

function App() {
    const routes = createBrowserRouter([
        {
            path: "",
            element: <RootLayout />,
            children: [
                { path: "", element: <Dashboard /> },
                { path: "/books", element: <Books /> },
                { path: "/categories", element: <Categories /> },
                { path: "/about", element: <About /> }
            ]
        }
    ])
  return (
      <><RouterProvider router={routes} /></>
  )
}

export default App
