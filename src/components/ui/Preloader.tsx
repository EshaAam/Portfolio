"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";
import "./Preloader.css";

/**
 * Brief intro loader. Leaves as soon as the page has loaded
 * (min 600ms so it doesn't flash, max 2s so it never blocks).
 */
export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const start = performance.now();
    let timer: ReturnType<typeof setTimeout>;

    const finish = () => {
      const remaining = Math.max(0, 600 - (performance.now() - start));
      timer = setTimeout(() => setLoading(false), remaining);
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    const cap = setTimeout(() => setLoading(false), 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(cap);
      window.removeEventListener("load", finish);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: EASE_OUT } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
        >
          <div className="loader">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="circle">
                <div className="dot" />
                <div className="outline" />
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
