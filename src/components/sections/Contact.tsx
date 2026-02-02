"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { GitHubActivity } from "@/components/ui/GitHubActivity";
import { fadeInUp, buttonVariants, staggerContainer } from "@/lib/motion";
import { SOCIAL_LINKS, PERSONAL_INFO } from "@/lib/constants";

// Icon mapping for social links
const iconMap = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
};

/**
 * Contact section - Premium contact form with animated elements
 * Features glassmorphism design with GitHub activity calendar
 */
export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - replace with actual submission logic
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Open mailto with form data
    const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(`From: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`)}`;
    window.location.href = mailtoLink;
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <SectionWrapper id="contact" className="flex items-center">
      <div className="max-w-5xl mx-auto w-full py-20">
        <SectionHeader
          title="Get In Touch"
          subtitle="Have a project in mind? Let's build something amazing together."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-5 gap-12 items-start"
        >
          {/* Left side - Contact info */}
          <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Let&apos;s connect</h3>
              <p className="text-foreground-muted leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of something great.
              </p>
            </div>

            {/* Quick contact */}
            <div className="space-y-4">
              <motion.a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-surface/50 border border-white/5 hover:border-accent/30 transition-all group"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted">Email me at</p>
                  <p className="text-foreground font-medium">{PERSONAL_INFO.email}</p>
                </div>
              </motion.a>
            </div>

            {/* Social links */}
            <div className="space-y-3">
              <p className="text-sm text-muted uppercase tracking-wider">Find me on</p>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map((link) => {
                  const IconComponent = iconMap[link.icon as keyof typeof iconMap] || Mail;
                  
                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="p-3 rounded-xl bg-surface/50 border border-white/5 text-foreground-muted
                                 hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all"
                      aria-label={link.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Location */}
            {/* <p className="text-muted text-sm">
              📍 Based in {PERSONAL_INFO.location}
            </p> */}
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div variants={fadeInUp} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="relative">
              {/* Glassmorphism card */}
              <div className="relative p-8 rounded-2xl overflow-hidden">
                {/* Background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-surface/80 via-surface/60 to-surface/80 backdrop-blur-xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-indigo-500/5" />
                <div className="absolute inset-[1px] rounded-2xl border border-white/10" />
                
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(168,85,247,0.1)_60deg,transparent_120deg)] animate-[spin_8s_linear_infinite]" />
                </div>

                {/* Form content */}
                <div className="relative space-y-6">
                  {/* Name & Email row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-muted uppercase tracking-wider">Name</label>
                      <div className={`relative transition-all duration-300 ${focusedField === 'name' ? 'scale-[1.02]' : ''}`}>
                        <input
                          type="text"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Your name"
                          required
                          className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:bg-background/80 transition-all"
                        />
                        {focusedField === 'name' && (
                          <motion.div
                            layoutId="focus-glow"
                            className="absolute inset-0 -z-10 bg-accent/10 blur-xl rounded-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-muted uppercase tracking-wider">Email</label>
                      <div className={`relative transition-all duration-300 ${focusedField === 'email' ? 'scale-[1.02]' : ''}`}>
                        <input
                          type="email"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="your@email.com"
                          required
                          className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:bg-background/80 transition-all"
                        />
                        {focusedField === 'email' && (
                          <motion.div
                            layoutId="focus-glow"
                            className="absolute inset-0 -z-10 bg-accent/10 blur-xl rounded-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-muted uppercase tracking-wider">Subject</label>
                    <div className={`relative transition-all duration-300 ${focusedField === 'subject' ? 'scale-[1.01]' : ''}`}>
                      <input
                        type="text"
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Collaboration, inquiry, or just saying hello"
                        required
                        className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:bg-background/80 transition-all"
                      />
                      {focusedField === 'subject' && (
                        <motion.div
                          layoutId="focus-glow"
                          className="absolute inset-0 -z-10 bg-accent/10 blur-xl rounded-lg"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-muted uppercase tracking-wider">Message</label>
                    <div className={`relative transition-all duration-300 ${focusedField === 'message' ? 'scale-[1.005]' : ''}`}>
                      <textarea
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Share your thoughts, ideas, or project details..."
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:bg-background/80 transition-all resize-none"
                      />
                      {focusedField === 'message' && (
                        <motion.div
                          layoutId="focus-glow"
                          className="absolute inset-0 -z-10 bg-accent/10 blur-xl rounded-lg"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="relative w-full group overflow-hidden"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {/* Button background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent via-purple-500 to-indigo-500 rounded-lg" />
                    <div className="absolute inset-0 bg-gradient-to-r from-accent via-purple-500 to-indigo-500 rounded-lg blur-lg opacity-50 group-hover:opacity-70 transition-opacity" />
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>

                    {/* Button content */}
                    <div className="relative px-6 py-4 flex items-center justify-center gap-3 text-white font-semibold">
                      {isSubmitted ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          Message Sent!
                        </>
                      ) : isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </div>
                  </motion.button>
                </div>
              </div>
            </form>
          </motion.div>
        </motion.div>

        {/* GitHub Activity Calendar */}
        <GitHubActivity />
      </div>
    </SectionWrapper>
  );
}
