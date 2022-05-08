import ContributionActivity from "./Main/ContributionActivity";
import Contributions from "./Main/Contributions";
import PopularRepositories from "./Main/PopularRepositories";
import ReadMe from "./Main/ReadMe";

const Main = () => {
  return (
    <div className="my-5">
      <ReadMe />
      <PopularRepositories />
      <Contributions />
      <ContributionActivity />
    </div>
  );
};

export default Main;
