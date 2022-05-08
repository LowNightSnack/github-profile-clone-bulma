import ContributionActivityTimeline from "./ContributionActivity/ContributionActivityTimeline";
import ContributionActivityYear from "./ContributionActivity/ContributionActivityYear";

const ContributionActivity = () => {
  return (
    <div className="my-5">
      <p>Contribution Activity</p>
      <div
        className="is-flex is-justify-content-space-between"
        style={{ gap: "10px" }}
      >
        <ContributionActivityTimeline />
        <ContributionActivityYear />
      </div>
      <button className="my-3 button" style={{ width: "100%" }}>
        Show more activity
      </button>
    </div>
  );
};

export default ContributionActivity;
