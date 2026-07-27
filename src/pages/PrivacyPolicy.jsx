import React, { useEffect } from "react"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async"
import { ShieldCheck, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Marketing.thebuildlab</title>
        <meta
          name="description"
          content="Privacy Policy for Marketing.thebuildlab. Learn how we handle and protect your personal information."
        />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-20 min-h-[75vh]"
      >
        {/* Back button */}
        <Link
          to="/"
          className="inline-flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>

        {/* Page Header */}
        <div className="mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4 text-sm font-medium border border-primary-100 dark:border-primary-800/40">
            <ShieldCheck className="w-4 h-4 mr-2" /> Legal Information
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        {/* Content Container */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-12 shadow-sm space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary-500 to-secondary-500 flex items-center justify-center text-white mb-6 shadow-md">
            <ShieldCheck className="w-6 h-6" />
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Privacy Policy Content Coming Soon
          </h2>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            We are committed to protecting your privacy and ensuring your personal information is handled in a safe and responsible manner.
          </p>

          <div className="border-t border-gray-100 dark:border-gray-800 pt-6 text-gray-500 dark:text-gray-400 text-sm">
            <p>
              This section is reserved for your detailed privacy policy details, data handling disclosures, cookie policies, and contact information. You can add your official text here anytime in <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-primary-600 dark:text-primary-400">src/pages/PrivacyPolicy.jsx</code>.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default PrivacyPolicy
