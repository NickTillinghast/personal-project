import React, { Component } from "react";
// import { connect } from "react-redux";
// import { setUser } from "../../ducks/reducer";
// import { withRouter } from "react-router";
import Gallery from "../Gallery/Gallery";
import axios from "axios";

export default class AdminGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allGalleries: []
    };
    this.getAllGalleries = this.getAllGalleries.bind(this);
  }
  componentDidMount() {
    this.getAllGalleries();
    // this.getClientGalleries();
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

  render() {
    const { allGalleries } = this.state;
    return (
      <div className="admin-main">
        <div>
          {allGalleries.length > 0 &&
            allGalleries.map((gallery, index) => {
              return (
                <Gallery
                  key={index}
                  gallery={this.state.gallery}
                  image={gallery.gallery_image}
                  imageLink={gallery.gallery_link}
                />
              );
            })}
        </div>
      </div>
    );
  }
}
// function mapReduxStateToProps(reduxState) {
//   return reduxState;
// }

// const mapDispatchToProps = {
//   setUser
// };

// export default connect(
//   mapReduxStateToProps,
//   mapDispatchToProps
// )(withRouter(AdminGallery));
