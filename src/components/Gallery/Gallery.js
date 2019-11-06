import React, { Component } from "react";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="galleries-main">
          <a href={this.props.imagelink}>
            <img className="gallery-link" src={this.props.image} alt="none" />
          </a>
        </div>
      </div>
    );
  }
}
export default Gallery;
