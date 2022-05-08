import { faCodeFork } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RepositoryCell = ({ repository, empty = false }) => {
  return (
    <div
      className={`column is-flex is-flex-direction-column is-justify-content-space-between p-3${
        empty ? "" : " boxed-borders boxed-borders-radius"
      }`}
    >
      <div>
        <div className="is-flex is-justify-content-space-between">
          <a className="has-text-link">{repository.title}</a>
          <span className="tag">{repository.scope}</span>
        </div>
        {repository.fork ? <p>{repository.fork}</p> : <></>}
        <p className="mt-3">{repository.desc}</p>
      </div>
      {repository.lang ? (
        <p className="mt-3">{repository.lang}</p>
      ) : (
        <div className="mt-3">
          <span className="icon-text">
            <span className="icon">
              <FontAwesomeIcon icon={faCodeFork} />
            </span>
            <span>1</span>
          </span>
        </div>
      )}
    </div>
  );
};

export default RepositoryCell;
