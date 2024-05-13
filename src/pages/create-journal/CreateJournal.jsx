import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { format } from "date-fns";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const localStorageKey = "react-journal-app"

export function CreateJournal() {
  const classes = useStyles();
  const currentDate = format(new Date(), "yyyy-MM-dd");

  const [allJournals, setAllJournals] = useState(JSON.parse(localStorage.getItem(localStorageKey)) || [])
  const [textFieldError, setTextFieldError] = useState(false);
  const [formData, setFormData] = useState({
    date: currentDate,
    description: "",
    daySummary: "",
  });

  function handleFormItemChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleFormSubmit(e) {
    e.preventDefault()
    if(!formData.description) {
      setTextFieldError(true)
    }
    setAllJournals(prev => {
      return [...prev, formData]
    })
  }

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(allJournals))
    setFormData({
      date: currentDate,
      description: "",
      daySummary: "",
    })
  }, [allJournals])

  return (
    <Container>
      {/* Header Text */}
      <Typography
        variant="h4"
        component="h1"
        color="secondary"
        name="date"
        value={formData.date}
        gutterBottom
      >
        Create Your Today's Journal
      </Typography>
      {/* Form */}
      <form onSubmit={handleFormSubmit}>
        <TextField
          id="date"
          name="date"
          label="Date"
          type="date"
          color="secondary"
          onChange={handleFormItemChange}
          defaultValue={formData.date}
          className={classes.textField}
        />
        <br />
        <br />
        <TextField
          id="outlined-multiline-static"
          name="description"
          label="How was your day?"
          color="secondary"
          variant="filled"
          value={formData.description}
          error={textFieldError}
          onChange={handleFormItemChange}
          minRows={7}
          multiline
          required
          fullWidth
        />
        <br />
        <br />
        <FormControl component="fieldset">
          <FormLabel component="legend" color="secondary"> Your day summary </FormLabel>
          <RadioGroup aria-label="gender" name="daySummary" onChange={handleFormItemChange}>
            <FormControlLabel value="bad" control={<Radio />} label="Bad" />
            <FormControlLabel value="normal" label="Normal" control={<Radio />} />
            <FormControlLabel value="good" control={<Radio />} label="Good" />
          </RadioGroup>
        </FormControl>
        <br />
        <br />
        <Button variant="contained" color="secondary" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
}
