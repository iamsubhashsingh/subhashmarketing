import { motion } from 'framer-motion'
import { Linkedin, Twitter, Mail } from 'lucide-react'
import { teamMembers } from '../constants/data'

const Team = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gray-900 dark:text-white">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            The passionate experts behind your growth journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 h-full card-hover backdrop-blur-sm">
                {/* Avatar */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative mb-6"
                >
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 p-1">
                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                      <div className="text-3xl font-bold gradient-text">
                        {member.name.charAt(0)}
                      </div>
                    </div>
                  </div>
                  
                  {/* Social icons */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-0 right-1/4 flex gap-2"
                  >
                    {[Linkedin, Twitter, Mail].map((Icon, idx) => (
                      <motion.a
                        key={idx}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        href="#"
                        className="w-8 h-8 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex items-center justify-center"
                      >
                        <Icon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                      </motion.a>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{member.name}</h3>
                  <div className="text-primary-500 mb-4">{member.role}</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">{member.bio}</p>
                  
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team