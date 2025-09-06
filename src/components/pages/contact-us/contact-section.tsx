import React from "react";
import { motion } from "motion/react";
import { ContactForm } from "./contact-form";
import { ContactInfo } from "./contact-info";
import { FloatingShapes } from "./floating-shapes";
import { Toaster } from "sonner";
import { Badge } from "@/components/ui/badge";
import { PhoneCall } from "lucide-react";

export const ContactSection: React.FC = () => {
  return (
    <section className="relative section-container relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 overflow-hidden">
      {/* Background decorative elements */}
      <FloatingShapes />

      {/* Main content */}
      <div className="z-10 container py-16 lg:py-24 px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="mb-4 bg-gradient-to-r from-slate-900 via-[#1f70c1] to-slate-700 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-flex w-[fit-content] items-center space-x-2 bg-blue-50 text-primary px-4 py-2 rounded-full border border-blue-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <PhoneCall className="w-4 h-4" />
              <span className="text-sm font-medium">Get In Touch</span>
            </motion.div>
          </motion.h2>
          <motion.p
            className="text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Ready to transform your ideas into reality? Let's discuss your next
            project and explore how our technology solutions can drive your
            business forward.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ContactInfo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
      <Toaster position="top-right" />
    </section>
  );
};
