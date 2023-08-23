import ResponsiveSlider from "../componenets/ResponsiveSlider";
import Header from "../componenets/Header";
import MobileNavigator from "../componenets/MobileNavigator";
import MainAtricle from "../componenets/MainAtricle";
import RankingSlider from "../componenets/RankingSlider";
import LaptopNavigator from "../componenets/LaptopNavigator";
import LaptopBanner from "../componenets/LaptopBanner";

const Main = () => {
  return (
    <div>
      <Header />
      <LaptopNavigator />
      <ResponsiveSlider />
      <LaptopBanner />
      <MobileNavigator />
      <MainAtricle />
      <RankingSlider />
    </div>
  );
};

export default Main;
