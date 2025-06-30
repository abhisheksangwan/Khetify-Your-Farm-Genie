import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";



// Logo Component
const Logo = () => (
  <Link
    to="/"
    className="flex items-center hover:scale-105 transition-transform duration-300"
  >
    <img
      src="public/lovable-uploads/WhatsApp Image 2025-06-26 at 00.46.51.jpeg"
      alt="Khetify Logo"
      className="h-12 w-12 mr-4"
    />
    <div>
      <span className="font-bold text-3xl text-green-800">Khetify</span>
      <p className="text-base text-green-600 font-medium">Your Farm Genie</p>
    </div>
  </Link>
);

// Dropdown Component
const Dropdown = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; to?: string; onClick?: () => void }[];
}) => (
  <div className="relative group">
    <button className="text-green-700 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center hover:scale-105">
      {title}
      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
    </button>
    <div
      className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border z-50 
      opacity-0 group-hover:opacity-100 
      scale-95 group-hover:scale-100 
      pointer-events-none group-hover:pointer-events-auto 
      transition-all duration-300 ease-out"
    >
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.to || "#"}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 transition-colors duration-200"
          onClick={link.onClick}
        >
          {link.label}
        </Link>
      ))}
    </div>
  </div>
);

// Desktop Navigation Component
const DesktopNavigation = ({
  scrollToContact,
}: {
  scrollToContact: () => void;
}) => (
  <div className="hidden md:block">
    <div className="ml-10 flex items-baseline space-x-4">
      {/* About Us */}
      <Link
        to="/about"
        className="text-green-700 hover:text-green-900 hover:scale-105 transition-transform duration-300"
      >
        About Us
      </Link>
      {/* About Us */}
      <Link
        to="/careers"
        className="text-green-700 hover:text-green-900 hover:scale-105 transition-transform duration-300"
      >
        Careers
      </Link>
      {/* Products Dropdown */}
      <Dropdown
        title="Products"
        links={[{ label: "Seeds", to: "/products" }]}
      />

      {/* Company Dropdown */}
      {/* About Us */}
      <Link
        to="/contactUs"
        className="text-green-700 hover:text-green-900 hover:scale-105 transition-transform duration-300"
      >
        Contact Us
      </Link>
    </div>
  </div>
);

// Mobile Navigation Component
const MobileNavigation = ({
  isOpen,
  setIsOpen,
  scrollToContact,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  scrollToContact: () => void;
}) => (
  <>
    <Button
      variant="ghost"
      onClick={() => setIsOpen(!isOpen)}
      className="text-green-700 hover:text-green-900 hover:scale-105 transition-transform duration-300 md:hidden"
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </Button>
    {isOpen && (
      <div className="md:hidden animate-fade-in">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
          <Link
            to="/products"
            className="text-green-700 hover:text-green-900 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/about"
            className="text-green-700 hover:text-green-900 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/careers"
            className="text-green-700 hover:text-green-900 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Careers
          </Link>
          <button
            className="text-green-700 hover:text-green-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200"
            onClick={() => {
              setIsOpen(false);
              scrollToContact();
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    )}
  </>
);

// Main Navbar Component
const NewNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate("/");
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 1);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-green-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo />
          <DesktopNavigation scrollToContact={scrollToContact} />
          <MobileNavigation
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            scrollToContact={scrollToContact}
          />
        </div>
      </div>
    </nav>
  );
};

export default NewNavbar;
