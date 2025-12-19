import { useParams } from "react-router-dom"
import { blogs } from "../constants/blogsData"

const BlogPost = () => {
  const { slug } = useParams()
  const blog = blogs.find(b => b.slug === slug)

  if (!blog) return <p>Blog not found</p>

  return (
    <section className="section-padding max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 mb-8">{blog.date}</p>

      <article
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </section>
  )
}

export default BlogPost

