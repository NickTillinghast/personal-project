import React, { Component } from "react";
import "./Gallery.scss";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(window.location.hash);
    return (
      <div>
        <div className="galleries-main">
          <a href={this.props.imagelink}>
            <img className="gallery-link" src={this.props.image} alt="none" />
          </a>
        </div>
        {window.location.hash === "#/ClientGalleries" ? null : (
          <div className="edit-button">
            <button
              className="edit-button"
              onClick={() => this.props.editStatus(this.props.gallery_id)}
            >
              Edit This Gallery
            </button>
          </div>
        )}
      </div>
    );
  }
}
export default Gallery;
