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
    </div>
  );
};

export default ContributionActivity;
