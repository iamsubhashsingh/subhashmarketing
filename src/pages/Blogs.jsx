import { Link } from "react-router-dom"
import { blogs } from "../data/blogs"

const Blogs = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-10">Blogs</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {blogs.map(blog => (
          <div key={blog.id} className="border rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-2">
              {blog.title}
            </h2>
            <p className="text-gray-600 mb-4">
              {blog.excerpt}
            </p>
            <Link
              to={`/blogs/${blog.slug}`}
              className="text-primary-600 font-semibold"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blogs
