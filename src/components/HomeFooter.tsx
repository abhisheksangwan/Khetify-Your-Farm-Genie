import React from "react";

const MoreLinks = () => {
  const links = [
    { name: "FAQs", href: "/faqs" },
    { name: "Whatsapp Connect", href: "/whatsapp-connect" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <div>
      <h3 className="font-semibold mb-4">More Links</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="text-gray-700 hover:text-gray-900">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};


const Navigation = () => {
  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/Products" },
    { name: "Careers", href: "/Careers" },
    { name: "Contact Us", href: "/ContactUs" },
  ];

  return (
    <div>
      <h3 className="font-semibold mb-4">Navigation</h3>
      <ul className="space-y-2">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="text-gray-700 hover:text-gray-900">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SocialIcons = () => {
  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com", color: "text-blue-500" },
    {
      name: "Facebook",
      href: "https://facebook.com",
      color: "text-white bg-blue-700",
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      color: "text-purple-600 border border-purple-600",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      color: "text-blue-700 bg-blue-100",
    },
    {
      name: "YouTube",
      href: "https://youtube.com",
      color: "text-white bg-red-600",
    },
  ];

  return (
    <div>
      <h3 className="font-semibold mb-4">Connect with us</h3>
      <div className="flex space-x-3 mb-3">
        <a
          href="#"
          aria-label="Twitter"
          className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 text-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 10.36 10.36 0 01-3.29 1.26 4.51 4.51 0 00-7.69 4.11A12.8 12.8 0 013 4.15a4.48 4.48 0 001.39 6.03 4.48 4.48 0 01-2.05-.56v.06a4.52 4.52 0 003.61 4.42 4.52 4.52 0 01-2.04.08 4.51 4.51 0 004.21 3.14A9.05 9.05 0 013 19.54a12.87 12.87 0 006.94 2.03c8.33 0 12.89-6.92 12.89-12.9 0-.2 0-.39-.01-.58A9.18 9.18 0 0023 3z" />
          </svg>
        </a>
        <a
          href="#"
          aria-label="Facebook"
          className="bg-blue-700 hover:bg-blue-800 rounded-full p-2 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.92.001c-1.505 0-1.797.715-1.797 1.765v2.314h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.407 0 22.675 0z" />
          </svg>
        </a>
        <a
          href="#"
          aria-label="Instagram"
          className="bg-white hover:bg-gray-100 rounded-full p-2 text-purple-600 border border-purple-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm8.5 1.5h-8.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5zm-4.25 3a5.25 5.25 0 110 10.5 5.25 5.25 0 010-10.5zm0 1.5a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm4.75-.875a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z" />
          </svg>
        </a>
        <a
          href="#"
          aria-label="LinkedIn"
          className="bg-blue-100 hover:bg-blue-200 rounded-full p-2 text-blue-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4.98 3.5C4.98 4.88071 3.88071 6 2.5 6S0 4.88071 0 3.5 1.11929 1 2.5 1 4.98 2.11929 4.98 3.5zM0 8h5v16H0V8zm7.79 0h4.58v2.21h.06c.64-1.21 2.21-2.21 4.55-2.21 4.87 0 5.77 3.2 5.77 7.35V24h-5v-6.56c0-1.56-.03-3.57-2.18-3.57-2.18 0-2.51 1.7-2.51 3.45V24H7.79V8z" />
          </svg>
        </a>
        <a
          href="#"
          aria-label="YouTube"
          className="bg-red-600 hover:bg-red-700 rounded-full p-2 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19.615 3.184c-1.97-.13-9.842-.13-9.842-.13s-7.833 0-9.803.13c-1.882.125-1.875 1.313-1.875 4.41v4.812c0 3.094-.008 4.28 1.875 4.41 1.97.13 9.842.13 9.842.13s7.872 0 9.842-.13c1.882-.13 1.875-1.313 1.875-4.41v-4.812c0-3.095.006-4.284-1.875-4.41zM10.03 14.916v-6.148l5.15 3.074-5.15 3.074z" />
          </svg>
        </a>
      </div>
      <div className="flex items-center text-gray-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 mr-2"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18a2 2 0 002 2h16a2 2 0 002-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
        <a
          href="mailto:agrilinkofficial04@gmail.com"
          className="hover:text-gray-900"
        >
          agrilinkofficial04@gmail.com
        </a>
      </div>
    </div>
  );
};

const Footer = () => {
  const footerLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
    { name: "Responsible Disclosure", href: "/responsible-disclosure" },
  ];

  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-row  mt-px-1 items-center justify-start space-x-4">
            {/* Logo */}
            <div>
              <img
                src="public/lovable-uploads/logo-khetify_bg_removed.png"
                alt="Khetify Logo"
                loading="lazy"
                className="h-10 w-10 object-cover ml-px-1"
              />
            </div>
            <div
              className="w-40 h-auto select-none user-select-none flex flex-row items-center justify-start"
              aria-label="Khetify logo green text"
            >
              <svg
                width="160"
                height="72"
                viewBox="0 0 160 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                className="w-full h-auto"
              >
                <text
                  x="0"
                  y="38"
                  fill="#237334"
                  fontFamily="Arial, Helvetica, sans-serif"
                  fontWeight="700"
                  fontSize="36"
                >
                  Khetify
                </text>
                <text
                  x="0"
                  y="63"
                  fill="#237334"
                  fontFamily="Arial, Helvetica, sans-serif"
                  fontWeight="500"
                  fontSize="14"
                >
                  Your Farm Genie
                </text>
              </svg>
            </div>
          </div>

          <MoreLinks />
          <Navigation />
          <SocialIcons />
        </div>

        <hr className="my-10 border-gray-300" />
        <div className="flex flex-col sm:flex-row justify-center gap-x-4 text-sm text-gray-700 items-center space-y-2 sm:space-y-0">
          <span>Copyright @Khetify 2025</span>
          {footerLinks.map((link, index) => (
            <React.Fragment key={link.name}>
              {index > 0 && (
                <span
                  className="hidden sm:inline-block border-l border-gray-400 h-4"
                  aria-hidden="true"
                ></span>
              )}
              <a href={link.href} className="hover:underline">
                {link.name}
              </a>
            </React.Fragment>
          ))}
          <span
            className="hidden sm:inline-block border-l border-gray-400 h-4"
            aria-hidden="true"
          ></span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
