import { motion } from "framer-motion";
import { Toaster } from "sonner";
import { ArrowRight } from "lucide-react";
import { Clock, Calendar } from "iconsax-reactjs";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Suspense } from "react";
import { BackgroundBoxesLayout } from "@/layouts/styled-layouts/boxes-bg-layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useGetBlogPostsQuery } from "@/store/api/blogApi";

const BlogPage = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ar" ? "ar" : "en";
  const { data: blogPosts = [], isLoading, error } = useGetBlogPostsQuery(lang);

  const featuredPost =
    blogPosts.find((post) => post.is_featured && post.lang === lang) ||
    blogPosts.find((post) => post.lang === lang) ||
    blogPosts[0];

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
          {isLoading && (
            <div className="text-center py-12">
              <div className="text-slate-600">{t("loading")}</div>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <div className="text-red-600">Error loading posts</div>
            </div>
          )}

          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <div className="relative md:rounded-2xl rounded-xl p-4 text-white overflow-hidden h-[400px]">
                {/* Full Size Background Image */}
                <img
                  src={featuredPost.image || "/images/blogs/blog-1.jpeg"}
                  className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-cover rounded-xl"
                />

                {/* Dark Overlay for Content */}
                <div className="absolute inset-4 ltr:bg-gradient-to-r rtl:bg-gradient-to-l from-black/70 via-black/30 to-transparent rounded-xl" />

                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex-1" />
                  <div className="p-4">
                    <Badge className="mb-3 bg-white/20 text-white border-white/30 backdrop-blur-sm text-xs">
                      {lang === "ar" ? "مميز" : "Featured"}
                    </Badge>
                    <h2 className="text-base md:text-xl lg:text-3xl font-bold mb-2 md:mb-4 leading-tight">
                      {featuredPost.title.split(" ").length > 8
                        ? featuredPost.title.split(" ").slice(0, 8).join(" ") +
                          "..."
                        : featuredPost.title}
                    </h2>
                    <p className="text-white/90 text-xs md:text-lg mb-4 md:mb-6 max-w-2xl">
                      {featuredPost.excerpt.length > 120
                        ? featuredPost.excerpt.substring(0, 120) + "..."
                        : featuredPost.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 md:gap-4 text-white/80 mb-4 md:mb-6">
                      <div className="flex items-center gap-1 md:gap-2 font-bold">
                        <img
                          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                            featuredPost.author
                          )}&size=24&background=random`}
                          alt={featuredPost.author}
                          className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-white/30"
                        />
                        <span className="text-xs md:text-base">
                          {featuredPost.author}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm">
                        {/* <Clock className="w-3 h-3 md:w-4 md:h-4" /> */}
                        <Clock
                          size="32"
                          color="#fff"
                          variant="Bold"
                          className="w-3 h-3 md:w-4 md:h-4"
                        />
                        <span>{featuredPost.read_time}</span>
                      </div>
                      <div className="hidden md:flex items-center gap-2 text-sm">
                        <Calendar
                          size="32"
                          color="#fff"
                          variant="Bold"
                          className="w-3 h-3 md:w-4 md:h-4"
                        />
                        <span>
                          {new Date(featuredPost.created_at).toLocaleDateString(
                            lang
                          )}
                        </span>
                      </div>
                    </div>
                    <Button
                      asChild
                      className="bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm text-xs md:text-sm"
                      size="sm"
                    >
                      <a href={`/blog/${featuredPost.slug}`}>
                        {lang === "ar" ? "اقرأ" : "Read"}{" "}
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2 rtl:rotate-[180deg] ltr:rotate-[0deg]" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* All Posts Grid */}
          {blogPosts.filter((post) => !post.is_featured && post.lang === lang)
            .length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
              style={{
                background:
                  "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(99, 102, 241, 0.15) 50%, rgba(79, 70, 229, 0.1) 100%)",
              }}
            >
              {blogPosts
                .filter((post) => !post.is_featured && post.lang === lang)
                .map((post) => (
                  <div
                    key={post.id}
                    className="relative rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 h-80"
                  >
                    {/* Full Size Background Image */}
                    <img
                      src={post.image || "/images/blogs/blog-1.jpeg"}
                      className="absolute inset-0 w-full h-full object-cover rounded-xl"
                    />

                    {/* Dark Overlay for Content */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-xl" />

                    <div className="relative z-10 h-full flex flex-col">
                      <div className="flex-1" />
                      <div className="p-4">
                        <Badge className="mb-2 bg-white/20 text-white border-white/30 backdrop-blur-sm text-xs">
                          {post.category}
                        </Badge>
                        <h3 className="text-sm md:text-xl font-bold mb-2 md:mb-3 text-white leading-tight">
                          {post.title.split(" ").length > 6
                            ? post.title.split(" ").slice(0, 6).join(" ") +
                              "..."
                            : post.title}
                        </h3>
                        <p className="text-white/80 mb-3 md:mb-4 line-clamp-2 md:line-clamp-3 text-xs md:text-sm">
                          {post.excerpt.length > 80
                            ? post.excerpt.substring(0, 80) + "..."
                            : post.excerpt}
                        </p>
                        <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm text-white/70 mb-3 md:mb-4">
                          <div className="flex items-center gap-1 md:gap-2">
                            <img
                              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                                post.author
                              )}&size=20&background=random`}
                              alt={post.author}
                              className="w-4 h-4 md:w-6 md:h-6 rounded-full"
                            />
                            <span className="truncate">{post.author}</span>
                          </div>
                          <span className="hidden md:inline">
                            {new Date(post.created_at).toLocaleDateString(lang)}
                          </span>
                          <span>{post.read_time}</span>
                        </div>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="bg-white/20 border-white/30 text-white hover:bg-white/30 text-xs md:text-sm"
                        >
                          <a href={`/blog/${post.slug}`}>
                            {lang === "ar" ? "اقرأ" : "Read"}
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </motion.div>
          )}
        </div>
      </section>
      <Toaster position="top-right" />
    </>
  );
};

export default BlogPage;
