
import { Link } from "react-router-dom";
import NewNavbar from "@/components/NewNavbar";
import { CheckCircle, MapPin, Wrench, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Careers = () => {
  const handleApplyNow = () => {
    const phoneNumber = "919286158428";
    const message =
      "Hi! I'm interested in joining Khetify as a Farm Genie. Can you please provide more details about the application process?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <NewNavbar />
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8 animate-fade-in">
              Careers
            </h1>

            <div
              className="mb-12 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-3xl font-bold text-green-700 mb-6">
                💼 Why Khetify?
              </h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                At Khetify, we connect you directly with farmers in need of
                skilled, reliable help—right from your phone! Whether you're
                looking for part-time work, seasonal gigs, or steady income,
                Khetify is your trusted partner on the field.
              </p>
            </div>

            <div
              className="mb-12 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <h3 className="text-2xl font-bold text-green-800 mb-8">
                Top 4 Benefits of Joining Khetify as a Genie:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card
                  className="bg-green-50 border-green-200 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: "0.6s" }}
                >
                  <CardHeader>
                    <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <CardTitle className="text-green-800">
                      1. ✅ Earn on Your Terms
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Choose your tasks, time, and location — work flexibly and
                      get paid fairly.
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className="bg-blue-50 border-blue-200 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: "0.8s" }}
                >
                  <CardHeader>
                    <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle className="text-blue-800">
                      2. 📍 Nearby Work Alerts
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Get notified when a farmer near you needs help — no
                      long-distance travel!
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className="bg-orange-50 border-orange-200 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: "1s" }}
                >
                  <CardHeader>
                    <Wrench className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <CardTitle className="text-orange-800">
                      3. 🛠 Skill-Based Tasks
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      From planting to harvesting, choose work based on what
                      you're good at.
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className="bg-purple-50 border-purple-200 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: "1.2s" }}
                >
                  <CardHeader>
                    <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <CardTitle className="text-purple-800">
                      4. 🪪 Verified & Respectful Work
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      We verify all farmer requests to ensure safety and dignity
                      at every job.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div
              className="text-center animate-fade-in"
              style={{ animationDelay: "1.4s" }}
            >
              <div className="mb-8">
                <img
                  src="/lovable-uploads/ff4298ed-0c43-4f6b-ac83-a872b8574a30.png"
                  alt="Be Our Farm Genie"
                  className="mx-auto max-w-sm h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
                <p className="text-xl font-semibold text-green-700 mt-4">
                  👉 Be Our Farm Genie
                </p>
              </div>

              <Button
                onClick={handleApplyNow}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                📩 Apply Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
