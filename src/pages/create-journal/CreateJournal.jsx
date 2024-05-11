import { Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography, makeStyles } from "@material-ui/core";
import { format } from "date-fns";
import { useState } from "react";

const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    }, 
}))

export function CreateJournal() {
    
    const classes = useStyles()
    const currentDate = format(new Date(), 'yyyy-MM-dd');
    const [textFieldError, setTextFieldError] = useState(false)
    
    return (
        <Container>
            <Typography variant="h4" component="h1" color="secondary" gutterBottom>Create Your Today's Journal</Typography>
            <form>
                <TextField id="date" label="Date" type="date" defaultValue={currentDate} className={classes.textField} color="secondary" />
                <br />
                <br />
                <TextField id="outlined-multiline-static" required error={textFieldError} fullWidth color="secondary" label="How was your day?" multiline minRows={7} defaultValue="Describe your day here..." variant="filled" />
                <br />
                <br />
                <FormControl component="fieldset">
                    <FormLabel component="legend" color="secondary">Your day summary</FormLabel>
                    <RadioGroup aria-label="gender" name="daysummary">
                        <FormControlLabel value="bad" control={<Radio />} label="Bad" />
                        <FormControlLabel value="normal" control={<Radio />} label="Normal" />
                        <FormControlLabel value="good" control={<Radio />} label="Good" />
                    </RadioGroup>
                </FormControl>
                <br />
                <br />
                <Button variant="contained" color="secondary" type="submit">Submit</Button>
            </form>
        </Container>
    )
    
}