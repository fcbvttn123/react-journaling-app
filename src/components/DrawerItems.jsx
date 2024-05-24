import { Avatar, Card, CardHeader, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles } from "@material-ui/core"
import CreateNewFolderRoundedIcon from '@material-ui/icons/CreateNewFolderRounded';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import { useLocation, useNavigate } from "react-router-dom";
import { useGetAccountInfo } from "../hooks/useGetAccountInfo";
import { blue, purple, red } from "@material-ui/core/colors";
import { format } from "date-fns";
import { ExitToApp } from "@material-ui/icons";
import { useLogout } from "../hooks/logout";

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    card: {
        maxWidth: 345, 
        paddingBottom: 5,
        paddingTop: 5
    },
    avatar: {
        backgroundColor: blue[900],
    },
}))

const navigations = [
    {text: "All Journals", path: "/", icon: <CreateNewFolderRoundedIcon />},
    {text: "Create", path: "/create", icon: <AllInboxIcon />}
]

export function DrawerItems() {
    const classes = useStyles()
    const navigate = useNavigate()
    const location = useLocation()
    const accountInfo = useGetAccountInfo()
    return (
        <div>
            <Card className={classes.card}>
                <CardHeader 
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>{accountInfo.displayName[0]}</Avatar>
                    }
                    action={
                        <IconButton aria-label="settings" onClick={() => useLogout(navigate)}>
                            <ExitToApp />
                        </IconButton>
                    }
                    title={accountInfo.displayName}
                    subheader={format(new Date(), "yyyy-MM-dd")}
                />
            </Card>
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