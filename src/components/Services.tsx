import { useState } from "react";
import { Users, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ServicesSection from "./ServicesSection";
import { Link, useNavigate } from "react-router-dom";
import ConsultancyServices from "./ConsultancyServices";

// Farmers Section Component
const FarmersSection = ({ onClick }: { onClick: () => void }) => (
  <Card
    className="bg-white border-green-200 hover:shadow-lg transition-shadow cursor-pointer flex-1"
    onClick={onClick}
  >
    <CardHeader>
      <CardTitle className="flex items-center text-green-800">
        <Users className="h-6 w-6 mr-2" />
        For Farmers
      </CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-3 text-gray-700">
        <li>On-demand agri task assistance</li>
        <li>Verified and trained manpower</li>
        <li>Transparent pricing</li>
        <li>WhatsApp support + hotline</li>
      </ul>
    </CardContent>
  </Card>
);

// Consultancy Section Component
const ConsultancySection = ({onClick}: {onClick: ()=> void }) => (
  <Card className="bg-white border-green-200 hover:shadow-lg transition-shadow cursor-pointer flex-1"
    onClick={onClick}>
    <CardHeader>
      <CardTitle className="flex items-center text-green-800">
        <MessageSquare className="h-6 w-6 mr-2" />
        Consultancy Services
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-700">
        We offer consultancy in sustainable farming, resource planning, and
        manpower deployment based on agro-climatic zones.
      </p>
    </CardContent>
  </Card>
);

// Main Services Component
const Services = () => {
  // const [showFarmersServices, setShowFarmersServices] = useState(false);
  const navigate = useNavigate();

  return (
    <section id="services" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
            Our Services
          </h2>
        </div>

        {/* Use flex layout for side-by-side cards */}
        <div className="flex justify-between gap-8">
          {/* Render Farmers Section */}
          <FarmersSection
            onClick={() => (
              //  setShowFarmersServices(true),
              navigate("/farmers")
            )}
          />

          {/* Render Consultancy Section */}
          <ConsultancySection
            onClick={() => navigate("/consultancy")}
          />
        </div>

        {/* Conditionally Render Farmers Services Section */}
        {/* {showFarmersServices && (
          <div className="mt-8">
            <ServicesSection />
          </div>
        )} */}
      </div>
    </section>
  );
};

export default Services;
