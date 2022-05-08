import ContributionCell from "./ContributionCell";
import ContributionMonthGrid from "./ContributionMonthGrid";

const ContributionChart = ({ contributionChart, months }) => {
  return (
    <div className="boxed-borders boxed-borders-radius border-radius-bottom-0 p-3">
      <div className="is-flex is-justify-content-space-between">
        {months.map((month, index) => (
          <ContributionMonthGrid
            contributionMatrix={contributionChart[month]}
            month={month}
            key={index}
          />
        ))}
      </div>
      <div className="is-flex is-justify-content-space-between mt-2 mx-5">
        <p>Learn how we count contributions</p>
        <div className="is-flex is-align-items-center" style={{ gap: "3px" }}>
          <p>Less</p>
          <ContributionCell contributionLevel={0} />
          <ContributionCell contributionLevel={1} />
          <ContributionCell contributionLevel={2} />
          <ContributionCell contributionLevel={3} />
          <ContributionCell contributionLevel={4} />
          <p>More</p>
        </div>
      </div>
    </div>
  );
};

export default ContributionChart;
