import React, { Component } from "react";
import { ScaleLoader } from "react-spinners";

export default class LoadingElement extends Component {
  render() {
    const override = `
    display: block;
    width: max-content;
    margin: 0 auto;
    border-color: black;
    `;
    return (
      <div className="loader-container">
        <ScaleLoader
          css={override}
          size={200}
          color={"#fff"}
          loading={this.props.loading}
        />
      </div>
    );
  }
}
