import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import MainLayout from "./layout/MainLayout";

// Pages Lazy Loaded for optimal initial bundle performance
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Gallery = lazy(() => import("./Pages/Gallery"));
const Blog = lazy(() => import("./Pages/Blog"));
const Contact = lazy(() => import("./Pages/Contact"));
const DestinationWedding = lazy(() => import("./Pages/DestinationWedding"));
const ServiceDetails = lazy(() => import("./Pages/ServiceDetails"));

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full gap-4">
      <div className="relative flex items-center justify-center">
        <motion.div
          className="w-16 h-16 rounded-none border-4 border-t-[#ed1968] border-r-transparent border-b-[#650a34] border-l-transparent"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 0.9,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute w-10 h-10 rounded-none bg-gradient-to-r from-[#650a34] to-[#ed1968] blur-md opacity-40"
          animate={{ scale: [0.8, 1.2, 0.8] }}
          transition={{
            repeat: Infinity,
            duration: 1.4,
            ease: "easeInOut",
          }}
        />
      </div>
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#650a34]">
        Loading...
      </span>
    </div>
  );
};

// Router defined outside component render cycle for maximum performance
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <MainLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "destination-wedding",
        element: (
          <Suspense fallback={<Loader />}>
            <DestinationWedding />
          </Suspense>
        ),
      },
      {
        path: "gallery",
        element: (
          <Suspense fallback={<Loader />}>
            <Gallery />
          </Suspense>
        ),
      },
      {
        path: "blog",
        element: (
          <Suspense fallback={<Loader />}>
            <Blog />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "services/:slug",
        element: (
          <Suspense fallback={<Loader />}>
            <ServiceDetails />
          </Suspense>
        ),
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
