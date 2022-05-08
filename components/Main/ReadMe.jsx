import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReadMe = () => {
  return (
    <div className="boxed-borders boxed-borders-radius p-5 my-5">
      <div className="is-flex is-justify-content-space-between mb-3">
        <p className="is-family-monospace">LowNightSnack/README.md</p>
        <FontAwesomeIcon icon={faPencil} />
      </div>
      <p className="subtitle">Hi there 👋</p>
    </div>
  );
};

export default ReadMe;
