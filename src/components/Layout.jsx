import { Outlet } from "react-router-dom";
import { SideBarDesktop, SideBarMobile } from "./SideBar";
import { Hidden } from "@material-ui/core";
import { useState } from "react";

export function Layout() {
    const [mobileOpen, setMobileOpen] = useState(false)
    return (
        <div className="flex">
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