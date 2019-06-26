import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

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
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "id" },
    { key: 1, label: "ip" },
    { key: 2, label: "centerId" },
    { key: 3, label: "userId" },
    { key: 4, label: "other" }
  ]);

  const handleDelete = chipToDelete => () => {
    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
  };

  return (
    <Box mb={2}>
      <Typography variant="h6" gutterBottom>
        Select Claims to be suggested
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Chip color="primary" onDelete={handleDelete} label="id" />
        </Grid>
        <Grid item xs={4}>
          <Chip color="primary" onDelete={handleDelete} label="ip" />
        </Grid>
        <Grid item xs={4}>
          <Chip color="primary" onDelete={handleDelete} label="centerId" />
        </Grid>
        <Grid item xs={4}>
          <Chip color="primary" onDelete={handleDelete} label="Function" />
        </Grid>
        <Grid item xs={4}>
          <Chip color="primary" onDelete={handleDelete} label="userId" />
        </Grid>
        <Grid item xs={4}>
          <Chip color="primary" onDelete={handleDelete} label="jwt" />
        </Grid>
      </Grid>
    </Box>
  );
}
