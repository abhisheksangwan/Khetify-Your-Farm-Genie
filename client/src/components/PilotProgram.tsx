
import { MapPin, CheckCircle, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PilotProgram = () => {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">Pilot Program</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our successful pilot program demonstrates the real impact we're making in Indian agriculture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-white border-green-200 hover:shadow-lg transition-shadow text-center">
            <CardHeader>
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-green-800">120+ Farmers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Successfully onboarded in our pilot program</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-green-200 hover:shadow-lg transition-shadow text-center">
            <CardHeader>
              <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-green-800">UP & Uttarakhand</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Active across Uttar Pradesh & Uttarakhand states</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-green-200 hover:shadow-lg transition-shadow text-center">
            <CardHeader>
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-green-800">Growing Network</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Currently active in villages near Dehradun, Banaras, and clusters</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PilotProgram;
