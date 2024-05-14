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

      <div className="h-24 w-full"></div>

      {/* Header Text */}
      <Typography variant="h4" component="h1" color="primary" name="date" value={formData.date} gutterBottom>
        Create Your Today's Journal
      </Typography>

      {/* Form */}
      <form onSubmit={(e) => useHandleFormSubmit(e, formData)}>
        <TextField id="date" name="date" label="Date" type="date" color="primary" onChange={(e) => setFormData(useHandleFormItemChange(e, formData))} defaultValue={formData.date} className={classes.textField} />
        <br />
        <br />
        <TextField onChange={(e) => setFormData(useHandleFormItemChange(e, formData))} id="outlined-multiline-static" name="description" label="How was your day?" color="primary" variant="filled" value={formData.description} minRows={7} multiline required fullWidth />
        <br />
        <br />
        <FormControl component="fieldset">
          <FormLabel component="legend" color="primary"> Your day summary </FormLabel>
          <RadioGroup onChange={(e) => setFormData(useHandleFormItemChange(e, formData))} name="daySummary" color="primary" >
            <FormControlLabel value="bad" control={<Radio color="primary" />} label="Bad" color="primary" />
            <FormControlLabel value="normal" label="Normal" control={<Radio color="primary" />} color="primary" />
            <FormControlLabel value="good" control={<Radio color="primary" />} label="Good" color="primary" />
          </RadioGroup>
        </FormControl>
        <br />
        <br />
        <Button variant="contained" color="primary" type="submit"> Submit </Button>
      </form>

    </Container>

  );

}
