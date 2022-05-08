import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="my-3">
      <hr className="navbar-divider has-background-black mb-5" />
      <div
        className="mt-5 mb-3 is-flex is-justify-content-center"
        style={{ gap: "20px" }}
      >
        <a>Terms</a>
        <a>Privacy</a>
        <a>Security</a>
        <a>Status</a>
        <a>Docs</a>
        <a>Contact GitHub</a>
        <a>Pricing</a>
        <a>API</a>
        <a>Training</a>
        <a>Blog</a>
        <a>About</a>
      </div>
      <div
        className="is-flex is-align-items-center is-justify-content-center"
        style={{ width: "100%" }}
      >
        <FontAwesomeIcon icon={faGithub} className="icon is-medium mr-2" />
        <p>© 2022 GitHub, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
