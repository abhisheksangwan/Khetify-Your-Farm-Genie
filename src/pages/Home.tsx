
import { useState } from "react";
import NewNavbar from "@/components/NewNavbar";
import HeroSection from "@/components/HeroSection";
import PartnerSection from "@/components/PartnerSection";
import ServicesSection from "@/components/ServicesSection";
import Services from "@/components/Services";
import QueryForm from "@/components/QueryForm";
import HomeChatBot from "@/components/HomeChatBot";
import HomeFooter from "@/components/HomeFooter";
import LanguageSelector from "@/components/LanguageSelector";
import Testimonials from "@/components/Testimonials";


const Home = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  return (
    <div className="min-h-screen bg-background">
      <NewNavbar />
      {/* <LanguageSelector
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      /> */}
      <HeroSection />
      
      <Services />
      <QueryForm />
      <Testimonials />
      <HomeChatBot />
      <HomeFooter />
    </div>
  );
};

export default Home;
