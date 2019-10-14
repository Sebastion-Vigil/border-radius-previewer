import React from "react";

import "../css/Square.css";

class Square extends React.Component {
  render() {
    return (
      <div className="square-container">
        <div className="Square"
        title={this.props.titleInfo}
        style={this.props.style}
        onPointerEnter={this.props.pointerEnter}
        onPointerLeave={this.props.pointerLeave}
        onClick={this.props.copyToClipboard}
        />
      </div>
    );
  }
}

export default Square;
