import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageWrapper from "../scroll/PageWrapper";
import ScrollToTop from "../scroll/ScrollToTop";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import WhatsAppButton from "../whatsapp/WhatsAppButton";

const MainLayout = () => {
  const location = useLocation();
  const isFirstRender = useRef(true);

  // Track Meta Pixel PageView on client-side SPA route navigation
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "PageView");
    }
  }, [location.pathname, location.search]);

  return (
    <>
      <ScrollToTop/>      
      <Navbar />
      {/* Animated Page Content */}
      <main className="flex-grow w-full max-w-full mx-auto overflow-hidden">
        <AnimatePresence mode="wait">
          <PageWrapper key={location.pathname}>
            <Outlet />
          </PageWrapper>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default MainLayout;
