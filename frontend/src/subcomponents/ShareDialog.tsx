import { Dialog, DialogTitle, DialogContent, TextField } from "@material-ui/core";
import IconButton from "./ButtonIcon";
import "../styles/subcomponents/ShareDialog.css";

type ShareDialogProps = {
    packId: string,
    dialogStatus: boolean,
    handleClose: Function
}

const ShareDialog = (props: ShareDialogProps) => {
    return(
        <>
            <div className="share-dialog-container">
                <Dialog open={props.dialogStatus} onClose={() => {props.handleClose()}}>
                    <DialogTitle>
                        Share Pack
                    </DialogTitle>
                    <DialogContent>
                        <TextField variant="outlined" value={`vocabularium.io/${props.packId}`} />
                        <IconButton icon="copy" onClick={() => {console.log("copy")}} />
                    </DialogContent>
                </Dialog>
            </div>
        </>
    )
}

export default ShareDialog;