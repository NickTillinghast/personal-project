import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setUser } from "../ducks/reducer";

class AuthComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      register: true
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
  }
  async login() {
    const { password, email } = this.state;
    const loggedInUser = await axios.post("/auth/login", {
      email,
      password
    });
    this.props.setUser(loggedInUser.data);
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
            <label>username</label>
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
            <label>email</label>
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
            <label>password</label>

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
            <button>{register ? "Register" : "Login"}</button>
          </div>
          <br />
          <button>login</button>
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

const enhancedComponent = connect(
  mapReduxStateToProps,
  mapDispatchToProps
);

export default enhancedComponent(AuthComponent);
