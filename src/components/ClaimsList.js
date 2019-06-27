import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: theme.spacing(0.5)
  },
  chip: {
    margin: theme.spacing(0.5)
  }
}));

export default function ChipsArray() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([]);
  const [newClaim, setNewClaim] = React.useState("");

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true
  });

  function handleAdd(event) {
    setChipData([{ label: event.target.value }, ...chipData]);
  }

  function handleDelete(chipToDelete) {
    setChipData(chips =>
      chips.filter(chip => chip.label !== chipToDelete.label)
    );
  }

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  function onKeyPress(event) {
    if (event.key === "Enter") {
      handleAdd(event);
      setNewClaim("");
    }
  }

  return (
    <Box mb={2}>
      <Typography variant="subtitle2" gutterBottom>
        Add Claims to be suggested
      </Typography>
      <TextField
        id="new-claim"
        value={newClaim}
        placeholder="Add new claim"
        className={classes.textField}
        onKeyPress={onKeyPress}
        onChange={event => setNewClaim(event.target.value)}
        margin="normal"
      />

      <Grid container spacing={1}>
        {chipData.map(data => {
          return (
            <Grid item xs={4}>
              <Chip
                key={data.key}
                variant="outlined"
                color="primary"
                onDelete={() => handleDelete(data)}
                className={classes.chip}
                icon={
                  <Checkbox
                    onChange={handleChange("checkedB")}
                    color="primary"
                    inputProps={{
                      "aria-label": "secondary checkbox"
                    }}
                  />
                }
                label={data.label}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
