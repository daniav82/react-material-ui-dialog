import React from "react";
import TitleBar from "./TitleBar";
import DescriptionBar from "./DescriptionBar";
import JWTBar from "./JWTBar";
import ButtonsBar from "./ButtonsBar";
import ClaimsList from "./ClaimsList";

class JWTModal extends React.Component {
  render() {
    return (
      <div className="ui container">
        <TitleBar />
        <DescriptionBar />
        <JWTBar />
        <ClaimsList />
        <TitleBar />
        <DescriptionBar />
        <div class="ui transparent input">
          <input type="text" placeholder="API Secret Key" />
        </div>
        <div class="ui divider" />
        <ButtonsBar />
      </div>
    );
  }
}

export default JWTModal;
