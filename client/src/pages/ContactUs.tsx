import NewNavbar from "@/components/NewNavbar";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <NewNavbar />
      
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Your Contact is important to us. 
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
