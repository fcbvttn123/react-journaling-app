import { Grid, Typography, makeStyles } from "@material-ui/core";
import { clsx } from "clsx";

const useStyles = makeStyles({
    marginTop: {
        marginTop: "50px"
    }, 
    greyText: {
        color: "#bdbdbd"
    }
})

export function Divider({children, indexNumber}) {
    const classes = useStyles()
    return (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant="h4" className={clsx(indexNumber !== 0 && classes.marginTop, classes.greyText)}>{children}</Typography>
        </Grid>
    )
}