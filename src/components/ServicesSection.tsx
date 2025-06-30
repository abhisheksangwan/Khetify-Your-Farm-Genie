import { CheckCircle, Users, Bot, DollarSign, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const whatsappNumber = "919286158428";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
            Services for farmers
          </h2>
          {/* <h3 className="text-2xl font-semibold text-green-700 mb-4">For Farmers:</h3> */}
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            Khetify makes farming simpler, smarter, and more efficient with
            trusted support at every step:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white border-green-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-green-800 text-center">
                Agri Task Assistance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-center">
                Hire verified local workers for tasks like sowing, weeding, or
                harvesting—on-demand and GPS-enabled.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-green-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-green-800 text-center">
                Verified Manpower
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-center">
                Only trained and vetted workers, ensuring quality care for your
                fields.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-green-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Bot className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-green-800 text-center">
                AI Farming Advisor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-center">
                24/7 smart advice on crops, pests, seasons, and best
                practices—personalized to your region.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-green-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-green-800 text-center">
                Transparent Pricing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-center">
                Clear, upfront pricing. No hidden charges.
              </p>
            </CardContent>
          </Card>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block md:col-span-2 lg:col-span-1"
          >
            <Card className="bg-white border-green-200 hover:shadow-lg transition-shadow cursor-pointer hover:bg-green-50">
              <CardHeader>
                <MessageSquare className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800 text-center">
                  WhatsApp Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center">
                  Real-time assistance for bookings, orders, or queries.
                </p>
              </CardContent>
            </Card>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
