import { Grid, Typography } from "@material-ui/core";

export function Divider({children}) {
    return (
        <Grid item  xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography>{children}</Typography>
        </Grid>
    )
}