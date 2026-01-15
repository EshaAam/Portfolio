"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types";

interface StickyPreviewProps {
  activeProject: Project;
  activeIndex: number;
}

/**
 * Sticky left panel showing project preview with device frame
 * Features smooth crossfade animations on project change
 */
export function StickyPreview({ activeProject, activeIndex }: StickyPreviewProps) {
  return (
    <div className="hidden lg:block lg:w-[45%] xl:w-[50%]">
      <div className="sticky top-[20vh] h-[60vh] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-2xl"
          >
            {/* Laptop Device Frame */}
            <div className="relative">
              {/* Screen bezel */}
              <div className="relative bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-t-xl pt-3 px-3 pb-0">
                {/* Camera dot */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-zinc-700" />
                
                {/* Screen */}
                <div className="relative aspect-[16/10] rounded-t-lg overflow-hidden bg-gradient-to-br from-zinc-900 to-black">
                  {/* Project Image or Gradient Fallback */}
                  {activeProject.image ? (
                    <motion.img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="w-full h-full object-cover object-top"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-accent/20 via-indigo-500/20 to-purple-600/20 flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-center px-8"
                      >
                        <div className="text-5xl mb-4 opacity-60">🚀</div>
                        <h3 className="text-xl font-semibold text-foreground/80 mb-2">
                          {activeProject.title.split(" - ")[0]}
                        </h3>
                        <p className="text-sm text-muted">
                          {activeProject.subtitle}
                        </p>
                      </motion.div>
                    </div>
                  )}
                  
                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                  
                  {/* Project subtitle overlay */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-4 left-4 right-4"
                  >
                    <p className="text-sm font-medium text-accent/90">
                      {activeProject.subtitle}
                    </p>
                  </motion.div>
                </div>
              </div>
              
              {/* Laptop base/keyboard */}
              <div className="relative h-4 bg-gradient-to-b from-zinc-700 to-zinc-800 rounded-b-lg">
                {/* Trackpad indent */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-zinc-600 rounded-b" />
              </div>
              
              {/* Reflection/Glow effect */}
              <div className="absolute -inset-4 bg-accent/5 blur-3xl rounded-full -z-10 opacity-50" />
            </div>

            {/* Project number indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-2"
            >
              <span className="text-6xl font-bold text-accent/20">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
