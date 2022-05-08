import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ContributionChart from "./Contributions/ContributionChart";

const months = {
  Jan: 31,
  Feb: 28,
  Mar: 31,
  Apr: 30,
  May: 31,
  Jun: 30,
  Jul: 31,
  Aug: 31,
  Sep: 30,
  Oct: 31,
  Nov: 30,
  Dec: 31,
};

const Contributions = () => {
  const [csDropdown, setCsDropdown] = useState(false);
  const contributionChart = {};
  for (let month in months) {
    const monthArr = [];
    let days = months[month];
    while (days > 0) {
      let week = days >= 7 ? 7 : days;
      days -= week;
      const weekArr = [];
      for (let i = 0; i < week; i++) {
        const lev = Math.floor(Math.random() * 5);
        weekArr.push(lev);
      }
      monthArr.push(weekArr);
    }
    contributionChart[month] = monthArr;
  }

  return (
    <div className="mt-5">
      <div className="is-flex is-justify-content-space-between">
        <p>97 contributions in the last year</p>
        <div
          className={`navbar-item dropdown is-right${
            csDropdown ? " is-active" : ""
          }`}
        >
          <div className="dropdown-trigger">
            <a
              aria-haspopup="true"
              aria-controls="newActions"
              onClick={() => setCsDropdown(!csDropdown)}
            >
              <span className="icon-text">
                <span>Contribution settings</span>
                <span className="icon">
                  <FontAwesomeIcon icon={faCaretDown} />
                </span>
              </span>
            </a>
          </div>
          <div className="dropdown-menu" id="newActions" role="menu">
            <div className="dropdown-content">
              <div className="dropdown-item">
                <h3>
                  <strong>Private Contributions</strong>
                </h3>
                <p>
                  Turning off private contributions will show only public
                  activity on your profile
                </p>
              </div>
              <hr className="dropdown-divider" />
              <div className="dropdown-item">
                <h3>
                  <strong>Activity overview </strong>
                </h3>
                <p>
                  Turning on the activity overview will show an overview of your
                  activity across organizations and repositories
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContributionChart
        contributionChart={contributionChart}
        months={Object.keys(months)}
      />
    </div>
  );
};

export default Contributions;
