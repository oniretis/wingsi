import Image from "next/image";
import NavBar from "./components/Navbar";
import { Hero } from "./components/Hero";
import Description from "./components/Description";
import { About } from "./components/About";
import { Team } from "./components/Team";
import { Work } from "./components/Work";
import Program from "./components/Program";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 w-full z-[9999] ">
        <NavBar />
      </div>
      <Hero />
      <Description />
      <About />
      <Team />
      <Work />
      <Program />
      <Footer />
    </div>
  );
}
