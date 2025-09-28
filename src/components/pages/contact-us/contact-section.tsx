import React from "react";
import { motion } from "motion/react";
import { ContactForm } from "./contact-form";
import { ContactInfo } from "./contact-info";
import { FloatingShapes } from "./floating-shapes";
import { Toaster } from "sonner";
import { PhoneCall } from "lucide-react";
import { useTranslation } from "react-i18next";

export const ContactSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  return (
    <section className="relative section-container relative min-h-screen overflow-hidden">
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
              <span className="text-sm font-medium">{t('contactSection.badge')}</span>
            </motion.div>
          </motion.h2>
          <motion.p
            className="text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t('contactSection.description')}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ContactInfo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
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
