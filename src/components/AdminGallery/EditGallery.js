import React, { Component } from "react";
import axios from "axios";
// import "./EditGallery.css";
import "./EditGallery.scss";

export default class EditGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery_id: "",
      gallery_image: "",
      gallery_link: "",
      gallery_name: "",
      gallery_date: "",
      user_id: 0
    };
    this.saveButton = this.saveButton.bind(this);
    this.deleteButton = this.deleteButton.bind(this);
  }
  componentDidMount() {
    this.getGallery();
  }

  getGallery() {
    axios
      .get(`/auth/get_gallery_info/${this.props.gallery_id}`)
      .then(response => {
        const res = response.data[0];
        this.setState({
          gallery_id: res.gallery_id,
          gallery_image: res.gallery_image,
          gallery_link: res.gallery_link,
          gallery_name: res.gallery_name,
          gallery_date: res.gallery_date,
          user_id: res.user_id
        });
        console.log(response.data);
      });
  }

  deleteButton() {
    const { gallery_id } = this.props;
    axios
      .delete(`/auth/delete_gallery/${gallery_id}`)
      .then(console.log(gallery_id));
  }
  addButton() {
    const {
      gallery_image,
      gallery_link,
      gallery_name,
      gallery_date,
      user_id
    } = this.state;
    let newGalleryObj = {
      gallery_image,
      gallery_link,
      gallery_name,
      gallery_date,
      user_id
    };

    axios.post("/auth/add_client_gallery", newGalleryObj).then(res => {
      console.log(1234, res);
    });
  }
  saveButton() {
    const {
      gallery_image,
      gallery_link,
      gallery_name,
      gallery_date,
      user_id
    } = this.state;
    const { gallery_id } = this.props;
    let galleryObj = {
      gallery_id,
      gallery_image,
      gallery_link,
      gallery_name,
      gallery_date,
      user_id
    };
    // console.log(4444, galleryObj);

    axios.put("/auth/edit_gallery", galleryObj).then(res => {
      console.log(777777, res);
    });
  }
  cancelButton() {
    this.setState(this.state);
  }

  render() {
    const {
      gallery_id,
      gallery_image,
      gallery_link,
      gallery_name,
      gallery_date,
      user_id
    } = this.state;
    return (
      <div className="edit-gal">
        <div className="edit-gal-main">
          <form>
            <div className="edit-boxes">
              <label className="input-boxes">Gallery Id</label>
              <input
                className="input-boxes"
                value={gallery_id}
                onChange={e =>
                  this.setState({
                    gallery_id: e.target.value
                  })
                }
              />
              <label>Gallery Image</label>
              <input
                className="input-boxes"
                value={gallery_image}
                onChange={e =>
                  this.setState({
                    gallery_image: e.target.value
                  })
                }
              />
              <label>Gallery Link</label>
              <input
                className="input-boxes"
                value={gallery_link}
                onChange={e =>
                  this.setState({
                    gallery_link: e.target.value
                  })
                }
              />
              <label>Gallery Name</label>
              <input
                className="input-boxes"
                value={gallery_name}
                onChange={e =>
                  this.setState({
                    gallery_name: e.target.value
                  })
                }
              />
              <label>Gallery Date</label>
              <input
                className="input-boxes"
                value={gallery_date}
                onChange={e =>
                  this.setState({
                    gallery_date: e.target.value
                  })
                }
              />
              <label>User Id</label>
              <input
                className="input-boxes"
                value={user_id}
                onChange={e =>
                  this.setState({
                    user_id: e.target.value
                  })
                }
              />
            </div>
            <div>
              <button onClick={this.cancelButton}>Cancel</button>
            </div>
            <div>
              <button onClick={() => this.deleteButton(this.props.gallery_id)}>
                Delete
              </button>
            </div>
            <div>
              <button onClick={this.saveButton}>Save</button>
            </div>
            <div>
              <button onClick={() => this.addButton(this.state.newGalleryObj)}>
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
