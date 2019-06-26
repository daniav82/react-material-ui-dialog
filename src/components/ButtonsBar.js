import React from "react";
import Button from "@material-ui/core/Button";

class ButtonsBar extends React.Component {
  render() {
    return (
      <div className="buttons-bar">
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Subscribe
        </Button>
      </div>
    );
  }
}

export default ButtonsBar;
