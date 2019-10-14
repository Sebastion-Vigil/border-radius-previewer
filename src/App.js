import React from 'react';

import './css/App.css';

import ShapeController from './components/ShapeController';
import Square from './components/Square.js';
import BorderRadiusController from './components/BorderRadiusController.js';

class App extends React.Component {
  state = {
    borderRadius: '',
    backgroundColor: 'purple',
    widthHeight: '125px',
    popupTitle: ''
  }
  // should be renamed getBorderRadiusInput for consistency
  // the component itself should also be renamed the same
  getPixels = (pixels) => {
    this.setState({
      borderRadius: pixels
    });
  }

  getShapeControllerInput = (color, size) => {
    this.setState({
      backgroundColor: color,
      widthHeight: size
    });
  }

  handlePopup = () => {
    const message = "Click shape to copy CSS to clipboard"
    const toggleTitle = this.state.popupTitle === '' ? message : '';
    this.setState({
      popupTitle: toggleTitle
    });
  }

  copy = () => {
   navigator.clipboard.writeText(this.state.borderRadius);
  }

  render() {
    return (
      <div className="App">
        <ShapeController
          updateShape={this.getShapeControllerInput}
        />
        <Square 
          style={{
            borderRadius: this.state.borderRadius,
            backgroundColor: this.state.backgroundColor,
            height: this.state.widthHeight,
            width: this.state.widthHeight
          }}
          titleInfo={this.state.popupTitle}
          pointerEnter={this.handlePopup}
          pointerLeave={this.handlePopup}
          copyToClipboard={this.copy}
        />
        <BorderRadiusController
          style={{color: this.state.backgroundColor}} 
          updatePixels={this.getPixels}
        />
      </div>
    )
  }
}

export default App;