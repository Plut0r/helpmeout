import Footer from "../components/footer";
import Header from "../components/header";
import Recording, { LastSection } from "../components/recording";

function Video() {
  return (
    <div>
      <Header />
          <Recording />
          <LastSection />
      <Footer />
    </div>
  );
}

export default Video;
