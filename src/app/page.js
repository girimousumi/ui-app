// import { useCarousel } from "./carousel";
import { CarouselSize } from "./carousal";
import Navbar from "./navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div style={{marginTop: 128}}>
        <CarouselSize />
      </div>
    </>
  );
};

export default Home;