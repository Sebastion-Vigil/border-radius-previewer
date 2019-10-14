import React from "react";

import "../css/ShapeController.css";

class ShapeController extends React.Component {
  state = {
    index: 0,
    timer: undefined,
    colors: [
      'purple',
      'green',
      'red',
      'blue',
      'orange',
      'cyan',
      'yellow',
      'turquoise',
      'white',
      'silver',
      'gold',
      'magenta',
      'pink',
      'darkblue',
      'darkred',
      'darkcyan'
    ],
    currentColor: 'purple',
    currentSize: '125px',
    minSize: '10px',
    maxSize: '450px'
  }

  shapeHandler = (oprnd) => {
    let newIndex = this.state.index;
    newIndex = oprnd === "+" ? ++newIndex : --newIndex;
    if (oprnd === "+" && newIndex === this.state.colors.length) {
      newIndex = 0;
    }
    if (oprnd === "-" && newIndex === -1) {
      newIndex = this.state.colors.length - 1;
    }
    const newColor = this.state.colors[newIndex];
    console.log(newIndex, newColor)
    this.setState({
      index: newIndex,
      currentColor: newColor
    });
    this.props.updateShape(newColor, this.state.currentSize);
  }

  sizeHandler = (oprnd) => {
    this.setState({
      timer: setInterval(() => {
        let pixelUpdate = parseInt(this.state.currentSize);
        if ((oprnd === "-" && pixelUpdate <= 10) || (oprnd === "+" && pixelUpdate >= 450)) return;
        pixelUpdate = oprnd === "+" ? ++pixelUpdate : --pixelUpdate;
        pixelUpdate = pixelUpdate.toString() + 'px';
        this.props.updateShape(this.state.currentColor, this.state.currentSize);
        this.setState({
          currentSize: pixelUpdate
        });
      }, 45)
    })
  }

  stopTimer = () => {
    clearInterval(this.state.timer);
  }

  render() {
    return (
      <div className="shape-controller">
        <div className="shape-controller-section">
           <div className="display" style={{color: this.state.currentColor}}>
             {this.state.currentColor}
           </div>
           <div className="arrow-container">
            <div className="arrow-up" onClick={() => this.shapeHandler("+")}></div>
            <div className="arrow-down" onClick={() => this.shapeHandler("-")}></div>
           </div>
        </div>
        <div className="shape-controller-section">
           <div className="display" style={{color: this.state.currentColor}}>
             {this.state.currentSize}
           </div>
           <div className="arrow-container">
            <div 
              className="arrow-up"
              onMouseDown={() => this.sizeHandler("+")}
              onMouseUp={() => this.stopTimer()}
              onTouchStart={() => this.sizeHandler("+")}
              onTouchEnd={() => this.stopTimer()}
            >
            </div>
            <div 
              className="arrow-down"
              onMouseDown={() => this.sizeHandler("-")}
              onMouseUp={() => this.stopTimer()}
              onTouchStart={() => this.sizeHandler("-")}
              onTouchEnd={() => this.stopTimer()}
            >
            </div>
           </div>
        </div>
      </div>
    );
  }
}

export default ShapeController;
