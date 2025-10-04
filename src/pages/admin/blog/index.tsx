import { motion } from "framer-motion";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  useGetBlogPostsQuery,
  useDeleteBlogPostMutation,
} from "@/store/api/blogApi";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AdminNav from "@/components/admin/AdminNav";

const AdminBlogList = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ar" ? "ar" : "en";
  const { data: posts = [], isLoading } = useGetBlogPostsQuery(lang);
  const [deleteBlogPost] = useDeleteBlogPostMutation();

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this post?")) {
      await deleteBlogPost(id);
    }
  };

  if (isLoading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <AdminNav>
      <div className="p-8 mt-[8rem]">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Blog Posts</h1>
          <div className="flex gap-2">
            <Button asChild variant="outline">
              <Link to="/admin/blog/test">Test API</Link>
            </Button>
            <Button asChild>
              <Link to="/admin/blog/create">
                <Plus className="w-4 h-4 mr-2" />
                Create Post
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-6">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-md p-6 border"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>By {post.author}</span>
                    <span>
                      {new Date(post.created_at).toLocaleDateString()}
                    </span>
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                </div>
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-24 h-24 object-cover rounded-lg ml-4"
                  />
                )}
              </div>

              <div className="flex gap-2">
                <Button asChild variant="outline" size="sm">
                  <Link to={`/blog/${post.slug}`}>
                    <Eye className="w-4 h-4 mr-1" />
                    View
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link to={`/admin/blog/edit/${post.id}`}>
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </Link>
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(post.id)}
                >
                  <Trash2 className="w-4 h-4 mr-1" />
                  Delete
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AdminNav>
  );
};

export default AdminBlogList;
