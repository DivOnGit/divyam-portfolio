import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import LogoSection from "./components/LogoSection.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import ProjectsSection from "./sections/ProjectsSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Contact from "./sections/Contact.jsx";
import {SpeedInsights} from "@vercel/speed-insights/react";


const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ShowcaseSection />
            {/*<LogoSection />*/}
            <FeatureCards />
            <ProjectsSection />
            <TechStack />
            <Testimonials />
            <Contact />
            {/*<SpeedInsights />*/}
        </>
    )
}
export default App
