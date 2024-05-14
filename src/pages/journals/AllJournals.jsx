import { Grid } from "@material-ui/core";
import { JournalCard } from "../../components/Card";

const localStorageKey = "react-journal-app"

export function AllJournals() {

    return (
        <div>

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

        </div>
    )
    
}