const ContributionCell = ({ contributionLevel = 0 }) => {
  return (
    <div
      className={`contribution-cell contribution-level-${contributionLevel}`}
    ></div>
  );
};

export default ContributionCell;
