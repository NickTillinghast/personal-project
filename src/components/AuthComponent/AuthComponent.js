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

  async register(e) {
    if (
      this.state.username === "" ||
      this.state.password === "" ||
      this.state.email === ""
    ) {
      alert("please register");
      e.preventDefault();
    } else {
      e.preventDefault();
      const { username, password, email } = this.state;
      const registeredUser = await axios.post("/auth/register", {
        username,
        password,
        email
      });
      this.props.setUser(registeredUser.data);
      this.props.history.push("/ClientGalleries");
    }
  }
  async login(e) {
    if (
      this.state.username === "" ||
      this.state.password === "" ||
      this.state.email === ""
    ) {
      alert("please login");
      e.preventDefault();
    } else {
      e.preventDefault();
      const { password, email } = this.state;
      const loggedInUser = await axios.post("/auth/login", {
        email,
        password
      });
      // if (!loggedInUser.data ? <h1>Please hire me to get some galleries in here</h1> :
      this.props.setUser(loggedInUser.data);
      this.props.history.push("/ClientGalleries");
    }
  }
  async adminLogin(e) {
    if (
      this.state.username === "" ||
      this.state.password === "" ||
      this.state.email === ""
    ) {
      alert("this is for admins only");
      e.preventDefault();
    } else {
      e.preventDefault();
      const { password, email } = this.state;
      const loggedInAdmin = await axios.post("/auth/admin", {
        email,
        password
      });
      this.props.setUser(loggedInAdmin.data);
      this.props.history.push("/AdminGallery");
    }
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
          <div>
            <div className="input-container">
              <input
                placeholder="Username"
                value={username}
                onChange={e =>
                  this.setState({
                    username: e.target.value
                  })
                }
              />
            </div>
            <div className="input-container">
              <input
                placeholder="Email"
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
              <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={e =>
                  this.setState({
                    password: e.target.value
                  })
                }
              />
            </div>
            <button
              className="reg-button"
              onClick={e => {
                this.register(e);
                alert("you've registered");
              }}
            >
              Register
            </button>
          </div>

          <button
            className="reg-button"
            onClick={e => {
              this.login(e);
            }}
          >
            login
          </button>

          <button
            className="reg-button"
            onClick={e => {
              this.adminLogin(e);
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
