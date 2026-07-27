import React from "react"
import { motion } from "framer-motion"
import {
  FileText,
  User,
  Briefcase,
  Target,
  Calendar,
  Monitor,
  Megaphone,
  Check,
  Sparkles,
  Activity,
  ShoppingBag,
  TrendingUp,
  Zap,
  Heart,
  Smile
} from "lucide-react"

// Helper to resolve icon components dynamically
const getServiceIcon = (iconName) => {
  switch (iconName) {
    case "tooth":
    case "smile":
      return <Smile className="w-8 h-8 text-blue-500 stroke-[1.5]" />
    case "sparkles":
      return <Sparkles className="w-8 h-8 text-blue-500 stroke-[1.5]" />
    case "activity":
      return <Activity className="w-8 h-8 text-blue-500 stroke-[1.5]" />
    case "shopping-bag":
      return <ShoppingBag className="w-8 h-8 text-blue-500 stroke-[1.5]" />
    case "trending-up":
      return <TrendingUp className="w-8 h-8 text-blue-500 stroke-[1.5]" />
    case "zap":
      return <Zap className="w-8 h-8 text-blue-500 stroke-[1.5]" />
    default:
      return <Sparkles className="w-8 h-8 text-blue-500 stroke-[1.5]" />
  }
}

const ProjectOverviewCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 rounded-3xl p-6 md:p-10 shadow-xl shadow-gray-200/50 dark:shadow-none mb-12 backdrop-blur-sm"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Project Overview Specs */}
        <div className="lg:col-span-7 space-y-6">
          {/* Header */}
          <div className="flex items-center gap-4 mb-2">
            {project.docLink ? (
              <motion.a
                href={project.docLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                title="Click to view Project Document"
                className="relative group w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/40 transition-all cursor-pointer ring-2 ring-indigo-500/20 hover:ring-indigo-500/60"
              >
                <FileText className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-gray-900 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                </span>
              </motion.a>
            ) : (
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
                <FileText className="w-6 h-6" />
              </div>
            )}
            <div>
              {project.docLink ? (
                <a
                  href={project.docLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 hover:text-indigo-500 transition-colors"
                >
                  <h2 className="text-2xl md:text-3xl font-bold font-heading text-indigo-600 dark:text-indigo-400 group-hover:underline">
                    {project.number}. {project.title}
                  </h2>
                </a>
              ) : (
                <h2 className="text-2xl md:text-3xl font-bold font-heading text-indigo-600 dark:text-indigo-400">
                  {project.number}. {project.title}
                </h2>
              )}
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-1.5" />
            </div>
          </div>

          {/* Details Table List */}
          <div className="space-y-4 pt-2 divide-y divide-gray-100 dark:divide-gray-800">
            {/* Business */}
            <div className="flex items-start gap-4 pt-4 first:pt-0">
              <div className="w-9 h-9 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100 dark:border-blue-900/50">
                <User className="w-4 h-4" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-1 sm:gap-4 items-center">
                <span className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">
                  Business:
                </span>
                <span className="sm:col-span-2 text-gray-700 dark:text-gray-300 text-sm md:text-base font-medium">
                  {project.business}
                </span>
              </div>
            </div>

            {/* Industry */}
            <div className="flex items-start gap-4 pt-4">
              <div className="w-9 h-9 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100 dark:border-blue-900/50">
                <Briefcase className="w-4 h-4" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-1 sm:gap-4 items-center">
                <span className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">
                  Industry:
                </span>
                <span className="sm:col-span-2 text-gray-700 dark:text-gray-300 text-sm md:text-base font-medium">
                  {project.industry}
                </span>
              </div>
            </div>

            {/* Business Goal */}
            <div className="flex items-start gap-4 pt-4">
              <div className="w-9 h-9 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100 dark:border-blue-900/50">
                <Target className="w-4 h-4" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-1 sm:gap-4">
                <span className="font-semibold text-gray-900 dark:text-white text-sm md:text-base pt-0.5">
                  Business Goal:
                </span>
                <div className="sm:col-span-2 space-y-2">
                  {project.businessGoalHeading && (
                    <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base font-medium">
                      {project.businessGoalHeading}
                    </p>
                  )}
                  <ul className="space-y-1.5">
                    {project.businessGoals.map((goal, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-gray-700 dark:text-gray-300 text-sm md:text-base font-medium"
                      >
                        <Check className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Campaign Duration */}
            <div className="flex items-start gap-4 pt-4">
              <div className="w-9 h-9 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100 dark:border-blue-900/50">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-1 sm:gap-4 items-center">
                <span className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">
                  Campaign Duration:
                </span>
                <span className="sm:col-span-2 text-gray-700 dark:text-gray-300 text-sm md:text-base font-medium">
                  {project.duration}
                </span>
              </div>
            </div>

            {/* Platform */}
            <div className="flex items-start gap-4 pt-4">
              <div className="w-9 h-9 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100 dark:border-blue-900/50">
                <Monitor className="w-4 h-4" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-1 sm:gap-4 items-center">
                <span className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">
                  Platform:
                </span>
                <span className="sm:col-span-2 text-gray-700 dark:text-gray-300 text-sm md:text-base font-medium">
                  {project.platform}
                </span>
              </div>
            </div>

            {/* Campaign Type */}
            <div className="flex items-start gap-4 pt-4">
              <div className="w-9 h-9 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100 dark:border-blue-900/50">
                <Megaphone className="w-4 h-4" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-1 sm:gap-4 items-center">
                <span className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">
                  Campaign Type:
                </span>
                <span className="sm:col-span-2 text-gray-700 dark:text-gray-300 text-sm md:text-base font-medium">
                  {project.campaignType}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Preview Card */}
        <div className="lg:col-span-5">
          <div className="bg-gray-50 dark:bg-gray-800/40 border border-gray-200/80 dark:border-gray-700/80 rounded-3xl p-3 shadow-inner">
            {/* Top Showcase Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-md group">
              <img
                src={project.previewImage}
                alt={project.business}
                className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </div>

            {/* Bottom Client Logo & Branding Box */}
            <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700/80 rounded-2xl p-6 text-center shadow-lg -mt-8 relative z-10 mx-2 md:mx-4">
              {/* Brand Logo Header */}
              <div className="flex flex-col items-center justify-center mb-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2 shadow-sm border border-blue-100 dark:border-blue-900">
                  <Heart className="w-7 h-7 text-blue-600 fill-blue-500/20" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 tracking-tight font-heading">
                  {project.brandTitle}
                </h3>
                <span className="text-[10px] tracking-[0.25em] font-bold text-blue-900/60 dark:text-blue-300/60 uppercase">
                  {project.brandSubtitle}
                </span>
              </div>

              {/* Tagline */}
              <p className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 mb-6">
                {project.brandTagline}
              </p>

              {/* Key Services Grid */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100 dark:border-gray-700/60">
                {project.keyServices.map((service, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <div className="mb-2 p-2 rounded-xl bg-blue-50/60 dark:bg-blue-950/30">
                      {getServiceIcon(service.icon)}
                    </div>
                    <span className="text-[11px] md:text-xs font-semibold text-gray-700 dark:text-gray-300 leading-tight">
                      {service.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectOverviewCard
