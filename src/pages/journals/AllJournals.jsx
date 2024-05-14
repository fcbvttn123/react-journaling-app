import { Button, Grid, Hidden } from "@material-ui/core";
import { JournalCard } from "../../components/Card";
import { SideBarDesktop, SideBarMobile } from "../../components/SideBar";
import { useState } from "react";

const localStorageKey = "react-journal-app"

export function AllJournals() {

    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <div className="flex">

            {/* Drawer */}
            <Hidden smUp implementation="css">
                <SideBarMobile mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
            </Hidden>
            <Hidden smDown implementation="css">
                <SideBarDesktop />
            </Hidden>

            {/* Cards */}
            <Grid container spacing={3} justifyContent="center" alignItems="center">
                <Button onClick={() => setMobileOpen(!mobileOpen)}>Click me</Button>
                {
                    JSON.parse(localStorage.getItem(localStorageKey)).map((e, i) => 
                        <Grid key={i} item xs={12} sm={6} lg={4}>
                            <JournalCard avatar={"F"} title={e.daySummary} date={e.date} content={e.description} />
                        </Grid>
                    )
                }
            </Grid>

        </div>
    )
    
}