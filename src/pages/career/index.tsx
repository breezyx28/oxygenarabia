import { motion } from "motion/react";
import { Toaster } from "sonner";
import { Briefcase, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FloatingShapes } from "@/components/pages/contact-us/floating-shapes";
import { Helmet } from "react-helmet-async";
import { Suspense } from "react";
import { BackgroundBoxesLayout } from "@/layouts/styled-layouts/boxes-bg-layout";
import { CareerForm } from "./career-form";

const Career = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <>
      <Helmet>
        <title>{t("careerSection.title")} - Oxygen</title>
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Suspense
          fallback={
            <div className="h-[60vh] bg-primary/10 flex items-center justify-center">
              <div className="text-white">{t("loading")}</div>
            </div>
          }
        >
          <BackgroundBoxesLayout
            title={t("careerSection.heroTitle")}
            subtitle={t("careerSection.heroSubtitle")}
            className="bg-gradient-to-br from-[#1f70c1] to-[#0f4d85]"
            containerClassName="bg-primary/10"
          />
        </Suspense>
      </div>

      {/* Main Content Section */}
      <div className="section-container">
        <section className="relative section-container relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 to-white">
          {/* Background decorative elements */}
          <FloatingShapes />

          {/* Main content */}
          <div className="z-10 container py-16 lg:py-24 px-6 mx-auto">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.h2
                className="mb-6 bg-gradient-to-r from-slate-900 via-[#1f70c1] to-slate-700 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div
                  className="inline-flex w-[fit-content] items-center space-x-2 bg-blue-50 text-primary px-6 py-3 rounded-full border border-blue-200 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Briefcase className="w-5 h-5 rtl:ml-2 ltr:mr-2" />
                  <span className="text-sm font-semibold">
                    {t("careerSection.badge")}
                  </span>
                </motion.div>
              </motion.h2>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {t("careerSection.mainTitle")}
              </motion.h1>

              <motion.p
                className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t("careerSection.description")}
              </motion.p>
            </motion.div>

            {/* Benefits Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            >
              <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-slate-200 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {t("careerSection.benefits.team.title")}
                </h3>
                <p className="text-slate-600 text-sm">
                  {t("careerSection.benefits.team.description")}
                </p>
              </div>

              <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-slate-200 shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {t("careerSection.benefits.growth.title")}
                </h3>
                <p className="text-slate-600 text-sm">
                  {t("careerSection.benefits.growth.description")}
                </p>
              </div>

              <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-slate-200 shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <motion.svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </motion.svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {t("careerSection.benefits.innovation.title")}
                </h3>
                <p className="text-slate-600 text-sm">
                  {t("careerSection.benefits.innovation.description")}
                </p>
              </div>
            </motion.div>

            {/* Application Form Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {t("careerSection.applyTitle")}
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {t("careerSection.applyDescription")}
              </p>
            </motion.div>

            {/* Career Form */}
            <div className="w-full flex justify-center">
              <motion.div
                initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="w-full max-w-4xl"
              >
                <CareerForm />
              </motion.div>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mt-16 pt-8 border-t border-slate-200"
            >
              <p className="text-slate-600 mb-4">
                {t("careerSection.footer.note")}
              </p>
              <p className="text-sm text-slate-500">
                {t("careerSection.footer.contact")}
              </p>
            </motion.div>
          </div>
          <Toaster position="top-right" />
        </section>
      </div>
    </>
  );
};

export default Career;
