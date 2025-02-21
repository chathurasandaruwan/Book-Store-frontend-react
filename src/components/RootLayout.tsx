import { Outlet } from "react-router"
import {NaviBar} from "./NaviBar.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../store/Store.ts";
import {LoadingAnimation} from "./LoadingAnimation.tsx";
import {useEffect, useState} from "react";

export function RootLayout() {
    const [loading,setLoading] = useState(false);
    const isLoadingBook: boolean = useSelector((state:RootState) => state.bookData.loading);
    useEffect(() => {
        setLoading(isLoadingBook);
    }, [isLoadingBook]);
    return (
        <>
            <NaviBar/>
            {loading && <LoadingAnimation/>}
            <Outlet />
      </>
    )
}
