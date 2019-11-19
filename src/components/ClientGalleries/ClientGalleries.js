import React, { Component } from "react";
import axios from "axios";
import Gallery from "../Gallery/Gallery";
// import "./ClientGalleries.css";
import "./ClientGalleries.scss";

export default class ClientGalleries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allGalleries: []
    };

    this.getClientGalleries = this.getClientGalleries.bind(this);
  }

  componentDidMount() {
    this.getClientGalleries();
  }

  getClientGalleries() {
    axios
      .get("/auth/get_user_galleries")
      .then(response => {
        this.setState({
          allGalleries: response.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { allGalleries } = this.state;

    return (
      <div className="client-gallery">
        {allGalleries.length ? (
          <div className="gallery-main">
            <div className="all-galleries">
              {allGalleries.length > 0 &&
                allGalleries.map((gallery, index) => {
                  return (
                    <Gallery
                      key={index}
                      gallery={this.state.gallery}
                      image={gallery.gallery_image}
                      imagelink={gallery.gallery_link}
                    />
                  );
                })}
            </div>
          </div>
        ) : (
          <div className="zero-galleries">
            <h1>
              This page would display all galleries you have with Nick
              Tillinghast Photography
            </h1>
          </div>
        )}
      </div>
    );
  }
}
