import { useParams } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { blogs } from "../constants/blogsData"

const BlogPost = () => {
  const { slug } = useParams()
  const blog = blogs.find(b => b.slug === slug)

  if (!blog) {
    return (
      <section className="section-padding max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold">Blog not found</h1>
        <p className="text-gray-500 mt-2">
          The blog you are looking for does not exist.
        </p>
      </section>
    )
  }

  return (
    <>
      {/* ✅ SEO Meta Tags (Dynamic per blog) */}
      <Helmet>
        <title>{blog.title} | Marketing.thebuildlab</title>
        <meta
          name="description"
          content={blog.description || blog.excerpt || "Read the latest marketing insights from Marketing.thebuildlab."}
        />
        <meta
          name="keywords"
          content={blog.keywords || "digital marketing, SEO, AI tools, growth marketing"}
        />
        <link
          rel="canonical"
          href={`https://marketing.thebuildlab.in/blog/${blog.slug}`}
        />

        {/* Open Graph (WhatsApp / LinkedIn) */}
        <meta property="og:title" content={blog.title} />
        <meta
          property="og:description"
          content={blog.description || blog.excerpt}
        />
        <meta
          property="og:url"
          content={`https://marketing.thebuildlab.in/blog/${blog.slug}`}
        />
        <meta property="og:type" content="article" />

        {/* Article Meta */}
        <meta property="article:published_time" content={blog.date} />
        {blog.author && (
          <meta property="article:author" content={blog.author} />
        )}
      </Helmet>

      {/* ✅ Blog Content */}
      <section className="section-padding max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          {blog.title}
        </h1>

        <p className="text-gray-500 mb-8">
          {blog.date}
          {blog.author && ` • ${blog.author}`}
        </p>

        <article
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </section>
    </>
  )
}

export default BlogPost
