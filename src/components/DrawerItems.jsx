import { Divider, List, ListItem, ListItemIcon, ListItemText, makeStyles } from "@material-ui/core"
import CreateNewFolderRoundedIcon from '@material-ui/icons/CreateNewFolderRounded';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import { useLocation, useNavigate } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
}))

const navigations = [
    {text: "All Journals", path: "/", icon: <CreateNewFolderRoundedIcon />},
    {text: "Create", path: "/create", icon: <AllInboxIcon />}
]

export function DrawerItems() {
    const classes = useStyles()
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                {navigations.map((e, i) => (
                    <ListItem key={i} button onClick={() => navigate(e.path)} selected={location.pathname == e.path}>
                        <ListItemIcon>{e.icon}</ListItemIcon>
                        <ListItemText primary={e.text} />
                    </ListItem>
                ))}
            </List>
        </div>
    )
}