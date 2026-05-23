import "./App.css";

import Header from "./components/Header";
import Home from "./pages/Home";

import Particles from "./bitsComponent/Particles";
import MyService from "./pages/MyService";
import MyWork from "./components/MyWork";
import MySkills from "./pages/MySkills";
import AboutMe from "./components/AboutMe";
import GoogleAdsShowcase from "./components/GoogleAdsShowcase";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import useFullPageScroll from "./hooks/useFullPageScroll";



function App() {
  useFullPageScroll();

  return (
    <>
      <div className="font-sora   ">
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <div style={{ width: "100%", height: "100vh", position: "relative" }}>
            
<Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
 {/* <Beams
    beamWidth={2}
    beamHeight={15}
    beamNumber={12}
    lightColor="#ffffff"
    speed={2}
    noiseIntensity={1.75}
    scale={0.2}
    rotation={0}
  /> */}
  {/* <LightRays
    raysOrigin="top-center"
    raysColor="#00ffff"
    raysSpeed={1.5}
    lightSpread={0.8}
    rayLength={1.2}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0.1}
    distortion={0.05}
    className="custom-rays"
  /> */}
  {/* <Aurora
  colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
  blend={0.5}
  amplitude={1.0}
  speed={0.5}
/> */}

          </div>
        </div>
        <div className="relative z-10">
          <Header />
          <main className="fullpage-track" data-fullpage-track>
          <section className="fullpage-section fullpage-section--home" data-fullpage-section data-section-id="home">
            <Home />
          </section>
          <section className="fullpage-section fullpage-section--about" data-fullpage-section data-section-id="about">
            <AboutMe></AboutMe>
          </section>
          <section className="fullpage-section fullpage-section--service" data-fullpage-section data-section-id="service">
            <MyService/>
          </section>
          <section className="fullpage-section fullpage-section--google-ads" data-fullpage-section data-section-id="google-ads">
            <GoogleAdsShowcase />
          </section>
          <section className="fullpage-section fullpage-section--works" data-fullpage-section data-section-id="works">
            <MyWork />
          </section>
          <section className="fullpage-section fullpage-section--skills" data-fullpage-section data-section-id="skills">
            <MySkills></MySkills>
          </section>
          <section className="fullpage-section fullpage-section--testimonials" data-fullpage-section data-section-id="testimonials">
            <Testimonial />
          </section>
          <section className="fullpage-section fullpage-section--contact" data-fullpage-section data-section-id="contact">
            <Contact/>
          </section>
          <section className="fullpage-section fullpage-section--footer" data-fullpage-section data-section-id="footer">
            <Footer></Footer>
          </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
