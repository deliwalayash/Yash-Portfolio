import "./App.css";

import Header from "./components/Header";
import Home from "./pages/Home";

import Particles from "./bitsComponent/Particles";
import MyService from "./pages/MyService";
import MyWork from "./components/MyWork";
import MySkills from "./pages/MySkills";
import AboutMe from "./components/AboutMe";
import GithubStats from "./components/GitHubStats";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import LightRays from "./bitsComponent/Lightrays";
import Aurora from "./bitsComponent/Aurora";



function App() {
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
          <Home />
          <AboutMe></AboutMe>
          <GithubStats></GithubStats>
          <MyService/>
           <MyWork />
           <MySkills></MySkills>
             <Testimonial />
             <Contact/>
             <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
