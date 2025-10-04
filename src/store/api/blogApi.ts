import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  slug: string;
  image: string | null;
  read_time: string;
  is_featured: boolean;
  is_published: boolean;
  created_at: string;
  updated_at: string;
  lang: string;
}

export interface BlogPostsResponse {
  current_page: number;
  data: BlogPost[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface CreateBlogPost {
  title: string;
  ar_title: string;
  excerpt: string;
  ar_excerpt: string;
  content: string;
  ar_content: string;
  author: string;
  image?: File;
  category: string;
  ar_category: string;
  read_time: string;
}

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cms-api.oxygenarabia.com/api/",
    prepareHeaders: (headers, { endpoint }) => {
      headers.set("Accept", "application/json");
      if (endpoint !== "createBlogPost" && endpoint !== "updateBlogPost") {
        headers.set("Content-Type", "application/json");
      }
      return headers;
    },
  }),
  tagTypes: ["BlogPost"],
  endpoints: (builder) => ({
    getBlogPosts: builder.query<BlogPost[], string>({
      query: (lang = "en") => `blog-posts?lang=${lang}`,
      providesTags: ["BlogPost"],
      transformResponse: (response: BlogPostsResponse) => response.data,
    }),
    getBlogPost: builder.query<BlogPost, string>({
      query: (slug) => `blog-posts/${slug}`,
      providesTags: (result, error, slug) => [{ type: "BlogPost", id: slug }],
    }),
    createBlogPost: builder.mutation<BlogPost, FormData>({
      query: (formData) => ({
        url: "blog-posts",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["BlogPost"],
    }),
    updateBlogPost: builder.mutation<BlogPost, { id: number; data: FormData }>({
      query: ({ id, data }) => ({
        url: `blog-posts/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["BlogPost"],
    }),
    deleteBlogPost: builder.mutation<void, number>({
      query: (id) => ({
        url: `blog-posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["BlogPost"],
    }),
  }),
});

export const {
  useGetBlogPostsQuery,
  useGetBlogPostQuery,
  useCreateBlogPostMutation,
  useUpdateBlogPostMutation,
  useDeleteBlogPostMutation,
} = blogApi;
