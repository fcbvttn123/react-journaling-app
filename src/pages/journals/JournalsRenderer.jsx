import { Grid } from "@material-ui/core";
import { JournalCard } from "../../components/Card";
import { useGetAccountInfo } from "../../hooks/useGetAccountInfo";
import { format, isSameMonth } from "date-fns";
import { Divider } from "./Divider";

export function JournalsRenderer({journals}) {
    const accountInfo = useGetAccountInfo()
    return (
        <Grid container spacing={3} justifyContent="center" alignItems="center">
            {
                journals.map((e, i) => 
                    <>
                        {i == 0 && <Divider>{format(e.date, "LLLL yyyy")}</Divider>}
                        {journals[i-1] && (isSameMonth(e.date, journals[i-1].date) ? "" : <Divider>{format(e.date, "LLLL yyyy")}</Divider>)}
                        <Grid item key={i} xs={12} sm={6} lg={4}>
                            <JournalCard avatar={accountInfo.displayName[0]} title={e.daySummary} date={e.date} content={e.description} />
                        </Grid>
                    </>
                )
            }
        </Grid>
    )
}