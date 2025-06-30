import { Mail, Phone, Linkedin, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link for routing

// FAQ Section Component
const FAQSection = () => (
  <div>
    <h3 className="text-xl font-bold mb-4">📖 FAQ</h3>
    <div className="space-y-2 text-sm">
      <p>
        <strong>Q: How do I book workers?</strong>
      </p>
      <p>A: Use our platform or WhatsApp support for instant booking.</p>
      <p>
        <strong>Q: Are workers verified?</strong>
      </p>
      <p>A: Yes, all workers are trained and background-verified.</p>
    </div>
  </div>
);

// Contact Section Component
const ContactSection = () => (
  <div>
    <h3 className="text-xl font-bold mb-4">Contact Us</h3>
    <div className="space-y-2">
      <div className="flex items-center">
        <Mail className="h-4 w-4 mr-2" />
        <span className="text-sm">agrilinkofficial04@gmail.com</span>
      </div>
      <div className="flex items-center">
        <Phone className="h-4 w-4 mr-2" />
        <span className="text-sm">9286158428</span>
      </div>
    </div>
  </div>
);

// Social Media Section Component
const SocialMediaSection = () => (
  <div>
    <h3 className="text-xl font-bold mb-4">🔗 Follow Us</h3>
    <div className="flex space-x-4">
      <a
        href="https://www.linkedin.com/company/agrilink-tech/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-green-300 transition-colors"
      >
        <Linkedin className="h-6 w-6" />
      </a>
      <a
        href="https://www.instagram.com/agri_link_?igsh=ZDV1ZHh1aHdva3Zp"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-green-300 transition-colors"
      >
        <Instagram className="h-6 w-6" />
      </a>
      <a href="#" className="hover:text-green-300 transition-colors">
        <Facebook className="h-6 w-6" />
      </a>
    </div>
  </div>
);

// Privacy Policy Section Component
const PrivacyPolicySection = () => (
  <div>
    <h4 className="font-bold mb-3">Privacy Policy</h4>
    <div className="text-sm space-y-2">
      <p>
        <strong>Data Collected:</strong> Personal info, usage data, location
        (with consent).
      </p>
      <p>
        <strong>Usage:</strong> Service bookings, workforce matching, AI tips,
        support.
      </p>
      <p>
        <strong>Sharing:</strong> Only with verified partners, not sold/rented.
      </p>
      <p>
        <strong>Security:</strong> Encrypted storage and transmission.
      </p>
    </div>
  </div>
);

// Main Footer Component
const HomeFooter = () => {
  return (
    <footer id="contact" className="py-16 bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Render FAQ Section */}
          <FAQSection />

          {/* Render Contact Section */}
          <ContactSection />

          {/* Render Social Media Section */}
          <SocialMediaSection />
        </div>

        {/* Render Privacy Policy Section */}
        <div className="mt-12 pt-8 border-t border-green-700">
          <div className="grid grid-cols-1 gap-8">
            <PrivacyPolicySection />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-4 border-t border-green-700 text-center text-sm">
          <p>&copy; 2025 Khetify. All rights reserved.</p>
          <Link to="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
