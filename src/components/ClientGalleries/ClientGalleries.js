import React, { Component } from "react";
import axios from "axios";
import Gallery from "../Gallery/Gallery";
import "./ClientGalleries.css";

export default class ClientGalleries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allGalleries: []
    };

    // this.getAllGalleries = this.getAllGalleries.bind(this);
    this.getClientGalleries = this.getClientGalleries.bind(this);
  }

  componentDidMount() {
    // this.getAllGalleries();
    this.getClientGalleries();
  }

  // getAllGalleries() {
  //   axios
  //     .get("/auth/get_all_galleries")
  //     .then(response => {
  //       this.setState({
  //         allGalleries: response.data
  //       });
  //       console.log(this.state);
  //     })
  //     .catch(err => console.log(err));
  // }

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
    // const mappedGalleries = () => {
    //   if (allGalleries.length > 0) {
    //     allGalleries.map(gallery => {
    //       return (
    //         <Gallery
    //           key={gallery.id}
    //           gallery={gallery.gallery}
    //           deleteGallery={this.deleteGallery}
    //         />
    //       );
    //     });
    //   } else {
    //     return <div>hello</div>;
    //   }
    // };
    //  display of all galleries
    return (
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
                  deleteGallery={this.deleteGallery}
                />
              );
            })}
        </div>
      </div>
    );
  }
}
