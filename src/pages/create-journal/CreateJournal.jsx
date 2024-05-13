import { Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography, makeStyles } from "@material-ui/core";
import { format } from "date-fns";
import { useState } from "react";
import { useHandleFormItemChange } from "./handleFormItemChange";
import { useHandleFormSubmit } from "./handleFormSubmit";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export function CreateJournal() {

  const classes = useStyles();

  const [formData, setFormData] = useState({
    date: format(new Date(), "yyyy-MM-dd"),
    description: "",
    daySummary: "",
  });

  return (

    <Container>

      {/* Header Text */}
      <Typography variant="h4" component="h1" color="secondary" name="date" value={formData.date} gutterBottom>
        Create Your Today's Journal
      </Typography>

      {/* Form */}
      <form onSubmit={(e) => useHandleFormSubmit(e, formData)}>
        <TextField id="date" name="date" label="Date" type="date" color="secondary" onChange={(e) => setFormData(useHandleFormItemChange(e, formData))} defaultValue={formData.date} className={classes.textField} />
        <br />
        <br />
        <TextField onChange={(e) => setFormData(useHandleFormItemChange(e, formData))} id="outlined-multiline-static" name="description" label="How was your day?" color="secondary" variant="filled" value={formData.description} minRows={7} multiline required fullWidth />
        <br />
        <br />
        <FormControl component="fieldset">
          <FormLabel component="legend" color="secondary"> Your day summary </FormLabel>
          <RadioGroup onChange={(e) => setFormData(useHandleFormItemChange(e, formData))} name="daySummary" >
            <FormControlLabel value="bad" control={<Radio />} label="Bad" />
            <FormControlLabel value="normal" label="Normal" control={<Radio />} />
            <FormControlLabel value="good" control={<Radio />} label="Good" />
          </RadioGroup>
        </FormControl>
        <br />
        <br />
        <Button variant="contained" color="secondary" type="submit"> Submit </Button>
      </form>

    </Container>

  );

}
