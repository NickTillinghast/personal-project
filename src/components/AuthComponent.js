import React, { Component } from "react";
import axios from "axios";

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
          <div className="input-box">
            <input
              value={username}
              onChange={e =>
                this.setState({
                  username: e.target.value
                })
              }
            />
          </div>
        </form>
        Auth Component
      </div>
    );
  }
}

export default AuthComponent;
