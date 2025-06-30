import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
            About Us
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8">
              AgriLink is India's first offline-to-online ecosystem built to
              support the backbone of our nation – farmers. We connect farmers
              with verified agri-students/Youth and field associates for
              need-based agricultural tasks, from sowing to harvesting. Think of
              us as—your genie, just one tap away.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center mb-6">
              <Eye className="h-8 w-8 text-green-600 mr-4" />
              <h3 className="text-2xl font-bold text-green-800">Our Vision</h3>
            </div>
            <p className="text-lg text-gray-700">
              To simplify agriculture by creating a robust manpower support
              network that uplifts rural India and agriculture professionals.
            </p>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-green-600 mr-4" />
              <h3 className="text-2xl font-bold text-green-800">Our Mission</h3>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              To build an inclusive platform where:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <Heart className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Farmers can access trusted, affordable help on demand
              </li>
              <li className="flex items-start">
                <Heart className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Agri-students get real-field exposure, e-certificates, and
                earning opportunities
              </li>
              <li className="flex items-start">
                <Heart className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Local employment is promoted
              </li>
              <li className="flex items-start">
                <Heart className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                The gap between demand & skilled manpower is filled, without
                middlemen
              </li>
              <li className="flex items-start">
                <Heart className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                Bed preparation, sowing, and harvesting become collaborative and
                cost-effective
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
