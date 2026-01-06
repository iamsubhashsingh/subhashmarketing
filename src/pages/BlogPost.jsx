import { useParams } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
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
      {/* ✅ SEO Meta Tags (UNCHANGED) */}
      <Helmet>
        <title>{blog.title} | Marketing.thebuildlab</title>
        <meta
          name="description"
          content={
            blog.description ||
            blog.excerpt ||
            "Read the latest marketing insights from Marketing.thebuildlab."
          }
        />
        <meta
          name="keywords"
          content={
            blog.keywords ||
            "digital marketing, SEO, AI tools, growth marketing"
          }
        />
        <link
          rel="canonical"
          href={`https://marketing.thebuildlab.in/blogs/${blog.slug}`}
        />

        {/* Open Graph */}
        <meta property="og:title" content={blog.title} />
        <meta
          property="og:description"
          content={blog.description || blog.excerpt}
        />
        <meta
          property="og:url"
          content={`https://marketing.thebuildlab.in/blogs/${blog.slug}`}
        />
        <meta property="og:type" content="article" />

        {/* Article Meta */}
        <meta property="article:published_time" content={blog.date} />
        {blog.author && (
          <meta property="article:author" content={blog.author} />
        )}

        {/* ✅ FEATURE LIST SNIPPET (HUBSPOT-LEVEL SEO) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": blog.title + " – Key Takeaways",
            "itemListOrder": "http://schema.org/ItemListOrderAscending",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Clear explanation of core concepts" },
              { "@type": "ListItem", "position": 2, "name": "Practical tools and examples" },
              { "@type": "ListItem", "position": 3, "name": "Real-world business use cases" },
              { "@type": "ListItem", "position": 4, "name": "Benefits and limitations explained" },
              { "@type": "ListItem", "position": 5, "name": "Actionable insights for growth" }
            ]
          })}
        </script>
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

        {/* 🔷 HUBSPOT STYLE: KEY TAKEAWAYS */}
        <div className="mb-10 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6">
          <h2 className="text-lg font-semibold mb-3">
            Key Takeaways
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Understand the core ideas covered in this article</li>
            <li>Learn how these concepts apply in real business scenarios</li>
            <li>Discover tools and methods used by professionals</li>
            <li>Gain clarity on benefits, risks, and best practices</li>
          </ul>
        </div>

        {/* 🔷 HUBSPOT STYLE: WHAT THIS ARTICLE COVERS */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {[
            "Beginner-friendly explanations",
            "Step-by-step breakdown of concepts",
            "Popular tools and strategies",
            "Business-focused use cases",
            "Actionable insights for growth"
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span className="text-gray-700 dark:text-gray-300">
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* ✅ MARKDOWN CONTENT (UNCHANGED) */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {blog.content}
          </ReactMarkdown>
        </article>
      </section>
    </>
  )
}

export default BlogPost
