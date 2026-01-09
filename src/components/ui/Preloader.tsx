"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Preloader.css";

/**
 * Preloader component shown during initial page load
 * Fades out after content is ready
 */
export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Minimum display time for preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="preloader"
        >
          <div className="loader">
            <div className="circle">
              <div className="dot"></div>
              <div className="outline"></div>
            </div>
            <div className="circle">
              <div className="dot"></div>
              <div className="outline"></div>
            </div>
            <div className="circle">
              <div className="dot"></div>
              <div className="outline"></div>
            </div>
            <div className="circle">
              <div className="dot"></div>
              <div className="outline"></div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
