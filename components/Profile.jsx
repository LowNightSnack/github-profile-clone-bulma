import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faCheck,
  faLocationPin,
  faStar,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Profile = () => {
  return (
    <section className="profile-space profile-negative-shift">
      <div style={{ position: "relative", zIndex: 3 }}>
        <img
          src="./imgs/avatar.png"
          style={{ borderRadius: "50%", backgroundColor: "black" }}
        />
      </div>
      <div className="py-2">
        <h4 className="title">Mamoor Jaan Khan</h4>
        <h6 className="subtitle">LowNightSnack</h6>
      </div>
      <p className="mb-2">NextJS annd TailwindCSS, next ElectronJS</p>
      <button
        className="button has-background-dark has-text-light"
        style={{ width: "100%" }}
      >
        Edit Profile
      </button>
      <div className="py-3">
        <span className="icon-text">
          <span className="icon">
            <FontAwesomeIcon icon={faUsers} />
          </span>
          <span>
            <strong>6</strong> followers · <strong>6</strong> following
          </span>
        </span>
      </div>
      <div className="py-3">
        <div className="icon-text">
          <span className="icon">
            <FontAwesomeIcon icon={faLocationPin} />
          </span>
          <span>Bhopal</span>
        </div>
        <div className="icon-text">
          <span className="icon">
            <FontAwesomeIcon icon={faTwitter} />
          </span>
          <span>@LowNightSnack</span>
        </div>
      </div>
      <hr className="navbar-divider" />
      <h4 className="title">Achivements</h4>
      <a>
        <img src="./imgs/acv.png" style={{ width: "30%" }} />
      </a>
      <hr className="navbar-divider" />
      <h4 className="title">Highlights</h4>
      <div className="icon-text">
        <span className="icon">
          <FontAwesomeIcon icon={faStar} />
        </span>
        <span className="tag is-success is-light">PRO</span>
      </div>
      <div className="icon-text">
        <span className="icon">
          <FontAwesomeIcon icon={faCheck} />
        </span>
        <span>1 discussion answered</span>
      </div>
      <hr className="navbar-divider" />
      <h4 className="title">Organizations</h4>
      <img
        src="./imgs/cc.png"
        style={{ width: "10%", borderRadius: "7%", marginRight: "1rem" }}
      />
      <img src="./imgs/dp.png" style={{ width: "10%", borderRadius: "7%" }} />
    </section>
  );
};

export default Profile;
