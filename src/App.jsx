import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import BusinessTypesSection from "./components/BusinessTypesSection";
import WorkflowSection from "./components/WorkflowSection";
import GlobalSection from "./components/GlobalSection";
import WhyChooseSection from "./components/WhyChooseSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans antialiased text-gray-800">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <BusinessTypesSection />
        <WorkflowSection />
        <GlobalSection />
        <WhyChooseSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
