import React, { Component } from "react";
import axios from "axios";
import Photos from "./Photos";

export default class ImageDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPhotos: []
    };
    this.getAllPhotos = this.getAllPhotos.bind(this);
  }
  componentDidMount() {
    this.getAllPhotos();
  }

  getAllPhotos() {
    axios
      .get("/api/all_photos")
      .then(response => {
        this.setState({
          allPhotos: response.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { allPhotos } = this.state;
    const mappedPhotos = allPhotos.map(photo => {
      return <Photos key={photo.id} />;
    });

    return (
      <div>
        <div>{mappedPhotos}</div>
        images
      </div>
    );
  }
}
