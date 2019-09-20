import React from "react";
import ReactDOM from "react-dom";

const divStyle = {
  display: 'inline-block',
  padding: '20px'
}

// displays image and name of playlist
class SickoMode extends React.Component {
  render() {
    return (
      <div style={divStyle} className="album">
        <img />
        <p>{this.props.playlist}</p>
      </div>
    );
  }
}

export default SickoMode;
