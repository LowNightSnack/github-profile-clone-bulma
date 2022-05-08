import ContributionWeekColumn from "./ContributionWeekColumn";

const ContributionMonthGrid = ({ contributionMatrix, month = "Jan" }) => {
  return (
    <div className="is-flex is-flex-direction-column">
      <p>{month}</p>
      <div className="is-flex" style={{ gap: "5px" }}>
        {contributionMatrix.map((weekContribution, index) => (
          <ContributionWeekColumn
            contributionLevels={weekContribution}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ContributionMonthGrid;
Math.floor(Math.random() * 4);
