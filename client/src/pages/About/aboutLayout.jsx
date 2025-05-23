// app/about/page.tsx or AboutLayout.tsx

"use client";
import { motion } from "framer-motion";
import { Leaf, Truck, ShieldCheck, Zap } from "lucide-react";

export default function AboutLayout() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col p-10 md:px-36 gap-10"
    >
      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col gap-7"
      >
        <h1 className="text-3xl md:text-5xl font-semibold text-green-700">
          About Scrap Collector
        </h1>
        <p className="text-gray-600 text-xl">
          Welcome to <strong>Scrap Collector</strong>, your trusted partner in sustainable waste
          management. We’re revolutionizing how scrap is collected, processed, and recycled—making
          it faster, smarter, and greener for both individuals and businesses.
        </p>
      </motion.div>

      {/* Vision */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col gap-5"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">🌱 Our Vision</h2>
        <p className="text-xl text-green-700">
          To build a cleaner, greener, and sustainable world by transforming waste management
          through innovation and eco-awareness.
        </p>
      </motion.div>

      {/* Mission */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col gap-5"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">🎯 Our Mission</h2>
        <p className="text-xl text-gray-700">
          To simplify scrap collection, promote recycling habits, and reduce environmental impact.
          We empower communities and businesses to contribute to a circular economy.
        </p>
      </motion.div>

      {/* Why Us Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col gap-7"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">✨ Why Scrap Collector?</h2>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
          {/* Who We Are */}
          <div className="flex flex-col p-8 bg-green-50 rounded-xl hover:shadow-2xl transition-shadow duration-300">
            <h3 className="font-bold text-xl flex items-center gap-2">
              <Leaf className="text-green-600" /> Who We Are?
            </h3>
            <p className="mt-3 text-gray-700">
              Founded with passion for sustainability, we bridge the gap between scrap generators
              and recyclers through a user-friendly platform for homes, industries, and businesses.
            </p>
          </div>

          {/* What We Do */}
          <div className="flex flex-col p-8 bg-white rounded-xl shadow-md hover:shadow-2xl transition duration-300">
            <h3 className="font-bold text-xl flex items-center gap-2">
              <Truck className="text-green-600" /> What We Do?
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-gray-700 text-base list-disc list-inside">
              <li>Doorstep Scrap Collection via easy scheduling</li>
              <li>Eco-Friendly Recycling methods</li>
              <li>Transparent Pricing & Real-Time Tracking</li>
              <li>Custom Solutions for Commercial Waste</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="flex flex-col p-8 bg-gray-100 rounded-xl hover:shadow-2xl transition duration-300">
            <h3 className="font-bold text-xl flex items-center gap-2">
              <ShieldCheck className="text-green-600" /> Why Choose Us?
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-gray-700 text-base list-disc list-inside">
              <li>⚡ Quick & Convenient Scrap Pickup</li>
              <li>🌍 Eco-Conscious Practices</li>
              <li>🔍 Transparent Valuations</li>
              <li>📱 App/Website Booking & Live Updates</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Final Call to Action */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mt-10 leading-relaxed"
      >
        Join us on our mission toward a <span className="text-green-600">Zero-Waste Future</span>.{" "}
        <br />
        Let’s turn scrap into opportunity for a{" "}
        <span className="bg-green-600 text-white px-3 py-1 rounded-md inline-block mt-2">
          Cleaner, Healthier Planet.
        </span>
      </motion.h2>
    </motion.div>
  );
}
