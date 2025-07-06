import NewNavbar from "@/components/NewNavbar";
import { Target, Eye } from "lucide-react";
import React, { useState } from "react";
import HomeFooter from "@/components/HomeFooter";

const SectionHeader = ({ title }) => (
  <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8 animate-fade-in">
    {title}
  </h1>
);

const ImageSection = ({ src, alt }) => (
  <div className="mb-12 animate-scale-in">
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="mx-auto max-w-md w-full h-auto rounded-xl shadow-lg"
    />
  </div>
);

const Description = ({ text }) => (
  <div className="mb-12 animate-slide-up">
    <h2 className="text-2xl font-bold text-green-800 mb-6 animate-fade-in">
      🌾 About Us
    </h2>
    <p className="text-lg text-gray-700 leading-relaxed">{text}</p>
  </div>
);

type Pointer = {
  title: string;
  description: string;
};

type SectionData = {
  imageAlt: string;
  imageUrl: string;
  pointers: Pointer[];
};

const missionData: SectionData = {
  imageAlt:
    "Illustration of a smiling farmer in traditional clothes with hands joined in a welcoming gesture with a soft abstract background shape in light grey",
  imageUrl: "lovable-uploads/Mission-img.png",
  pointers: [
    // {
    //   title: "Provide high quality agricultural products",
    //   description:
    //     "Focus on delivering superior agricultural products that meet customer expectations with an emphasis on sustainability and innovation.",
    // },
    {
      title:
        "To transform the agricultural landscape by promoting transparency and direct trade.",
      description:
        "Equip farmers with latest knowledge, resources, and technology to improve productivity and livelihood.",
    },
    // {
    //   title: "Foster sustainable farming practices",
    //   description:
    //     "Encourage practices that protect the environment and ensure long-term agricultural viability.",
    // },
  ],
};

const visionData: SectionData = {
  imageAlt:
    "Illustration of a futuristic farm landscape showing green fields, wind turbines, and digital data overlays representing innovation and sustainability",
  imageUrl: "lovable-uploads/ig3.png",
  pointers: [
    // {
    //   title: "Innovation & Creativity",
    //   description:
    //     "Lead advancements in agriculture through creative problem solving and adoption of cutting-edge technologies.",
    // },
    {
      title:
        "A world where farmers can thrive by being in control of their own produce, reaching more buyers with ease.",
      description:
        "Put the welfare and growth of farmers at the center of all initiatives and innovations.",
    },
    // {
    //   title: "Global Agricultural Leadership",
    //   description:
    //     "Become a recognized leader in sustainable and innovative agriculture worldwide.",
    // },
  ],
};

const TAB_TITLES = ["Mission", "Vision"] as const;
type TabType = (typeof TAB_TITLES)[number];

const dataByTab: Record<TabType, SectionData> = {
  Mission: missionData,
  Vision: visionData,
};

const MissionVisionValues: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("Mission");

  const { imageUrl, imageAlt, pointers } = dataByTab[activeTab];

  return (
    <section className="max-w-7xl mx-auto p-7 md:p-10 flex flex-col items-center bg-white rounded-lg shadow-lg">
      <nav
        className="inline-flex border border-gray-300 rounded-lg overflow-hidden mb-10"
        aria-label="Mission Vision Tabs"
      >
        {TAB_TITLES.map((tab) => {
          const isActive = tab === activeTab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 text-sm md:text-base font-medium transition-colors focus:outline-none ${
                isActive
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-800 hover:bg-gray-100"
              } ${
                tab !== TAB_TITLES[TAB_TITLES.length - 1]
                  ? "border-r border-gray-300"
                  : ""
              }`}
              aria-current={isActive ? "page" : undefined}
              type="button"
            >
              {tab}
            </button>
          );
        })}
      </nav>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-shrink-0 w-full max-w-xs mx-auto md:max-w-sm lg:max-w-md">
          <div className="relative rounded-lg overflow-hidden shadow-lg bg-gray-50">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-auto object-cover "
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c9df0d1f-3354-4393-92e7-30482ba0b71e.png";
              }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <div className="flex-1 max-w-2xl">
          <ul className="space-y-6">
            {pointers.map(({ title, description }, idx) => (
              <li key={idx} className="flex items-start space-x-4">
                <span className="flex-shrink-0 mt-1 w-3 h-3 bg-green-600 rounded-full"></span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {title}
                  </h3>
                  <p className="mt-1 text-gray-600">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const Mission = () => (
  <div className="bg-green-50 p-8 rounded-lg animate-fade-in">
    <div className="flex items-center mb-6">
      <Target className="h-8 w-8 text-green-600 mr-4" />
      <h3 className="text-2xl font-bold text-green-800">🎯 Mission</h3>
    </div>
    <p className="text-gray-700 leading-relaxed">
      To revolutionize agricultural support systems by building a tech-enabled,
      inclusive, and scalable platform that acts like a genie for farmers,
      delivering timely services at their fingertips. Khetify empowers
      agriculture graduates with real-world field opportunities, generates rural
      employment, bridges the rural skill gap, and eliminates middlemen by
      directly connecting farmers with a reliable, skilled workforce. We
      envision a future where farming is more productive, dignified, and
      collaborative—led by technology, driven by youth, and rooted in trust.
    </p>
  </div>
);

const Vision = () => (
  <div className="bg-blue-50 p-8 rounded-lg animate-fade-in">
    <div className="flex items-center mb-6">
      <Eye className="h-8 w-8 text-blue-600 mr-4" />
      <h3 className="text-2xl font-bold text-blue-800">🌱 Vision</h3>
    </div>
    <p className="text-gray-700 leading-relaxed">
      At Khetify, we envision a future where every farmer, regardless of
      location or landholding size, has instant access to trusted, skilled
      support—empowering them to farm with dignity, confidence, and efficiency.
      We strive to become the most reliable agri-support platform in India by
      bridging rural skill gaps, nurturing agri-youth, and transforming farm
      operations through smart technology. Our vision is to make farming not
      just easier, but more collaborative, tech-driven, and sustainable for
      generations to come.
    </p>
  </div>
);

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <NewNavbar />
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-4xl mt-10 mx-auto px-5 sm:px-6 lg:px-8  flex justify-between">
          <div className="w-1/2 mt-10 mr-10 pr-10 flex flex-col justify-top items-start">
            <Description
              text="Khetify connects farmers to buyers directly and also provides
labor and consultancy services. Our mission is to empower
farmers with the tools they need to sell fresh produce with
ease and maximize profits while oYering laborers
opportunities to earn income. "
            />
          </div>
          <div>
            <ImageSection
              src="public/lovable-uploads/Khetifyy-aboutus.png"
              alt="Khetify connecting farmers with technology"
            />
          </div>
        </div>
      </section>
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-20  sm:px-6 lg:px-8 text-gray-700">
          <h1 className="sm:px-6 lg:px-8 text-4xl">Our Values</h1>
          <h1 className="sm:px-6 lg:px-8 text-xl">
            Integrity | Empowerment | Innovation
          </h1>
          <p className="text-lg text-gray-700 mx-8 w-1/2  mt-4">
            Upholding Integrity in every interaction, ensuring trust and
            transparency with farmers and stakeholders. Driving Empowerment and
            Innovation to create sustainable, tech-driven solutions for the
            agricultural ecosystem.
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <MissionVisionValues />
      </section>
      <HomeFooter />
    </div>
  );
};

export default AboutUs;
