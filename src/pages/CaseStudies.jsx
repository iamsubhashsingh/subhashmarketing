import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async"
import { FileText, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

const CaseStudies = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | Marketing.thebuildlab</title>
        <meta
          name="description"
          content="Read detailed marketing case studies, client success stories, and campaign breakdowns from Marketing.thebuildlab."
        />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-6 py-20 min-h-[70vh] flex flex-col justify-between"
      >
        <div>
          {/* Back button */}
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>

          {/* Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4 text-sm font-medium">
              <FileText className="w-4 h-4 mr-2" /> Client Success Stories
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
              All Case Studies
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Detailed breakdowns of how we helped our clients scale traffic, optimize conversion funnels, and boost ROAS.
            </p>
          </div>

          {/* Blank Content Area / Placeholder */}
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-3xl p-12 text-center bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-tr from-accent-500 to-primary-500 flex items-center justify-center text-white shadow-lg">
              <FileText className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
              Case Studies Content Coming Soon
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
              This page is set up and ready. You can add full case study articles, client metrics, and campaign reports here anytime.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default CaseStudies
