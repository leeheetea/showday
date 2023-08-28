import ResponsiveSlider from "../components/ResponsiveSlider";
import Header from "../components/Header";
import MobileNavigator from "../components/MobileNavigator";
import MainAtricle from "../components/MainAtricle";
import RankingSlider from "../components/RankingSlider";
import LaptopNavigator from "../components/LaptopNavigator";
import LaptopBanner from "../components/LaptopBanner";
import Footer from "../components/Footer";

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
      <Footer />
    </div>
  );
};

export default Main;
