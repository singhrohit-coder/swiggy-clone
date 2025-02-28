import OnlineRes from "./OnlineRes";
import TopRes from "./TopRes";
import Footer from "./Footer";
import MindGrid from "./MindGrid";

const Body = () => {

  return  (
    <div className="body">
      <MindGrid />
      <TopRes />
      <OnlineRes />
      <Footer />
    </div>
  );
};

export default Body;
