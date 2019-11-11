import React, { Component } from "react";

import axios from "axios";
import Gallery from "../Gallery/Gallery";
import EditGallery from "./EditGallery";

export default class AdminGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allGalleries: [],
      isEditing: false,
      editingGallery: 0
    };
    this.getAllGalleries = this.getAllGalleries.bind(this);
    this.editStatus = this.editStatus.bind(this);
  }
  componentDidMount() {
    this.getAllGalleries();
  }

  getAllGalleries() {
    axios
      .get("/auth/get_all_galleries")
      .then(response => {
        this.setState({
          allGalleries: response.data
        });
        console.log(this.state);
      })
      .catch(err => console.log(err));
  }
  editStatus(id) {
    this.setState({
      isEditing: !this.state.isEditing,
      editingGallery: id
    });
  }

  render() {
    const { allGalleries } = this.state;
    const mappedGalleries =
      allGalleries.length > 0 &&
      allGalleries.map((gallery, index) => {
        return (
          <Gallery
            key={index}
            gallery={this.state.gallery}
            image={gallery.gallery_image}
            imageLink={gallery.gallery_link}
            gallery_name={gallery.gallery_name}
            gallery_id={gallery.gallery_id}
            user_id={gallery.user_id}
            date={gallery.gallery_date}
            editStatus={() => this.editStatus(gallery.gallery_id)}
          />
        );
      });
    return (
      <div className="admin-gallery-main">
        <div className="admin-main">
          <div className="admin-gallery">
            {!this.state.isEditing ? (
              mappedGalleries
            ) : (
              <EditGallery gallery_id={this.state.editingGallery} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
