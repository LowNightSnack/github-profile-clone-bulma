import { faArrowUp, faBook } from "@fortawesome/free-solid-svg-icons";
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
      <div className="is-flex-grow-1 timeline-border ml-5">
        <div className="is-flex is-justify-content-space-between">
          <div className="my-3 is-flex is-align-items-center">
            <FontAwesomeIcon
              icon={faBook}
              className="icon rounded p-1 timeline-icon mr-2"
            />
            <p>Created 1 commit in 1 repository</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributionActivityTimeline;
