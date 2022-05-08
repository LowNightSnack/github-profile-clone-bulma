import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faSearch,
  faBell,
  faPlus,
  faCaretDown,
  faCircleUser,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [plusDropdown, setPlusDropdown] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  return (
    <nav
      className="navbar is-transparent px-3 py-3"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <FontAwesomeIcon
          icon={faGithub}
          className="navbar-item is-align-self-center"
          size="2x"
        />

        <a
          role="button"
          className={`navbar-burger${mobileToggle ? " is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar"
          onClick={() => setMobileToggle(!mobileToggle)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbar"
        className={`navbar-menu${mobileToggle ? " is-active" : ""}`}
      >
        <div className="navbar-start">
          <p className="control has-icons-left is-align-self-center">
            <input
              className="input navbar-item"
              type="text"
              placeholder="Search"
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </p>

          <a className="navbar-item">Pull Requests</a>
          <a className="navbar-item">Issues</a>
          <a className="navbar-item">Marketplace</a>
          <a className="navbar-item">Explore</a>
        </div>

        <div className="navbar-end">
          <a className="navbar-item">
            <FontAwesomeIcon icon={faBell} />
          </a>
          <div
            className={`navbar-item dropdown is-right${
              plusDropdown ? " is-active" : ""
            }`}
          >
            <div className="dropdown-trigger">
              <a
                aria-haspopup="true"
                aria-controls="newActions"
                onClick={() => setPlusDropdown(!plusDropdown)}
              >
                <FontAwesomeIcon icon={faPlus} className="mr-1" />
                <FontAwesomeIcon icon={faCaretDown} />
              </a>
            </div>
            <div className="dropdown-menu" id="newActions" role="menu">
              <div className="dropdown-content">
                <a className="dropdown-item">New Repository</a>
                <a className="dropdown-item">Import Repository</a>
                <a className="dropdown-item">New Gist</a>
                <a className="dropdown-item">New Organisation</a>
                <a className="dropdown-item">New Project</a>
              </div>
            </div>
          </div>
          <div
            className={`navbar-item dropdown is-right${
              profileDropdown ? " is-active" : ""
            }`}
          >
            <div className="dropdown-trigger">
              <a
                className="is-flex is-align-items-center"
                aria-haspopup="true"
                aria-controls="profileActions"
                onClick={() => setProfileDropdown(!profileDropdown)}
              >
                <FontAwesomeIcon
                  icon={faCircleUser}
                  className="mr-1"
                  size="2x"
                />
                <FontAwesomeIcon icon={faCaretDown} />
              </a>
            </div>
            <div className="dropdown-menu" id="profileActions" role="menu">
              <div className="dropdown-content">
                <a className="dropdown-item">
                  Signed in as <br />
                  <strong>LowNightSnack</strong>
                </a>
                <hr className="dropdown-divider" />
                <span className="dropdown-item">
                  <span className="icon-text">
                    <span className="icon">
                      <FontAwesomeIcon
                        icon={faSmile}
                        className="has-text-danger"
                      />
                    </span>
                    <span>Open-source is great!</span>
                  </span>
                </span>
                <hr className="dropdown-divider" />
                <a className="dropdown-item">Your profile</a>
                <a className="dropdown-item">Your repositories</a>
                <a className="dropdown-item">Your codespaces</a>
                <a className="dropdown-item">Your organizations</a>
                <a className="dropdown-item">Your projects</a>
                <a className="dropdown-item">Your discussions</a>
                <a className="dropdown-item">Your stars</a>
                <a className="dropdown-item">Your gists</a>
                <hr className="dropdown-divider" />
                <a className="dropdown-item">Upgrade</a>
                <a className="dropdown-item">Feature preview</a>
                <a className="dropdown-item">Help</a>
                <a className="dropdown-item">Settings</a>
                <hr className="dropdown-divider" />
                <a className="dropdown-item">Sign out</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
