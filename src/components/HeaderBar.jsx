import { AppBar, IconButton, InputBase, Toolbar, Typography, alpha, makeStyles } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { drawerWidth } from "./SideBar";

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
        },
        [theme.breakpoints.down('sm')]: {
            width: `100%`,
        },
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}))

export function HeaderBar() {
    const classes = useStyles()
    return (
        <div>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>Hello David</Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}> <SearchIcon /> </div>
                        <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput, }} inputProps={{ 'aria-label': 'search' }} />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}