import {Dialog} from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";


export function Login({open, changeStateOpen}) {
    return (
        <Dialog open={open} onClose={changeStateOpen} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Log in</DialogTitle>
            <DialogContent>
                <div className="fb-login-button" data-width="" data-size="large" data-button-type="continue_with"
                     data-layout="default" data-auto-logout-link="false" data-use-continue-as="false"/>
            </DialogContent>
        </Dialog>
    )
}