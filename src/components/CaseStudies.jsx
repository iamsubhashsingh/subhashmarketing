import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "../constants/data";

const CaseStudies = () => {
  // ✅ SAFETY GUARD (prevents white screen)
  if (!Array.isArray(caseStudies) || caseStudies.length === 0) {
    return null; // or a loader if you want
  }

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gray-900 dark:text-white">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real results from real clients. See how we've helped brands achieve remarkable growth.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 h-full card-hover backdrop-blur-sm">
                {/* Client */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Client
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {study.client}
                    </h3>
                  </div>

                  <motion.div
                    whileHover={{ rotate: 45 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 flex items-center justify-center"
                  >
                    <ArrowUpRight className="w-6 h-6 text-primary-500" />
                  </motion.div>
                </div>

                {/* Service */}
                <div className="mb-6">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Service Provided
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-500/10 text-primary-500 text-sm">
                    {study.service}
                  </span>
                </div>

                {/* Result */}
                <div className="mb-8">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Result
                  </div>
                  <div className="text-3xl font-bold gradient-text">
                    {study.result}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  {study.description}
                </p>

                {/* Progress line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.8 }}
                  className="h-1 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
          >
            View All Case Studies
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
