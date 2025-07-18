
import NewNavbar from "@/components/NewNavbar";
import { Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <NewNavbar />
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-16">Products</h1>
            
            <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-shadow max-w-2xl mx-auto">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <p className="text-2xl font-bold text-green-700">Verma Seeds</p>
                    <p className="text-green-600">Official Partner</p>
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-green-800">
                  Seeds by Verma Seeds
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-gray-700 mb-6">
                  For seed purchases, contact us:
                </p>
                <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-sm">
                  <Phone className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-xl font-semibold text-green-800">📞 9286158428</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
