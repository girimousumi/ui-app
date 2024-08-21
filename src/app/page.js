import BottomSlider from "./components/BottomSlider";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ServiceCard from "./components/ServiceCard";
import VerticalSlider from "./components/FullScreenVerticalCarousel";
import Navbar from "./navbar";
import { FaCar, FaParking, FaConciergeBell, FaWifi, FaUtensils, FaPlaneDeparture, FaWheelchair } from 'react-icons/fa';

const Home = () => {
  const services = [
    { icon: <FaCar />, title: 'Pickup & Drop', description: 'At Paradise Resort, we offer a range of luxurious accommodations to suit every need.', number: '1' },
    { icon: <FaParking />, title: 'Parking Space', description: 'At Paradise Resort, we offer a range of luxurious accommodations to suit every need.', number: '2' },
    { icon: <FaConciergeBell />, title: 'Room Service', description: 'At Paradise Resort, we offer a range of luxurious accommodations to suit every need.', number: '3' },
    { icon: <FaWifi />, title: 'Free Wifi', description: 'At Paradise Resort, we offer a range of luxurious accommodations to suit every need.', number: '4' },
    { icon: <FaWifi />, title: 'Travel Accomodation', description: 'At Paradise Resort, we offer a range of luxurious accommodations to suit every need.', number: '5' },
    { icon: <FaUtensils />, title: 'Free Breakfast', description: 'At Paradise Resort, we offer a range of luxurious accommodations to suit every need.', number: '6' },
    { icon: <FaPlaneDeparture />, title: 'Airport Shuttle', description: 'At Paradise Resort, we offer a range of luxurious accommodations to suit every need.', number: '7' },
    { icon: <FaWheelchair />, title: 'Wheelchair Friendly', description: 'At Paradise Resort, we offer a range of luxurious accommodations to suit every need.', number: '8' },
  ];

  return (
    <>
      <Navbar />
      <div style={{marginTop: 70}} className="flex justify-center">
        <VerticalSlider />
      </div>

      <HeroSection />

      <BottomSlider />

      <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
          number={service.number}
        />
      ))}
    </div>

    <Footer />
    </>
  );
};

export default Home;