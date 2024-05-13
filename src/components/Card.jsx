import { Avatar, Card, CardContent, CardHeader, IconButton, Typography, makeStyles } from "@material-ui/core";
import { green, grey, pink } from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
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

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <Card className={classes.root} elevation={6} style={{marginLeft: "auto", marginRight: "auto"}}>
            <CardHeader 
                avatar={<Avatar className={avatarColor}>{avatar}</Avatar>} 
                title={<Typography variant="h6" component="h1">{`${capitalizeFirstLetter(title)} Day`}</Typography>}
                subheader={date}
                action={<IconButton onClick={() => console.log("hi")}> <DeleteIcon /> </IconButton>}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {capitalizeFirstLetter(content)}
                </Typography>
            </CardContent>
        </Card>
    )

}