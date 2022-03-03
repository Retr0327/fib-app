import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Alert, AlertTitle, Collapse, IconButton } from "@mui/material";

function AlertMessage({
  title,
  errorMessage,
  setAlertMessage,
  severity,
  ...rest
}) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (errorMessage) {
      setOpen(true);
    }
  }, [errorMessage]);

  const onClick = () => {
    setAlertMessage(false);
    setOpen(false);
  };

  return (
    <Collapse in={open} {...rest}>
      <Alert
        severity={severity}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={onClick}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        <>
          {title && <AlertTitle>{title}</AlertTitle>}
          {errorMessage}
        </>
      </Alert>
    </Collapse>
  );
}

export default AlertMessage;
