import Navbar from "./Navbar";
import SearchSection from "./SearchSection";
import SliderSection from "./SliderSection";
import CategoriesSection from "./CategoriesSection";
import WaysSection from "./WaysSection";
import DetailsSection from '../footer/FOOTER'


function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <Navbar />
        <SearchSection />
        <SliderSection />
        <CategoriesSection />
        <WaysSection />
        <DetailsSection />
      </div>
    </>
  );
}

export default Home;
