import { Outlet } from "react-router"
import {NaviBar} from "./NaviBar.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../store/Store.ts";
import {LoadingAnimation} from "./LoadingAnimation.tsx";
import {useEffect, useState} from "react";
import {ToastContainer} from "react-toastify";

export function RootLayout() {
    const [loading,setLoading] = useState(false);
    const isLoadingBook: boolean = useSelector((state:RootState) => state.bookData.loading);
    const isLoadingUser: boolean = useSelector((state:RootState) => state.userData.loading);
    useEffect(() => {
        setLoading(isLoadingBook || isLoadingUser);
    }, [isLoadingBook,isLoadingUser]);
    return (
        <>
            <NaviBar/>
            {loading && <LoadingAnimation/>}
            <ToastContainer position={"bottom-right"} theme="dark"/>
            <Outlet />
      </>
    )
}
