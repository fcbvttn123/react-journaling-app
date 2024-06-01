import MuiAlert from '@material-ui/lab/Alert'
import { Snackbar } from "@material-ui/core";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function SubmitConfirmationPopUp({popupOpened, closePopup}) {
    return (
        <Snackbar open={popupOpened} autoHideDuration={6000} onClose={closePopup}>
            <Alert onClose={closePopup} severity="success">Journal Submitted!</Alert>
        </Snackbar>
    )
}