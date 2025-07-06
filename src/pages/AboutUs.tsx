
import NewNavbar from "@/components/NewNavbar";
import { Target, Eye } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <NewNavbar />
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8 animate-fade-in">
              About Us
            </h1>

            {/* Image section */}
            <div className="mb-12 animate-scale-in">
              <img
                src="/lovable-uploads/104325f3-15c0-4e4b-a8fe-a650467c2f97.png"
                alt="Khetify connecting farmers with technology"
                loading="lazy"
                className="mx-auto max-w-md w-full h-auto rounded-xl shadow-lg"
              />
            </div>

            <div className="mb-12 animate-slide-up">
              <h2 className="text-2xl font-bold text-green-700 mb-6 flex items-center justify-center">
                🌾 Description
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Khetify is a platform that connects farmers with skilled
                workforce associates for short-term agricultural support. By
                building an offline-to-online model, Khetify empowers farmers
                with timely manpower while providing learning and earning
                opportunities to agriculture students and experienced field
                operatives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div className="bg-green-50 p-8 rounded-lg animate-fade-in">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-green-600 mr-4" />
                  <h3 className="text-2xl font-bold text-green-800">
                    🎯 Mission
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To revolutionize agricultural support systems by building a
                  tech-enabled, inclusive, and scalable platform that acts like
                  a genie for farmers, delivering timely services at their
                  fingertips. Khetify empowers agriculture graduates with
                  real-world field opportunities, generates rural employment,
                  bridges the rural skill gap, and eliminates middlemen by
                  directly connecting farmers with a reliable, skilled
                  workforce. We envision a future where farming is more
                  productive, dignified, and collaborative—led by technology,
                  driven by youth, and rooted in trust.
                </p>
              </div>

              <div className="bg-blue-50 p-8 rounded-lg animate-fade-in">
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-bold text-blue-800">
                    🌱 Vision
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  At Khetify, we envision a future where every farmer,
                  regardless of location or landholding size, has instant access
                  to trusted, skilled support—empowering them to farm with
                  dignity, confidence, and efficiency. We strive to become the
                  most reliable agri-support platform in India by bridging rural
                  skill gaps, nurturing agri-youth, and transforming farm
                  operations through smart technology. Our vision is to make
                  farming not just easier, but more collaborative, tech-driven,
                  and sustainable for generations to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
