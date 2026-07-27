import React, { useState } from "react"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async"
import { Briefcase, ArrowLeft, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"
import { portfolioProjects } from "../constants/data"
import ProjectOverviewCard from "../components/ProjectOverviewCard"

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all")

  const displayedProjects =
    activeTab === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) => String(p.id) === String(activeTab))

  return (
    <>
      <Helmet>
        <title>Portfolio & Case Studies | Marketing.thebuildlab</title>
        <meta
          name="description"
          content="Explore our detailed marketing project overviews, campaign strategies, and client results at Marketing.thebuildlab."
        />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 min-h-[80vh]"
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
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4 text-sm font-medium border border-primary-100 dark:border-primary-800/40">
              <Briefcase className="w-4 h-4 mr-2" /> Project Portfolio Overviews
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-gray-900 dark:text-white tracking-tight">
              Featured <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Explore in-depth campaign overviews, client goals, strategies, and key deliverables for each marketing project.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-3 mb-10 pb-4 border-b border-gray-200 dark:border-gray-800">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === "all"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-indigo-500/20"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              All Projects ({portfolioProjects.length})
            </button>

            {portfolioProjects.map((project) => (
              <button
                key={project.id}
                onClick={() => setActiveTab(String(project.id))}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === String(project.id)
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-indigo-500/20"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                Project #{project.number}: {project.brandTitle}
              </button>
            ))}
          </div>

          {/* Project Overview Cards List */}
          <div className="space-y-12">
            {displayedProjects.map((project) => (
              <ProjectOverviewCard key={project.id} project={project} />
            ))}
          </div>

          {/* Next Project Coming Soon Banner */}
          <div className="mt-16 border-2 border-dashed border-indigo-200 dark:border-indigo-900/50 rounded-3xl p-10 text-center bg-indigo-50/30 dark:bg-indigo-950/20 backdrop-blur-sm">
            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Sparkles className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 font-heading">
              Next Project Coming Soon!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto text-base">
              We are constantly optimizing marketing campaigns and pushing new boundaries. Stay tuned for our upcoming case study!
            </p>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Portfolio
