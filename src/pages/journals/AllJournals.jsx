import { Grid } from "@material-ui/core";
import { JournalCard } from "../../components/Card";
import { useState } from "react"

const localStorageKey = "react-journal-app"

export function AllJournals() {
    const [allJournals, setAllJournals] = useState(JSON.parse(localStorage.getItem(localStorageKey)))
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <div className="m-4">
            <Grid container spacing={3} justifyContent="center">
                {allJournals.map((e, i) => <Grid key={i} item xs={12} sm={6} lg={4}><JournalCard avatar={"F"} title={e.daySummary} date={e.date} content={e.description} /></Grid>)}
            </Grid>
        </div>
    )
}