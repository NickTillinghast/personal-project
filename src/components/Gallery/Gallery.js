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
        <div>{this.props.gallery_name}</div>
        {/* <div>{this.props.key}</div> */}
        <div>{this.props.imageLink}</div>
        <div>{this.props.image}</div>
        <div>{this.props.date}</div>
        <div>{this.props.user_id}</div>
        <div>{this.props.gallery_id}</div>
        <button onClick={() => this.props.editStatus(this.props.gallery_id)}>
          Edit This Gallery
        </button>
      </div>
    );
  }
}
export default Gallery;
