import { motion } from "framer-motion";
import { Toaster } from "sonner";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Suspense } from "react";
import { BackgroundBoxesLayout } from "@/layouts/styled-layouts/boxes-bg-layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const blogPost = {
  title: {
    en: "How to Build a Smart Customer Experience in 2025: From Cloud Contact Centers to Hospitality Robots",
    ar: "كيف تبني تجربة عميل ذكية في 2025: من مركز الاتصال السحابي إلى روبوتات الضيافة",
  },
  excerpt: {
    en: "Discover a practical roadmap for transforming customer experience in 2025, from cloud contact centers to AI-powered hospitality robots. Learn how to unify channels, personalize service, and drive growth in the Saudi market.",
    ar: "اكتشف خارطة طريق عملية لتحويل تجربة العميل في 2025، من مراكز الاتصال السحابية إلى روبوتات الضيافة المدعومة بالذكاء الاصطناعي. تعرّف كيف توحّد القنوات وتخصص الخدمة وتحقق النمو في السوق السعودي.",
  },
  author: "Mohamed Al'Amri",
  date: new Date().toISOString(),
  readTime: "7 min read",
  slug: "smart-customer-experience-2025",
};

const BlogPage = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ar" ? "ar" : "en";

  return (
    <>
      <Helmet>
        <title>{t("blog.title")} - Oxygen</title>
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <Suspense
          fallback={
            <div className="h-[50vh] bg-primary/10 flex items-center justify-center">
              <div className="text-white">{t("loading")}</div>
            </div>
          }
        >
          <BackgroundBoxesLayout
            title={t("blog.title")}
            subtitle={t("blog.description")}
            className="bg-gradient-to-br from-[#1f70c1] to-[#0f4d85]"
            containerClassName="bg-primary/10"
          />
        </Suspense>
      </div>

      {/* Blog Content Section */}
      <section className="section-container py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container px-4 sm:px-6 mx-auto">
          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="relative bg-primary rounded-2xl p-8 text-white">
              <div className="relative">
                <Badge className="absolute right-[0.5rem] top-[0.5rem] bg-white text-primary border-none">
                  {lang === "ar" ? "مقال مميز" : "Featured"}
                </Badge>
                <img
                  src="/images/blogs/blog-1.jpeg"
                  className="w-full h-[200px] object-cover rounded-[16px] mb-6"
                />
              </div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                {blogPost.title[lang]}
              </h2>
              <p className="text-blue-100 text-lg mb-6 max-w-2xl">
                {blogPost.excerpt[lang]}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-blue-100 mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{blogPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(blogPost.date).toLocaleDateString(lang)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{blogPost.readTime}</span>
                </div>
              </div>
              <Button
                asChild
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                <a href={`/blog/${blogPost.slug}`}>
                  {lang === "ar" ? "اقرأ المزيد" : "Read More"}{" "}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <Toaster position="top-right" />
    </>
  );
};

export default BlogPage;
