
import { Phone, Mail, MapPin, MessageSquare, Linkedin, Instagram, Facebook } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Ready to join the Khetify community? Get in touch with us for
            enquiries and partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-white border-green-200 hover:shadow-lg transition-shadow text-center">
            <CardHeader>
              <Phone className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <CardTitle className="text-green-800">Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Call us for immediate assistance</p>
              <p className="text-green-600 font-semibold mt-2">
                Available Soon
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-green-200 hover:shadow-lg transition-shadow text-center">
            <CardHeader>
              <Mail className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <CardTitle className="text-green-800">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Send us your queries</p>
              <p className="text-green-600 font-semibold mt-2">
                agrilink04@gmail.com
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-green-200 hover:shadow-lg transition-shadow text-center">
            <CardHeader>
              <MapPin className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <CardTitle className="text-green-800">Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Our headquarters</p>
              <p className="text-green-600 font-semibold mt-2">
                Uttar Pradesh, India
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-green-200 hover:shadow-lg transition-shadow text-center">
            <CardHeader>
              <MessageSquare className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <CardTitle className="text-green-800">WhatsApp</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Quick support via WhatsApp</p>
              <p className="text-green-600 font-semibold mt-2">
                Available Soon
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-green-200 hover:shadow-lg transition-shadow text-center md:col-span-2 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-green-800">Follow Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center space-x-6">
                <a
                  href="#"
                  className="text-green-600 hover:text-green-800 transition-colors"
                >
                  <Linkedin className="h-8 w-8" />
                </a>
                <a
                  href="#"
                  className="text-green-600 hover:text-green-800 transition-colors"
                >
                  <Instagram className="h-8 w-8" />
                </a>
                <a
                  href="#"
                  className="text-green-600 hover:text-green-800 transition-colors"
                >
                  <Facebook className="h-8 w-8" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
