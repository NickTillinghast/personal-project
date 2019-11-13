import React from "react";
import { Link } from "react-router-dom";

class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  render() {
    return (
      <div className="dropdown">
        <div className="drop-button" onClick={this.showDropdownMenu}>
          Portfolio
        </div>

        {this.state.displayMenu ? (
          <ul className="drop-ul">
            <Link className="header-links" to="/Weddings">
              <li className="drop-li">Weddings</li>
            </Link>
            <Link className="header-links" to="/FamilyGalleries">
              <li className="drop-li">Families</li>
            </Link>
            <Link className="header-links" to="/Portraits">
              <li className="drop-li">Portraits</li>
            </Link>
            <Link className="header-links" to="/PersonalWork">
              <li className="drop-li">Personal Work</li>
            </Link>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;
