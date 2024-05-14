import { Outlet } from "react-router-dom";
import { SideBarDesktop, SideBarMobile } from "./SideBar";
import { Hidden } from "@material-ui/core";
import { useState } from "react";
import { HeaderBar } from "./HeaderBar";

export function Layout() {
    const [mobileOpen, setMobileOpen] = useState(false)
    return (
        <div className="flex">
            <HeaderBar setMobileOpen={setMobileOpen} />

            <Hidden smUp implementation="css">
                <SideBarMobile mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
            </Hidden>
            <Hidden smDown implementation="css">
                <SideBarDesktop />
            </Hidden>

            <Outlet />
        </div>
    )
}