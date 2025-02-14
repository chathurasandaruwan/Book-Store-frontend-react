import { Outlet } from "react-router"
import { useLocation } from "react-router"
import {NaviBar} from "./NaviBar.tsx";

export function RootLayout() {
  const location = useLocation()

  console.log(location.pathname)

  return (
    <div className="flex h-screen">
      <NaviBar onCartClick={()=>{console.log("clicked")}}/>
        <main className="p-4 flex-1 overflow-y-auto">
          <Outlet />
        </main>
    </div>
  )
}
