import { Grid } from "@material-ui/core";
import { JournalCard } from "../../components/Card";

export function JournalsRenderer({journals}) {
    return (
        <Grid container spacing={3} justifyContent="center" alignItems="center">
            {
                journals.map((e, i) => 
                    <Grid item key={i} xs={12} sm={6} lg={4}>
                        <JournalCard avatar={"F"} title={e.daySummary} date={e.date} content={e.description} />
                    </Grid>
                )
            }
        </Grid>
    )
}