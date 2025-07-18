import React from "react";
import { Link } from "react-router-dom";
import NewNavbar from "@/components/NewNavbar";
import { CheckCircle, MapPin, Wrench, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Component for the "Apply Now" button
const ApplyNowButton = () => {
  const handleApplyNow = () => {
    const phoneNumber = "919286158428";
    const message =
      "Hi! I'm interested in joining Khetify as a Farm Genie. Can you please provide more details about the application process?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      onClick={handleApplyNow}
      className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      📩 Apply Now
    </Button>
  );
};

// Component for the "Why Khetify?" section
const WhyKhetify = () => (
  <div className="text-center mb-16">
    <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
      <h2 className="text-3xl font-bold text-green-700 mb-6">
        💼 Why Khetify?
      </h2>
      <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
        A platform for growth, innovation, and empowerment.
      </p>
      <p>
        Remote Benefit – Work from the field and help us grow our ecosystem.
      </p>
    </div>
  </div>
);

// Component for individual benefits cards
const BenefitCard = ({
  icon: Icon,
  title,
  description,
  color,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}) => (
  <Card
    className={`bg-${color}-50 border-${color}-200 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in`}
    style={{ animationDelay: "0.6s" }}
  >
    <CardHeader>
      <Icon className={`h-12 w-12 text-${color}-600 mx-auto mb-4`} />
      <CardTitle className={`text-${color}-800`}>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-700">{description}</p>
    </CardContent>
  </Card>
);

// Component for the benefits grid
const BenefitsGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <BenefitCard
      icon={CheckCircle}
      title="1. ✅ Earn on Your Terms"
      description="Choose your tasks, time, and location — work flexibly and get paid fairly."
      color="green"
    />
    <BenefitCard
      icon={MapPin}
      title="2. 📍 Nearby Work Alerts"
      description="Get notified when a farmer near you needs help — no long-distance travel!"
      color="blue"
    />
    <BenefitCard
      icon={Wrench}
      title="3. 🛠 Skill-Based Tasks"
      description="From planting to harvesting, choose work based on what you're good at."
      color="orange"
    />
    <BenefitCard
      icon={Shield}
      title="4. 🪪 Verified & Respectful Work"
      description="We verify all farmer requests to ensure safety and dignity at every job."
      color="purple"
    />
  </div>
);

// Component for the "Join Our Talent Pool" section
const TalentPoolSection = () => (
  <div
    className="text-center animate-fade-in flex justify-around items-center flex-row"
    style={{ animationDelay: "1.4s" }}
  >
    <div>
      <p className="text-xl font-semibold text-green-700 mb-5">
        👉 Join Our Talent Pool
      </p>
      <ApplyNowButton />
    </div>
    <div className="mb-8">
      <img
        src="lovable-uploads/team-pool.jpg"
        alt="Be Our Farm Genie"
        loading="lazy"
        className="mx-auto max-w-sm h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
      />
    </div>
  </div>
);

// Main Careers component
const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <NewNavbar />
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <WhyKhetify />
          <div
            className="mb-12 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {/* <h3 className="text-2xl font-bold text-green-800 mb-8">
              Top 4 Benefits of Joining Khetify as a Genie:
            </h3>
            <BenefitsGrid /> */}
          </div>
          <TalentPoolSection />
        </div>
      </section>
    </div>
  );
};

export default Careers;
