import bgHeader from "../images/desktop/image-header.jpg";
import Navbar from "./Navbar";
import arrow from '../images/icon-arrow-down.svg'

const Hero = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bgHeader})` }}
    >
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-20">
        <h1 className="uppercase text-white font-fraunces font-[900] text-3xl text-center md:text-5xl tracking-[0.25em] mb-20 md:mb-24">
          We are creatives
        </h1>
        <img className="w-8" src={arrow} alt="arrow down" />
      </div>
    </div>
  );
};

export default Hero;
