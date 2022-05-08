import Footer from "../components/Footer";
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
      <div className="container">
        <div className="is-flex profile-gap">
          <Profile />
          <main style={{ width: "100%" }}>
            <Main />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
