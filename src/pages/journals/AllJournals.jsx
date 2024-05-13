import { Drawer, Grid, makeStyles } from "@material-ui/core";
import { JournalCard } from "../../components/Card";

const localStorageKey = "react-journal-app"
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
}))

export function AllJournals() {

    const classes = useStyles();

    return (
        <div className="m-4">
            
            {/* Cards */}
            <Grid container spacing={3} justifyContent="center" alignItems="center">
                {
                    JSON.parse(localStorage.getItem(localStorageKey)).map((e, i) => 
                        <Grid key={i} item xs={12} sm={6} lg={4}>
                            <JournalCard avatar={"F"} title={e.daySummary} date={e.date} content={e.description} />
                        </Grid>
                    )
                }
            </Grid>

            {/* Drawer */}
            <nav className={classes.drawer}>
                <Drawer>

                </Drawer>
            </nav>

        </div>
    )
    
}