import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import MainSection from "./components/MainSection";
import TestimonialData from "./components/Testimonial";

function App() {
  return (
    <div className="min-w-screen min-h-screen">
      <Hero />
      <MainSection />
      <TestimonialData />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
