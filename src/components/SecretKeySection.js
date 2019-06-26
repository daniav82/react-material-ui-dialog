import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
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

export default function SecretKeySection() {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          API Secret Key
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2" gutterBottom>
          The key is used to verify the validity, integrity and security
          signature when consuming the API with Private or Private Secure
          endpoints.
        </Typography>
        <Grid item xs={12}>
          <TextField
            id="api-secret-key"
            placeholder="API Secret Key"
            margin="normal"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
