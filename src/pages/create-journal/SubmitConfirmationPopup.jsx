import MuiAlert from '@material-ui/lab/Alert'
import { Snackbar } from "@material-ui/core";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function SubmitConfirmationPopUp({open, handleClosePopup}) {
    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClosePopup}>
            <Alert onClose={handleClosePopup} severity="success">Journal Submitted!</Alert>
        </Snackbar>
    )
}