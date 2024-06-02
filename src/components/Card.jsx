import { Avatar, Card, CardContent, CardHeader, IconButton, Typography, makeStyles } from "@material-ui/core";
import { green, grey, pink } from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/Delete';
import { useCapitalizeFirstLetter } from "../hooks/capitalizeFirstLetter";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500,
        height: 300
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatarGreenColor: {
        color: theme.palette.getContrastText(green[500]),
        backgroundColor: green[500],
    },
    avatarGreyColor: {
        color: theme.palette.getContrastText(grey[500]),
        backgroundColor: grey[500],
    }, 
    avatarPinkColor: {
        color: theme.palette.getContrastText(pink[500]),
        backgroundColor: pink[500],
    }
}));

export function JournalCard({avatar, title, date, content}) {

    const classes = useStyles();
    let avatarColor = classes.avatarGreenColor

    if(title == "normal") {
        avatarColor = classes.avatarPinkColor
    } else if(title == "bad") {
        avatarColor = classes.avatarGreyColor
    }

    return (
        <Card className={classes.root} elevation={6} style={{marginLeft: "auto", marginRight: "auto"}}>
            <CardHeader 
                avatar={<Avatar className={avatarColor}>{avatar}</Avatar>} 
                title={<Typography variant="h6" component="h1">{`${useCapitalizeFirstLetter(title)} Day`}</Typography>}
                subheader={date}
                action={<IconButton onClick={() => console.log("hi")}> <DeleteIcon /> </IconButton>}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {useCapitalizeFirstLetter(content)}
                </Typography>
            </CardContent>
        </Card>
    )

}




// https://stackoverflow.com/questions/53221621/how-to-wrap-or-truncate-long-strings-in-a-material-ui-expansionpanelsummary