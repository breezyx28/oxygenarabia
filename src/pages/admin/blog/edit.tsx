import { useState, useEffect, Suspense } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  useGetBlogPostsQuery,
  useUpdateBlogPostMutation,
} from "@/store/api/blogApi";
import AdminNav from "@/components/admin/AdminNav";

const EditBlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: posts = [], isLoading: isLoadingPost } =
    useGetBlogPostsQuery("en");
  const post = posts.find((p) => p.id === Number(id));
  const [updatePost, { isLoading }] = useUpdateBlogPostMutation();

  const [formData, setFormData] = useState({
    title: "",
    ar_title: "",
    excerpt: "",
    ar_excerpt: "",
    content: "",
    ar_content: "",
    author: "",
    category: "",
    ar_category: "",
    read_time: "",
  });

  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    if (post) {
      setFormData({
        title: post.title,
        ar_title: post.title,
        excerpt: post.excerpt,
        ar_excerpt: post.excerpt,
        content: post.content,
        ar_content: post.content,
        author: post.author,
        category: post.category,
        ar_category: post.category,
        read_time: post.read_time,
      });
    }
  }, [post]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    data.append("_method", "PUT");
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    if (image) {
      data.append("image", image);
    }

    try {
      await updatePost({ id: Number(id), data }).unwrap();
      navigate("/admin/blog");
    } catch (error) {
      console.error("Failed to update post:", error);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isLoadingPost) {
    return <div className="p-8">Loading...</div>;
  }

  if (!post) {
    return <div className="p-8">Post not found</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdminNav>
        <div className="p-8 max-w-4xl mx-auto mt-[8rem]">
          <h1 className="text-3xl font-bold mb-8">Edit Blog Post</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="title">Title (English)</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleChange("title", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="title_ar">Title (Arabic)</Label>
                <Input
                  id="title_ar"
                  value={formData.ar_title}
                  onChange={(e) => handleChange("ar_title", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="excerpt">Excerpt (English)</Label>
                <Textarea
                  id="excerpt"
                  value={formData.excerpt}
                  onChange={(e) => handleChange("excerpt", e.target.value)}
                  rows={3}
                  required
                />
              </div>
              <div>
                <Label htmlFor="excerpt_ar">Excerpt (Arabic)</Label>
                <Textarea
                  id="excerpt_ar"
                  value={formData.ar_excerpt}
                  onChange={(e) => handleChange("ar_excerpt", e.target.value)}
                  rows={3}
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="content">Content (English)</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => handleChange("content", e.target.value)}
                  rows={10}
                  required
                />
              </div>
              <div>
                <Label htmlFor="content_ar">Content (Arabic)</Label>
                <Textarea
                  id="content_ar"
                  value={formData.ar_content}
                  onChange={(e) => handleChange("ar_content", e.target.value)}
                  rows={10}
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <Label htmlFor="author">Author</Label>
                <Input
                  id="author"
                  value={formData.author}
                  onChange={(e) => handleChange("author", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="category">Category (English)</Label>
                <Input
                  id="category"
                  value={formData.category}
                  onChange={(e) => handleChange("category", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="category_ar">Category (Arabic)</Label>
                <Input
                  id="category_ar"
                  value={formData.ar_category}
                  onChange={(e) => handleChange("ar_category", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="read_time">Read Time</Label>
                <Input
                  id="read_time"
                  value={formData.read_time}
                  onChange={(e) => handleChange("read_time", e.target.value)}
                  placeholder="e.g., 5 min read"
                  required
                />
              </div>
              <div>
                <Label htmlFor="image">Featured Image</Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files?.[0] || null)}
                />
                {post.image && (
                  <div className="mt-2">
                    <img
                      src={post.image}
                      alt="Current"
                      className="w-32 h-32 object-cover rounded"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-4">
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Updating..." : "Update Post"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/admin/blog")}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </AdminNav>
    </Suspense>
  );
};

export default EditBlogPost;
