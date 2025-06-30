
import { ArrowRight, Users, Sprout, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
            AgriLink
          </h1>
          <p className="text-xl md:text-2xl text-green-700 mb-4">
            Bridging the Gap Between Farmers & Skilled Agri Professionals
          </p>
          <p className="text-lg text-green-600 mb-8 italic">
            "AgriLink – Your Genie, On Tap Away"
          </p>
          <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto">
            Empowering small and marginal farmers with on-demand agricultural support while creating meaningful work opportunities for agri students and skilled field associates.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
              <Users className="mr-2 h-5 w-5" />
              Join as a Farmer
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg">
              <Sprout className="mr-2 h-5 w-5" />
              Join as a Field Officer
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg">
              <Handshake className="mr-2 h-5 w-5" />
              Partner with Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-green-100">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">120+ Farmers</h3>
              <p className="text-gray-600">Already onboarded in our pilot program</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-green-100">
              <Sprout className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">Verified Professionals</h3>
              <p className="text-gray-600">Trained agri-students and field associates</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-green-100">
              <Handshake className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">Active in UP & Uttarakhand</h3>
              <p className="text-gray-600">Serving villages near Dehradun & Banaras</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
