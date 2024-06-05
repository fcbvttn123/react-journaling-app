import { Grid } from "@material-ui/core";
import { JournalCard } from "../../components/Card";
import { useGetAccountInfo } from "../../hooks/useGetAccountInfo";
import { format, isSameMonth } from "date-fns";
import { Divider } from "./Divider";
import { v4 } from "uuid";

export function JournalsRenderer({journals}) {
    const accountInfo = useGetAccountInfo()
    return (
        <Grid container spacing={3} justifyContent="center" alignItems="center">
            {
                journals.map((e, i) => 
                    <>
                        {/* Always render the Divider for the first card */}
                        {i == 0 && <Divider key={v4} indexNumber={i}>{format(e.date, "LLLL yyyy")}</Divider>}
                        
                        {/* If the previous card is not null, do the if statement: if the current card and the previous card are not in the same month, render the Divider */}
                        {journals[i-1] && (isSameMonth(e.date, journals[i-1].date) || <Divider key={v4} indexNumber={i}>{format(e.date, "LLLL yyyy")}</Divider>)}
                        
                        <Grid item key={i} xs={12} sm={6} lg={4}>
                            <JournalCard avatar={accountInfo.displayName[0]} title={e.daySummary} date={e.date} content={e.description} />
                        </Grid>
                    </>
                )
            }
        </Grid>
    )
}