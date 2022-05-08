import {
  faArrowsUpDown,
  faArrowUp,
  faBook,
  faExpand,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContributionActivityTimeline = () => {
  return (
    <div className="is-flex is-flex-grow-1 is-flex-direction-column">
      <div
        className="is-flex is-align-items-center p-1"
        style={{ width: "100%" }}
      >
        <p className="px-3">May 2022</p>
        <hr
          className="navbar-divider is-flex-grow-1"
          style={{ backgroundColor: "#000" }}
        />
      </div>
      <div
        className="is-flex-grow-1 timeline-border ml-5 is-flex is-flex-direction-column"
        style={{ gap: "1rem" }}
      >
        <div className="my-3">
          <div
            className="is-flex is-justify-content-space-between is-align-items-center mb-2"
            style={{ width: "100%" }}
          >
            <div className="is-flex is-align-items-center">
              <FontAwesomeIcon
                icon={faBook}
                className="icon rounded p-1 timeline-icon"
              />
              <p>Created 1 commit in 1 repository</p>
            </div>
            <FontAwesomeIcon icon={faArrowsUpDown} />
          </div>
          <div className="ml-4">
            <div className="is-flex is-justify-content-space-between is-align-items-center">
              <a>LowNightSnack/repository-name</a>
              <div
                className="has-background-success"
                style={{
                  width: "200px",
                  height: "10px",
                  borderRadius: "9999px",
                }}
              ></div>
            </div>
            <p>1 commit</p>
          </div>
        </div>
        <div className="my-3">
          <div
            className="is-flex is-justify-content-space-between is-align-items-center mb-2"
            style={{ width: "100%" }}
          >
            <div className="is-flex is-align-items-center">
              <FontAwesomeIcon
                icon={faBook}
                className="icon rounded p-1 timeline-icon"
              />
              <p>Created 1 commit in 1 repository</p>
            </div>
            <FontAwesomeIcon icon={faArrowsUpDown} />
          </div>
          <div className="ml-4 mb-1 is-flex is-justify-content-space-between is-align-items-center">
            <div>
              <FontAwesomeIcon icon={faLock} className="mr-2" />
              <a>LowNightSnack/repository-name</a>
            </div>
            <div
              className="is-flex is-align-items-center"
              style={{ gap: "0.25rem" }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "200px",
                  backgroundColor: "yellow",
                }}
              ></div>
              <p>JavaScript</p>
            </div>
            <p>May 5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributionActivityTimeline;
