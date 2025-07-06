import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Logo Component
const Logo = () => (
  <Link
    to="/home#"
    className="flex items-center hover:scale-105 transition-transform duration-300"
  >
    <img
      src="public/lovable-uploads/logo-khetify_bg_removed.png"
      alt="Khetify Logo"
      loading="lazy"
      className="h-12 w-12 mr-4"
    />
    <div>
      <span className="font-bold text-3xl text-green-1000">Khetify</span>
      <p className="text-base text-green-500 font-medium ">Your Farm Genie</p>
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
}) => {
  const [isOpen, setIsOpen] = useState(false);
  let timeout: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(timeout); // Clear any existing timeout
    setIsOpen(true); // Open the dropdown
  };

  const handleMouseLeave = () => {
    timeout = setTimeout(() => {
      setIsOpen(false); // Close the dropdown after 2 seconds
    }, 400);
  };

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="text-green-500 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-600 flex items-center hover:scale-105">
        {title}
        <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-600 group-hover:rotate-180" />
      </button>
      {isOpen && (
        <div
          className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border z-50 
          opacity-100 scale-100 pointer-events-auto transition-all duration-600 ease-out"
        >
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.to || "#"}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 transition-colors duration-600"
              onClick={link.onClick}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

// Desktop Navigation Component
const DesktopNavigation = ({
  scrollToContact,
}: {
  scrollToContact: () => void;
}) => (
  <div className="hidden md:block">
    <div className="ml-10 flex items-baseline space-x-9">
      {/* Home */}
      <Link
        to="/home#"
        className="text-green-500 hover:text-green-600 hover:scale-105 transition-transform duration-300"
      >
        Home
      </Link>
      {/* About Us */}
      <Link
        to="/about"
        className="text-green-500 hover:text-green-600 hover:scale-105 transition-transform duration-300"
      >
        About Us
      </Link>
      {/* Careers */}
      <Link
        to="/careers"
        className="text-green-500 hover:text-green-600 hover:scale-105 transition-transform duration-300"
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
        className="text-green-500 hover:text-green-600 hover:scale-105 transition-transform duration-300"
      >
        Contact Us
      </Link>
      <span className=" flex gap-1 ">
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-green-400 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Signup
        </button>
        <button
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Login
        </button>
      </span>
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
    <nav className="fixed top-0 w-full bg-transparent backdrop-blur-sm border-b border-green-100 z-50">
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
