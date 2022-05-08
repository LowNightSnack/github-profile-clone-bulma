import Main from "../components/Main";
import MetaTags from "../components/MetaTags";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Tabs from "../components/Tabs";

const Home = () => {
  return (
    <>
      <MetaTags />
      <Navbar />
      <Tabs />
      <div className="container is-flex profile-gap">
        <Profile />
        <main style={{ width: "100%" }}>
          <Main />
        </main>
      </div>
    </>
  );
};

export default Home;
