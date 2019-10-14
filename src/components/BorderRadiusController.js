import React from "react";

import "../css/BorderRadiusController.css";

class BorderRadiusController extends React.Component {
  state = {
    index: 0,
    timer: undefined,
    radiiVisibility: {
      id0: { visibility: "hidden" },
      id1: { visibility: "hidden" },
      id2: { visibility: "hidden" },
      id3: { visibility: "hidden" },
      id4: { visibility: "hidden" },
      id5: { visibility: "hidden" },
      id6: { visibility: "hidden" },
      id7: { visibility: "hidden" }
    },
    pixelDisplay: {
      p0: ["0", "px"], // '0' + 'px'
      p1: ["0", "px"], // ['0', 'px']
      p2: ["0", "px"], // just a couple of ideas
      p3: ["0", "px"], // 0px 0px 0px 0px/0px 0px 0px 0px;
      p4: ["0", "px"],
      p5: ["0", "px"],
      p6: ["0", "px"],
      p7: ["0", "px"]
    }
  };

  radiiVisibilityToggle = () => {
    let index = this.state.index;
    const radiiUpdate = {};
    for (let i = 0; i < 8; i++) {
      radiiUpdate['id' + i.toString()] = { visibility: "hidden" };
    }
    if (index < 8) {
      for (let i = 0; i <= index; i++) {
        radiiUpdate['id' + i.toString()] = { visibility: "visible" };
      }
      index += 1;
    } else {
      index = 0;
    }
    this.setState({
      index: index,
      radiiVisibility: radiiUpdate
    });
  };

  arrowHandler = (location, oprnd) => {
    this.setState({
      timer: setInterval(() => {
        let pixelDisplayUpdate = this.state.pixelDisplay;
        let pixelUpdate = parseInt(pixelDisplayUpdate[location][0]);
        if (oprnd === '-' && pixelUpdate <= 0) return;
        pixelUpdate = oprnd === "+" ? ++pixelUpdate : --pixelUpdate;
        pixelDisplayUpdate[location][0] = pixelUpdate.toString();
        this.props.updatePixels(this.parseCSS(pixelDisplayUpdate));
        this.setState({
          pixelDisplay: pixelDisplayUpdate
        });
      }, 45)
    })
  }

  stopIncrement = () => {
    clearInterval(this.state.timer);
  };

  clear = () => {
    const pixelReset = {};
    const radiiUpdate = {};
    for (let i = 0; i < 8; i++) {
      pixelReset['p' + i.toString()] = ['0', 'px'];
    };
    for (let i = 0; i < 8; i++) {
      radiiUpdate['id' + i.toString()] = { visibility: "hidden" };
    }
    this.setState({
      pixelDisplay: pixelReset,
      radiiVisibility: radiiUpdate
    });
    this.props.updatePixels("0px");
  }

  parseCSS = (pixels) => {
    const CSSparser = [];
    for (let i = 0 ; i < 8; i++) {
      CSSparser.push(pixels['p' + i.toString()].join(""));
    }
    for (let i = 7; i >= 0; i--) {
      if (CSSparser[i] === "0px") {
        CSSparser.pop();
      }
    }
    let CSSupdate = "";
    for (let i = 0; i < CSSparser.length; i++) {
      CSSupdate += CSSparser[i];
      if (i <= 2 || (i >= 4 && i <= 6)) {
        CSSupdate += " ";
      }
      if (i === 3 && CSSparser.length > 4) {
        CSSupdate += "/";
      }
    }
    return CSSupdate;
  }

  render() {
    return (
      <div 
        className="border-radius-controller"
        style={this.props.style}
      >
        <div
          className="sixlet-section"
          
        >
          <div 
            className="radii-control"
            onClick={this.radiiVisibilityToggle}
          >
            Add
          </div>
        </div>
        <div className="sixlet-section">
          <div className="radii" style={this.state.radiiVisibility["id0"]}>
            <div className="pixel-display-container">
              {this.state.pixelDisplay["p0"]}
            </div>
            <div className="pixel-count">
              <div
                className="arrow-increment"
                onMouseDown={() => this.arrowHandler("p0", "+")}
                onMouseUp={() => this.stopIncrement("p0")}
                onTouchStart={() => this.arrowHandler("p0", "+")}
                onTouchEnd={() => this.stopIncrement("p0")}
              />
              <div
                className="arrow-decrement"
                onMouseDown={() => this.arrowHandler("p0", "-")}
                onMouseUp={() => this.stopIncrement("p0")}
                onTouchStart={() => this.arrowHandler("p0", "-")}
                onTouchEnd={() => this.stopIncrement("p0")}
              />
            </div>
          </div>
          <div className="radii" style={this.state.radiiVisibility["id4"]}>
            <div className="pixel-display-container">
              {this.state.pixelDisplay["p4"]}
            </div>
            <div className="pixel-count">
              <div
                className="arrow-increment"
                onMouseDown={() => this.arrowHandler("p4", "+")}
                onMouseUp={() => this.stopIncrement("p4")}
                onTouchStart={() => this.arrowHandler("p4", "+")}
                onTouchEnd={() => this.stopIncrement("p4")}
              />
              <div
                className="arrow-decrement"
                onMouseDown={() => this.arrowHandler("p4", "-")}
                onMouseUp={() => this.stopIncrement("p4")}
                onTouchStart={() => this.arrowHandler("p4", "-")}
                onTouchEnd={() => this.stopIncrement("p4")}
              />
            </div>
          </div>
        </div>
        <div className="sixlet-section">
          <div className="radii" style={this.state.radiiVisibility["id1"]}>
            <div className="pixel-display-container">
              {this.state.pixelDisplay["p1"]}
            </div>
            <div className="pixel-count">
              <div
                className="arrow-increment"
                onMouseDown={() => this.arrowHandler("p1", "+")}
                onMouseUp={() => this.stopIncrement("p1")}
                onTouchStart={() => this.arrowHandler("p1", "+")}
                onTouchEnd={() => this.stopIncrement("p1")}
              />
              <div
                className="arrow-decrement"
                onMouseDown={() => this.arrowHandler("p1", "-")}
                onMouseUp={() => this.stopIncrement("p1")}
                onTouchStart={() => this.arrowHandler("p1", "-")}
                onTouchEnd={() => this.stopIncrement("p1")}
              />
            </div>
          </div>
          <div className="radii" style={this.state.radiiVisibility["id5"]}>
            <div className="pixel-display-container">
              {this.state.pixelDisplay["p5"]}
            </div>
            <div className="pixel-count">
              <div
                className="arrow-increment"
                onMouseDown={() => this.arrowHandler("p5", "+")}
                onMouseUp={() => this.stopIncrement("p5")}
                onTouchStart={() => this.arrowHandler("p5", "+")}
                onTouchEnd={() => this.stopIncrement("p5")}
              />
              <div
                className="arrow-decrement"
                onMouseDown={() => this.arrowHandler("p5", "-")}
                onMouseUp={() => this.stopIncrement("p5")}
                onTouchStart={() => this.arrowHandler("p5", "-")}
                onTouchEnd={() => this.stopIncrement("p5")}
              />
            </div>
          </div>
        </div>
        <div className="sixlet-section">
          <div className="radii" style={this.state.radiiVisibility["id2"]}>
            <div className="pixel-display-container">
              {this.state.pixelDisplay["p2"]}
            </div>
            <div className="pixel-count">
              <div
                className="arrow-increment"
                onMouseDown={() => this.arrowHandler("p2", "+")}
                onMouseUp={() => this.stopIncrement("p2")}
                onTouchStart={() => this.arrowHandler("p2", "+")}
                onTouchEnd={() => this.stopIncrement("p2")}
              />
              <div
                className="arrow-decrement"
                onMouseDown={() => this.arrowHandler("p2", "-")}
                onMouseUp={() => this.stopIncrement("p2")}
                onTouchStart={() => this.arrowHandler("p2", "-")}
                onTouchEnd={() => this.stopIncrement("p2")}
              />
            </div>
          </div>
          <div className="radii" style={this.state.radiiVisibility["id6"]}>
            <div className="pixel-display-container">
              {this.state.pixelDisplay["p6"]}
            </div>
            <div className="pixel-count">
              <div
                className="arrow-increment"
                onMouseDown={() => this.arrowHandler("p6", "+")}
                onMouseUp={() => this.stopIncrement("p6")}
                onTouchStart={() => this.arrowHandler("p6", "+")}
                onTouchEnd={() => this.stopIncrement("p6")}
              />
              <div
                className="arrow-decrement"
                onMouseDown={() => this.arrowHandler("p6", "-")}
                onMouseUp={() => this.stopIncrement("p6")}
                onTouchStart={() => this.arrowHandler("p6", "-")}
                onTouchEnd={() => this.stopIncrement("p6")}
              />
            </div>
          </div>
        </div>
        <div className="sixlet-section">
          <div className="radii" style={this.state.radiiVisibility["id3"]}>
            <div className="pixel-display-container">
              {this.state.pixelDisplay["p3"]}
            </div>
            <div className="pixel-count">
              <div
                className="arrow-increment"
                onMouseDown={() => this.arrowHandler("p3", "+")}
                onMouseUp={() => this.stopIncrement("p3")}
                onTouchStart={() => this.arrowHandler("p3", "+")}
                onTouchEnd={() => this.stopIncrement("p3")}
              />
              <div
                className="arrow-decrement"
                onMouseDown={() => this.arrowHandler("p3", "-")}
                onMouseUp={() => this.stopIncrement("p3")}
                onTouchStart={() => this.arrowHandler("p3", "-")}
                onTouchEnd={() => this.stopIncrement("p3")}
              />
            </div>
          </div>
          <div className="radii" style={this.state.radiiVisibility["id7"]}>
            <div className="pixel-display-container">
              {this.state.pixelDisplay["p7"]}
            </div>
            <div className="pixel-count">
              <div
                className="arrow-increment"
                onMouseDown={() => this.arrowHandler("p7", "+")}
                onMouseUp={() => this.stopIncrement("p7")}
                onTouchStart={() => this.arrowHandler("p7", "+")}
                onTouchEnd={() => this.stopIncrement("p7")}
              />
              <div
                className="arrow-decrement"
                onMouseDown={() => this.arrowHandler("p7", "-")}
                onMouseUp={() => this.stopIncrement("p7")}
                onTouchStart={() => this.arrowHandler("p7", "-")}
                onTouchEnd={() => this.stopIncrement("p7")}
              />
            </div>
          </div>
        </div>
        <div
          className="sixlet-section"
        >
          <div 
            className="radii-control"
            onClick={() => this.clear()}
          >
            Clear
          </div>
        </div>
      </div>
    );
  }
}

export default BorderRadiusController;
