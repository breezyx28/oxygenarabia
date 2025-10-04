# Laravel Blog API Development Prompt

## Overview
Create a Laravel API for managing blog posts with full CRUD operations, image upload, and multilingual support (English/Arabic).

## Database Schema

### Migration: create_blog_posts_table
```php
Schema::create('blog_posts', function (Blueprint $table) {
    $table->id();
    $table->string('title');
    $table->string('title_ar');
    $table->text('excerpt');
    $table->text('excerpt_ar');
    $table->longText('content');
    $table->longText('content_ar');
    $table->string('author');
    $table->string('slug')->unique();
    $table->string('image')->nullable();
    $table->string('category');
    $table->string('category_ar');
    $table->string('read_time');
    $table->boolean('is_featured')->default(false);
    $table->boolean('is_published')->default(true);
    $table->timestamps();
});
```

## Model: BlogPost
```php
class BlogPost extends Model
{
    protected $fillable = [
        'title', 'title_ar', 'excerpt', 'excerpt_ar', 
        'content', 'content_ar', 'author', 'slug', 
        'image', 'category', 'category_ar', 'read_time',
        'is_featured', 'is_published'
    ];

    protected $casts = [
        'is_featured' => 'boolean',
        'is_published' => 'boolean',
    ];

    // Auto-generate slug from title
    protected static function boot()
    {
        parent::boot();
        static::creating(function ($post) {
            $post->slug = Str::slug($post->title);
        });
    }
}
```

## API Routes (api.php)
```php
Route::prefix('blog-posts')->group(function () {
    Route::get('/', [BlogPostController::class, 'index']);
    Route::get('/{slug}', [BlogPostController::class, 'show']);
    Route::post('/', [BlogPostController::class, 'store']);
    Route::put('/{id}', [BlogPostController::class, 'update']);
    Route::delete('/{id}', [BlogPostController::class, 'destroy']);
});
```

## Controller: BlogPostController

### Required Methods:
1. **index()** - Return all published posts, featured first
2. **show($slug)** - Return single post by slug
3. **store(Request $request)** - Create new post with image upload
4. **update(Request $request, $id)** - Update post with optional image
5. **destroy($id)** - Delete post and associated image

### Validation Rules:
```php
$rules = [
    'title' => 'required|string|max:255',
    'title_ar' => 'required|string|max:255',
    'excerpt' => 'required|string',
    'excerpt_ar' => 'required|string',
    'content' => 'required|string',
    'content_ar' => 'required|string',
    'author' => 'required|string|max:255',
    'category' => 'required|string|max:255',
    'category_ar' => 'required|string|max:255',
    'read_time' => 'required|string|max:50',
    'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048'
];
```

### Image Upload Logic:
- Store in `storage/app/public/blog-images/`
- Generate unique filename with timestamp
- Return full URL in API response
- Delete old image when updating

## CORS Configuration
Enable CORS for frontend domain in `config/cors.php`:
```php
'paths' => ['api/*'],
'allowed_origins' => ['http://localhost:5173'],
'allowed_methods' => ['*'],
'allowed_headers' => ['*'],
```

## Response Format
```json
{
  "id": 1,
  "title": "Post Title",
  "title_ar": "عنوان المقال",
  "excerpt": "Post excerpt...",
  "excerpt_ar": "مقتطف المقال...",
  "content": "Full content...",
  "content_ar": "المحتوى الكامل...",
  "author": "Author Name",
  "slug": "post-title",
  "image": "http://localhost:8000/storage/blog-images/image.jpg",
  "category": "Technology",
  "category_ar": "التقنية",
  "read_time": "5 min read",
  "is_featured": false,
  "is_published": true,
  "created_at": "2025-01-01T00:00:00.000000Z",
  "updated_at": "2025-01-01T00:00:00.000000Z"
}
```

## Seeder Data
Create sample blog posts with both English and Arabic content for testing.

## Additional Requirements:
1. Use Laravel's built-in image storage and validation
2. Implement proper error handling and status codes
3. Add pagination for index endpoint (15 posts per page)
4. Include search functionality by title/content
5. Add soft deletes for posts
6. Implement caching for better performance

## Testing Endpoints:
- GET `/api/blog-posts` - List all posts
- GET `/api/blog-posts/{slug}` - Get single post
- POST `/api/blog-posts` - Create post (with FormData for image)
- PUT `/api/blog-posts/{id}` - Update post
- DELETE `/api/blog-posts/{id}` - Delete post