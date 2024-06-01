import { useHandleFormSubmit } from "./handleFormSubmit"
import { useHandleFormItemChange } from "./handleFormItemChange";

import { useState } from "react";
import { format } from "date-fns";

import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, makeStyles } from "@material-ui/core";
import { SubmitConfirmationPopUp } from "./SubmitConfirmationPopup";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}))

export function Form() {

    const classes = useStyles()
    const [popupOpened, setPopupOpened] = useState(false)

    const [formData, setFormData] = useState({
        date: format(new Date(), "yyyy-MM-dd"),
        description: "",
        daySummary: "",
    })

    function closePopup(event, reason) {
        if (reason === 'clickaway') {
            return
        }
        setPopupOpened(false)
    }

    return (
        <>
            <form onSubmit={(e) => {
                setFormData(
                    {
                        date: format(new Date(), "yyyy-MM-dd"),
                        description: "",
                        daySummary: "",
                    }
                )
                setPopupOpened(true)
                useHandleFormSubmit(e, formData)
            }}>
                <TextField 
                    id="date" 
                    name="date" 
                    label="Date" 
                    type="date" 
                    color="primary" 
                    defaultValue={formData.date} className={classes.textField} 
                    onChange={(e) => setFormData(useHandleFormItemChange(e, formData))} 
                />
                <br />
                <br />
                <TextField 
                    multiline 
                    required 
                    fullWidth 
                    id="outlined-multiline-static" 
                    name="description" 
                    label="How was your day?" 
                    color="primary" 
                    variant="filled" 
                    minRows={7} 
                    value={formData.description} 
                    onChange={(e) => setFormData(useHandleFormItemChange(e, formData))} 
                />
                <br />
                <br />
                <FormControl component="fieldset">
                    <FormLabel component="legend" color="primary"> Your day summary </FormLabel>
                    <RadioGroup onChange={(e) => setFormData(useHandleFormItemChange(e, formData))} name="daySummary" color="primary" >
                        <FormControlLabel value="bad" control={<Radio color="primary" checked={formData.daySummary == "bad"} />} label="Bad" color="primary" />
                        <FormControlLabel value="normal" label="Normal" control={<Radio color="primary" checked={formData.daySummary == "normal"} />} color="primary" />
                        <FormControlLabel value="good" control={<Radio color="primary" checked={formData.daySummary == "good"} />} label="Good" color="primary" />
                    </RadioGroup>
                </FormControl>
                <br />
                <br />
                <Button variant="contained" color="primary" type="submit"> Submit </Button>
            </form>
            <SubmitConfirmationPopUp popupOpened={popupOpened} closePopup={closePopup}/>
        </>
    )

}