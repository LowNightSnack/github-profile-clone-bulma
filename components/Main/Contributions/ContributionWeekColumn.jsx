import ContributionCell from "./ContributionCell";

const ContributionWeekColumn = ({
  contributionLevels = [0, 0, 1, 3, 4, 2, 0],
}) => {
  return (
    <div className="is-flex is-flex-direction-column" style={{ gap: "5px" }}>
      {contributionLevels.map((level, index) => (
        <ContributionCell contributionLevel={level} key={index} />
      ))}
      <ContributionCell />
    </div>
  );
};

export default ContributionWeekColumn;
