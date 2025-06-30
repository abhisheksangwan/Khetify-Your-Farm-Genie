
import { Users, Sprout, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const JoinUs = () => {
  return (
    <section id="join" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">Join Us</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Be part of the agricultural revolution. Whether you're a farmer seeking support or an agri-professional looking for opportunities, AgriLink has a place for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Agri Students */}
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle className="flex items-center text-green-800 text-xl">
                <Sprout className="h-8 w-8 mr-3" />
                Agri Students / Field Force
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                Join our mission! Fill out the form and become a verified AgriLink Officer. Help farmers, gain field exposure, and grow your career.
              </p>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                Become a Field Officer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Farmers */}
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800 text-xl">
                <Users className="h-8 w-8 mr-3" />
                Farmers / SPOs / FPOs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                Need assistance on your field? Whether you want support for 1 acre or 10, AgriLink has got your back. Book skilled help as per your need.
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Get Field Support
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
