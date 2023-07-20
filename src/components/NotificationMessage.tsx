import { useState, Fragment } from "react";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

type Props = {
    message?: string
}

const NotificationMessage = (props: Props) => {

    const [open, setOpen] = useState(true);

    return (
        <div className="z-10">
            <Alert
                severity="info"
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
                sx={{ mb: 2 }}
            >
                Close me!
            </Alert>
        </div>
    );
}

export default NotificationMessage;