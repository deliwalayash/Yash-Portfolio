import "./App.css";

import Header from "./components/Header";
import Home from "./pages/Home";

import MyService from "./pages/MyService";
import MyWork from "./components/MyWork";
import MySkills from "./pages/MySkills";
import AboutMe from "./components/AboutMe";
import GoogleAdsShowcase from "./components/GoogleAdsShowcase";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import FloatingContactButtons from "./components/FloatingContactButtons";



function App() {
  return (
    <>
      <div className="font-sora   ">
        <FloatingContactButtons />
        <div className="relative z-10">
          <Header />
          <main className="fullpage-track">
          <section className="fullpage-section fullpage-section--home" data-section-id="home">
            <Home />
          </section>
          <section className="fullpage-section fullpage-section--about" data-section-id="about">
            <AboutMe></AboutMe>
          </section>
          <section className="fullpage-section fullpage-section--service" data-section-id="service">
            <MyService/>
          </section>
          <section className="fullpage-section fullpage-section--google-ads" data-section-id="google-ads">
            <GoogleAdsShowcase />
          </section>
          <section className="fullpage-section fullpage-section--works" data-section-id="works">
            <MyWork />
          </section>
          <section className="fullpage-section fullpage-section--skills" data-section-id="skills">
            <MySkills></MySkills>
          </section>
          <section className="fullpage-section fullpage-section--testimonials" data-section-id="testimonials">
            <Testimonial />
          </section>
          <section className="fullpage-section fullpage-section--contact" data-section-id="contact">
            <Contact/>
          </section>
          <section className="fullpage-section fullpage-section--footer" data-section-id="footer">
            <Footer></Footer>
          </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
