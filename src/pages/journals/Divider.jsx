import { Typography, makeStyles } from "@material-ui/core";
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
        <div className="divider-item">
            <Typography variant="h4" className={clsx(indexNumber !== 0 && classes.marginTop, classes.greyText)}>{children}</Typography>
        </div>
    )
}