"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Eye, EyeOff, Mail, Phone, Github, Linkedin } from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { SpaceButton } from "@/components/ui/SpaceButton";
import { fadeInUp } from "@/lib/motion";
import { PERSONAL_INFO } from "@/lib/constants";

/**
 * Resume section with toggleable HTML resume view
 * Features a "Show Resume" button that reveals the full resume
 * Includes download option for PDF version
 */
export function Resume() {
  const [showResume, setShowResume] = useState(false);

  return (
    <SectionWrapper id="resume" className="flex items-center">
      <div className="max-w-6xl mx-auto w-full py-20">
        <SectionHeader
          title="Resume"
          subtitle="View my professional experience and qualifications"
        />

        {/* Action Buttons */}
        <motion.div
          {...fadeInUp}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          <SpaceButton onClick={() => setShowResume(!showResume)}>
            {showResume ? (
              <>
                <EyeOff className="w-4 h-4" />
                Hide Resume
              </>
            ) : (
              <>
                <Eye className="w-4 h-4" />
                Show Resume
              </>
            )}
          </SpaceButton>

          <a
            href={PERSONAL_INFO.resumeUrl}
            download
            className="inline-flex items-center justify-center gap-2 border-2 border-purple-400 px-6 py-3 text-purple-400 text-sm font-semibold rounded-lg bg-transparent hover:bg-purple-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(217,176,255,0.3)] hover:shadow-[0_0_30px_rgba(217,176,255,0.5)]"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </motion.div>

        {/* Resume Content - Toggleable */}
        <AnimatePresence>
          {showResume && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="bg-[#fafafa] text-gray-800 rounded-xl shadow-2xl max-w-4xl mx-auto overflow-hidden">
                {/* Resume Header */}
                <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white p-8 text-center">
                  <h1 className="text-4xl font-bold mb-2">Ekramul Esham</h1>
                  <p className="text-gray-300 mb-4">Dhaka, Bangladesh</p>
                  
                  <div className="flex flex-wrap justify-center gap-4 text-sm">
                    <a href="mailto:ekramul.esham@gmail.com" className="flex items-center gap-2 hover:text-purple-300 transition-colors">
                      <Mail className="w-4 h-4" />
                      ekramul.esham@gmail.com
                    </a>
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      +880 1638 802972
                    </span>
                    <a href="https://www.linkedin.com/in/ekramul-esham-293a2829b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-purple-300 transition-colors">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                    <a href="https://github.com/EshaAam" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-purple-300 transition-colors">
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Resume Body */}
                <div className="p-8 space-y-6">
                  {/* Skills */}
                  <section>
                    <h2 className="text-lg font-bold text-slate-800 border-b-2 border-slate-300 pb-2 mb-4">
                      Skills
                    </h2>
                    <div className="grid gap-2 text-sm">
                      <div className="flex">
                        <span className="font-semibold text-slate-700 w-32 shrink-0">Languages</span>
                        <span className="text-gray-600">C, C++, Java, JavaScript, TypeScript, PHP</span>
                      </div>
                      <div className="flex">
                        <span className="font-semibold text-slate-700 w-32 shrink-0">Frameworks</span>
                        <span className="text-gray-600">React.js, Next.js, Node.js, Express.js, Laravel, Tailwind CSS, Bootstrap</span>
                      </div>
                      <div className="flex">
                        <span className="font-semibold text-slate-700 w-32 shrink-0">Databases</span>
                        <span className="text-gray-600">MySQL, MongoDB, PostgreSQL, Firebase</span>
                      </div>
                      <div className="flex">
                        <span className="font-semibold text-slate-700 w-32 shrink-0">Cloud</span>
                        <span className="text-gray-600">Microsoft Azure</span>
                      </div>
                      <div className="flex">
                        <span className="font-semibold text-slate-700 w-32 shrink-0">Tools</span>
                        <span className="text-gray-600">Git, GitHub, VS Code, Visual Studio, IntelliJ IDEA</span>
                      </div>
                      <div className="flex">
                        <span className="font-semibold text-slate-700 w-32 shrink-0">Concepts</span>
                        <span className="text-gray-600">OOP, SOLID Principles, Design Patterns, REST APIs, Web Frameworks</span>
                      </div>
                      <div className="flex">
                        <span className="font-semibold text-slate-700 w-32 shrink-0">Data Analysis</span>
                        <span className="text-gray-600">Pandas, NumPy, Model Evaluation</span>
                      </div>
                    </div>
                  </section>

                  {/* Projects */}
                  <section>
                    <h2 className="text-lg font-bold text-slate-800 border-b-2 border-slate-300 pb-2 mb-4">
                      Projects
                    </h2>
                    
                    <div className="space-y-5">
                      {/* E-Blog */}
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-semibold text-slate-800">E-Blog - Personal Blogging Platform</h3>
                          <a href="https://github.com/EshaAam" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">GitHub</a>
                        </div>
                        <p className="text-sm text-blue-600 italic mb-2">MongoDB, Express.js, React.js, Node.js, Clerk Auth, Tailwind CSS</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                          <li>Built a full-stack blogging platform with user authentication, CRUD operations, and favorite management.</li>
                          <li>Implemented Clerk authentication (email, passkey, Google) with protected user and admin routes.</li>
                          <li>Developed an admin dashboard for role-based content moderation and management.</li>
                        </ul>
                      </div>

                      {/* VibeShopping */}
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-semibold text-slate-800">VibeShopping - E-Commerce Platform <span className="text-gray-500 font-normal">(In Progress)</span></h3>
                          <a href="https://github.com/EshaAam" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">GitHub</a>
                        </div>
                        <p className="text-sm text-blue-600 italic mb-2">Next.js, TypeScript, PostgreSQL, Prisma, ShadCN UI</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                          <li>Developing a modern e-commerce platform with product listings, cart management, and admin controls.</li>
                          <li>Implementing search, filtering, authentication, and secure payment workflows.</li>
                          <li>Built with Next.js 15 and ShadCN UI; continuously deployed on Vercel.</li>
                        </ul>
                      </div>

                      {/* GadgetMart */}
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-semibold text-slate-800">GadgetMart - Multi-Vendor E-Commerce Platform <span className="text-gray-500 font-normal">(Team Project)</span></h3>
                          <a href="https://github.com/EshaAam" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">GitHub</a>
                        </div>
                        <p className="text-sm text-blue-600 italic mb-2">MongoDB, Express.js, React.js, Node.js, Tailwind CSS</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                          <li>Built a multi-vendor marketplace allowing verified shops to list products and manage orders.</li>
                          <li>Enabled secure browsing, searching, and purchasing for customers.</li>
                          <li>Implemented role-based authentication and password strength validation.</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Education */}
                  <section>
                    <h2 className="text-lg font-bold text-slate-800 border-b-2 border-slate-300 pb-2 mb-4">
                      Education
                    </h2>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-semibold text-slate-800">Islamic University of Technology (IUT), OIC</h3>
                          <p className="text-gray-600 text-sm">Bachelor of Science in Software Engineering</p>
                        </div>
                        <div className="text-right text-sm">
                          <p className="text-blue-600">Gazipur, Bangladesh</p>
                          <p className="text-gray-500">Aug 2022 – Present</p>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-semibold text-slate-800">Rajuk Uttara Model College</h3>
                          <p className="text-gray-600 text-sm">Higher Secondary Certificate (HSC)</p>
                        </div>
                        <div className="text-right text-sm">
                          <p className="text-blue-600">Dhaka, Bangladesh</p>
                          <p className="text-gray-500">2019 – 2021</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Extra-Curricular Activities */}
                  <section>
                    <h2 className="text-lg font-bold text-slate-800 border-b-2 border-slate-300 pb-2 mb-4">
                      Extra-Curricular Activities
                    </h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                      <li><span className="font-semibold text-slate-700">CodeRush Fest 2024:</span> Managed and coordinated a university-level programming contest.</li>
                      <li><span className="font-semibold text-slate-700">Problem Solving:</span> Solved 200+ problems on Codeforces and LeetCode.</li>
                      <li><span className="font-semibold text-slate-700">Sports:</span> Participated in Football, Cricket, and Badminton; Champion at IUT Futsal Tournament.</li>
                    </ul>
                  </section>

                  {/* Certifications */}
                  <section>
                    <h2 className="text-lg font-bold text-slate-800 border-b-2 border-slate-300 pb-2 mb-4">
                      Certifications
                    </h2>
                    <ul className="list-disc list-inside text-gray-600 text-sm">
                      <li><span className="font-semibold text-slate-700">Next.js: Building Shopping Platform</span> — Udemy (2024)</li>
                    </ul>
                  </section>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
