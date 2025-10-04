import { motion } from "framer-motion";
import { Toaster } from "sonner";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
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
  
  const featuredPost = blogPosts.find(post => post.is_featured && post.lang === lang) || blogPosts.find(post => post.lang === lang) || blogPosts[0];

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
              <div className="relative bg-primary md:rounded-2xl rounded-xl md:p-8 p-4 text-white">
                <div className="relative">
                  <Badge className="absolute right-[0.5rem] top-[0.5rem] bg-white text-primary border-none">
                    {lang === "ar" ? "مقال مميز" : "Featured"}
                  </Badge>
                  <img
                    src={featuredPost.image || "/images/blogs/blog-1.jpeg"}
                    className="w-full h-[200px] object-cover rounded-[16px] mb-6"
                  />
                </div>
                <h2 className="text-lg md:text-xl lg:text-3xl font-bold mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-blue-100 md:text-lg text-sm mb-6 max-w-2xl">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-blue-100 mb-6">
                  <div className="flex items-center gap-2 font-bold">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(featuredPost.created_at).toLocaleDateString(lang)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.read_time}</span>
                  </div>
                </div>
                <Button
                  asChild
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  <a href={`/blog/${featuredPost.slug}`}>
                    {lang === "ar" ? "اقرأ المزيد" : "Read More"}{" "}
                    <ArrowRight className="w-4 h-4 ml-2 rtl:rotate-[180deg] ltr:rotate-[0deg]" />
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
          
          {/* All Posts Grid */}
          {blogPosts.filter(post => !post.is_featured && post.lang === lang).length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {blogPosts.filter(post => !post.is_featured && post.lang === lang).map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={post.image || "/images/blogs/blog-1.jpeg"}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <Badge className="mb-3 bg-blue-100 text-blue-700">
                      {post.category}
                    </Badge>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                      <span>{post.author}</span>
                      <span>{new Date(post.created_at).toLocaleDateString(lang)}</span>
                      <span>{post.read_time}</span>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <a href={`/blog/${post.slug}`}>
                        {lang === "ar" ? "اقرأ المزيد" : "Read More"}
                      </a>
                    </Button>
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
