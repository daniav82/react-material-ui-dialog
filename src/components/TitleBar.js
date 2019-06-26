import React from "react";
import Typography from "@material-ui/core/Typography";
import HelpIcon from "@material-ui/icons/Help";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary
  },
  icon: {
    margin: theme.spacing(1),
    fontSize: 24
  }
}));

export default function TitleBar() {
  const classes = useStyles();
  return (
    <div className="jwt-settings-title">
      <Grid container spacing={3}>
        <Grid item xs={10}>
          <Typography variant="h4" gutterBottom>
            JWT Settings
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <HelpIcon className={classes.icon} />
        </Grid>
      </Grid>
    </div>
  );
}
