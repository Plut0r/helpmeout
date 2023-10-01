import Features from "../components/features";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import HowItWorks from "../components/how_it_works";

function Home() {
  return (
    <div>
      <Header />
      <div className="w-full h-1 bg-gray-200 mt-2"></div>
      <Hero />
      <div className="w-full h-4 bg-gray-200 mt-2"></div>
      <Features />
      <div className="w-full h-4 bg-gray-200 mt-2"></div>
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default Home;
