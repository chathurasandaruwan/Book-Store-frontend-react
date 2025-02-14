import { Outlet } from "react-router"
import { useLocation } from "react-router"
import {NaviBar} from "./NaviBar.tsx";

export function RootLayout() {
    const location = useLocation()

    console.log(location.pathname)
    return (
        <>
            <NaviBar/>
            <Outlet />
      </>
    )
}
