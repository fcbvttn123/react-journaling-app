import { Drawer, makeStyles, useTheme } from "@material-ui/core"
import { DrawerItems } from "./DrawerItems";

export const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
}))

export function SideBarDesktop() {
    const classes = useStyles()
    return (
        <nav className={classes.drawer}>
            <Drawer variant="permanent" open={true} classes={{ paper: classes.drawerPaper}}>
                <DrawerItems />
            </Drawer>
        </nav>
    )
}

export function SideBarMobile({mobileOpen, setMobileOpen}) {
    const classes = useStyles()
    const theme = useTheme()
    return (
        <nav className={classes.drawer}>
            <Drawer variant="temporary" anchor={theme.direction === "rtl" ? "right" : "left"} open={mobileOpen} onClose={() => setMobileOpen(!mobileOpen)} classes={{ paper: classes.drawerPaper, }}>
                <DrawerItems />
            </Drawer>
        </nav>
    )
}