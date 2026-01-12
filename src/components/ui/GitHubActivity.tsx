"use client";

import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { fadeInUp } from "@/lib/motion";

/**
 * GitHub Activity Calendar Component
 * Displays a live, auto-updating GitHub contribution calendar
 * Styled to match the portfolio's dark theme with purple accents
 */
export function GitHubActivity() {
  // Custom purple color theme for the calendar
  const purpleTheme = {
    dark: [
      "#1a1a2e", // Level 0 - almost no activity
      "#4c1d95", // Level 1
      "#6d28d9", // Level 2
      "#8b5cf6", // Level 3
      "#a78bfa", // Level 4 - highest activity
    ],
  };

  // Custom block styling
  const customBlockStyle = {
    borderRadius: 3,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.2
      }}
      className="w-full mt-16 pt-12 border-t border-white/5"
    >
      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-xl font-semibold text-center mb-8"
      >
        Days I{" "}
        <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
          Code
        </span>
      </motion.h3>

      {/* Calendar Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex justify-center overflow-x-auto pb-4"
      >
        <div className="github-calendar-wrapper">
          <GitHubCalendar
            username="EshaAam"
            colorScheme="dark"
            theme={purpleTheme}
            blockSize={12}
            blockMargin={4}
            fontSize={12}
            style={customBlockStyle}
            labels={{
              totalCount: "{{count}} contributions in the last year",
            }}
          />
        </div>
      </motion.div>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex items-center justify-center gap-2 mt-6 text-sm text-muted"
      >
        <span>Less</span>
        <div className="flex gap-1">
          {purpleTheme.dark.map((color, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.05 }}
              whileHover={{ scale: 1.2 }}
              className="w-3 h-3 rounded-sm cursor-pointer transition-transform"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <span>More</span>
      </motion.div>
    </motion.div>
  );
}
