import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

class DescriptionBar extends React.Component {
  render() {
    return (
      <Box mb={2}>
        <Typography variant="body2" gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </Box>
    );
  }
}

export default DescriptionBar;
