import { Avatar, Card, CardContent, CardHeader, Typography, makeStyles } from "@material-ui/core";
import { red } from '@material-ui/core/colors';

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
    avatar: {
        backgroundColor: red[500],
    },
}));

export function JournalCard({avatar, title, date, content}) {

    const classes = useStyles();

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <Card className={classes.root} elevation={6} style={{marginLeft: "auto", marginRight: "auto"}}>
            <CardHeader 
                avatar={<Avatar className={classes.avatar}>{avatar}</Avatar>} 
                title={`${capitalizeFirstLetter(title)} Day`}
                subheader={date}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {content}
                </Typography>
            </CardContent>
        </Card>
    )

}