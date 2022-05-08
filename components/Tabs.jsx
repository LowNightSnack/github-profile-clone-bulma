import {
  faBookBookmark,
  faBookOpen,
  faCube,
  faSpider,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tabs = () => {
  return (
    <header
      className="mt-3 has-background-white"
      style={{
        position: "sticky",
        top: 0,
        borderBottom: "1px solid #7a828e",
        zIndex: 1,
      }}
    >
      <div className="container is-flex is-align-content-center profile-gap">
        <div className="profile-space"></div>
        <div className="is-flex">
          <div className="p-2 tab-highlight tab-is-active">
            <span className="icon-text tab-content p-1">
              <span className="icon">
                <FontAwesomeIcon icon={faBookOpen} />
              </span>
              <span>Overview</span>
            </span>
          </div>
          <div className="p-2 tab-highlight">
            <span className="icon-text tab-content p-1">
              <span className="icon">
                <FontAwesomeIcon icon={faBookBookmark} />
              </span>
              <span>Repositories</span>
            </span>
          </div>
          <div className="p-2 tab-highlight">
            <span className="icon-text tab-content p-1">
              <span className="icon">
                <FontAwesomeIcon icon={faSpider} />
              </span>
              <span>Projects</span>
            </span>
          </div>
          <div className="p-2 tab-highlight">
            <span className="icon-text tab-content p-1">
              <span className="icon">
                <FontAwesomeIcon icon={faCube} />
              </span>
              <span>Packages</span>
            </span>
          </div>
          <div className="p-2 tab-highlight">
            <span className="icon-text tab-content p-1">
              <span className="icon">
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>Stars</span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Tabs;
