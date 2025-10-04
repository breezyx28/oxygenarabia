import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useCreateBlogPostMutation } from "@/store/api/blogApi";
import AdminNav from "@/components/admin/AdminNav";

const CreateBlogPost = () => {
  const navigate = useNavigate();
  const [createPost, { data, isLoading }] = useCreateBlogPostMutation();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("formData: ", formData);

    const data = new FormData();

    for (let i in formData) {
      console.log("i: ", i);
      // @ts-ignore
      console.log("formData[i]: ", formData[i]);
      // @ts-ignore
      data.append(i, formData[i]);
    }

    if (image) {
      data.append("image", image);
    }

    try {
      await createPost(data).unwrap();
      navigate("/admin/blog");
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };

  React.useEffect(() => {
    if (data) {
      console.log("Created post data: ", data);
    }
  }, [data]);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <AdminNav>
      <div className="p-8 max-w-4xl mx-auto mt-[8rem]">
        <h1 className="text-3xl font-bold mb-8">Create New Blog Post</h1>

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
            </div>
          </div>

          <div className="flex gap-4">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Creating..." : "Create Post"}
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
  );
};

export default CreateBlogPost;
