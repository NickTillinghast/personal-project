import React, { Component } from "react";
import { connect } from "react-redux";
import { setUser } from "../../ducks/reducer";
import { withRouter } from "react-router";
import axios from "axios";

class AuthComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      register: false
    };
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  async register() {
    const { username, password, email } = this.state;
    const registeredUser = await axios.post("/auth/register", {
      username,
      password,
      email
    });
    this.props.setUser(registeredUser.data);
    this.props.history.push("/ClientGalleries");
  }
  async login() {
    const { password, email } = this.state;
    const loggedInUser = await axios.post("/auth/login", {
      email,
      password
    });
    this.props.setUser(loggedInUser.data);
    this.props.history.push("/ClientGalleries");
  }

  async adminLogin() {
    const { password, email } = this.state;
    const loggedInAdmin = await axios.post("/auth/admin", {
      email,
      password
    });
    this.props.setUser(loggedInAdmin.data);
    this.props.history.push("/ClientGalleries");
  }

  render() {
    const { username, password, email, register } = this.state;
    console.log(this.props);
    return (
      <div className="auth-container">
        <form
          onSubmit={e => {
            e.preventDefault();
            if (register) {
              this.register();
            } else {
              this.login();
            }
          }}
        >
          <br />
          <div className="input-box">
            <label>Username</label>
            <input
              value={username}
              onChange={e =>
                this.setState({
                  username: e.target.value
                })
              }
            />
          </div>
          <div className="input-container">
            <br />
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={e =>
                this.setState({
                  email: e.target.value
                })
              }
            />
          </div>
          <div className="input-container">
            <br />
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={e =>
                this.setState({
                  password: e.target.value
                })
              }
            />
            <br />
            <br />
            <button
              className="reg-button"
              onClick={() => {
                this.register();
              }}
            >
              Register
            </button>
          </div>
          <br />
          <button
            className="reg-button"
            onClick={() => {
              this.login();
            }}
          >
            login
          </button>
          <br />
          <br />
          <button
            className="reg-button"
            onClick={() => {
              this.adminLogin();
            }}
          >
            Admin Login
          </button>
        </form>
      </div>
    );
  }
}

function mapReduxStateToProps(reduxState) {
  return reduxState;
}
const mapDispatchToProps = {
  setUser
};

export default connect(
  mapReduxStateToProps,
  mapDispatchToProps
)(withRouter(AuthComponent));
