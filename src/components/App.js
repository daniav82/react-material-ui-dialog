import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DescriptionBar from "./DescriptionBar";
import ClaimsList from "./ClaimsList";
import TitleBar from "./TitleBar";
import SecretKeySection from "./SecretKeySection";
import ApiDialog from "./ApiDialog.js";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

export default function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <ApiDialog
        title={() => <TitleBar />}
        content={() => (
          <>
            <DescriptionBar />
            <ClaimsList />
            <SecretKeySection />
          </>
        )}
        footer={() => (
          <>
            <Button
              onClick={handleClose}
              variant="contained"
              className={classes.button}
            >
              Cancel
            </Button>
            <Button
              onClick={handleClose}
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Save
            </Button>
          </>
        )}
        open={open}
      />
    </div>
  );
}
