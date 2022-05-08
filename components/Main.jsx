import ContributionActivity from "./Main/ContributionActivity";
import Contributions from "./Main/Contributions";
import PopularRepositories from "./Main/PopularRepositories";
import ReadMe from "./Main/ReadMe";
import UnexpectedSight from "./Main/UnexpectedSight";

const Main = () => {
  return (
    <div className="my-5">
      <ReadMe />
      <PopularRepositories />
      <Contributions />
      <ContributionActivity />
      <UnexpectedSight />
    </div>
  );
};

export default Main;
