
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import React, { Suspense } from "react";

const NewNavbar = React.lazy(() => import("./components/NewNavbar"));
const PartnerSection = React.lazy(() => import("./components/PartnerSection"));
const HeroSection = React.lazy(() => import("./components/HeroSection"));
const Testimonials = React.lazy(() => import("./components/Testimonials"));
const Services = React.lazy(() => import("./components/Services"));


import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";
import Farmers from "./components/farmers";
import ConsultancyServices from "./components/ConsultancyServices";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/farmers" element={<Farmers />} />
          <Route path="/consultancy" element={<ConsultancyServices/>} />
          
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
