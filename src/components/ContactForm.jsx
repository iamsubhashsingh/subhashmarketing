import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // 🔹 EmailJS submit handler
  const onSubmit = (data) => {
    // Clean phone before sending
    const cleanedPhone = data.phone.replace(/\s+/g, "");

    emailjs
      .send(
        "service_itq73nj", // Service ID
        "template_lxiqhom", // Template ID
        {
          name: data.name,
          email: data.email,
          phone: cleanedPhone,
          business: data.business || "Not provided",
          budget: data.budget,
          message: data.message,
        },
        "9eBh5OPEPWio_S4pz" // Public Key
      )
      .then(() => {
        setIsSubmitted(true);
        reset();

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-3xl p-8 backdrop-blur-sm">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
          Send us a message
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          We'll get back to you within 24 hours
        </p>
      </motion.div>

      {/* Success Message */}
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <CheckCircle className="w-16 h-16 text-accent-500 mx-auto mb-6" />
          <h4 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
            Message Sent!
          </h4>
          <p className="text-gray-600 dark:text-gray-400">
            We'll get back to you within 24 hours.
          </p>
        </motion.div>
      ) : (
        /* Form */
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name + Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name *</label>
              <input
                {...register("name", { required: "Name is required" })}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-700 rounded-lg"
                placeholder="John Cena"
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-700 rounded-lg"
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Contact Number */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Contact Number *
            </label>
            <input
              type="tel"
              {...register("phone", {
                required: "Contact number is required",
                validate: (value) => {
                  const cleaned = value.replace(/\s+/g, "");
                  const regex = /^(?:\+91)?[6-9]\d{9}$/;

                  if (!regex.test(cleaned)) {
                    return "Enter valid 10-digit Indian number (with or without +91)";
                  }
                  return true;
                },
              })}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-700 rounded-lg"
              placeholder="+91 0000000000"
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone.message}</p>
            )}
          </div>

          {/* Business */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Business / Brand Name
            </label>
            <input
              {...register("business")}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-700 rounded-lg"
              placeholder="Your company name"
            />
          </div>

          {/* Budget */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Monthly Marketing Budget *
            </label>
            <select
              {...register("budget", {
                required: "Please select a budget range",
              })}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              <option value="">Select budget range</option>
              <option value="Under ₹50,000">Under ₹50,000</option>
              <option value="₹50,000 - ₹1,00,000">
                ₹50,000 - ₹1,00,000
              </option>
              <option value="₹1,00,000 - ₹1,50,000">
                ₹1,00,000 - ₹1,50,000
              </option>
              <option value="₹1,50,000 - ₹2,00,000">
                ₹1,50,000 - ₹2,00,000
              </option>
              <option value="Over ₹2,00,000">
                Over ₹2,00,000
              </option>
            </select>
            {errors.budget && (
              <p className="text-sm text-red-500">{errors.budget.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Message / Requirements *
            </label>
            <textarea
              rows={4}
              {...register("message", { required: "Message is required" })}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-700 rounded-lg"
              placeholder="Tell us about your project..."
            />
            {errors.message && (
              <p className="text-sm text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full btn-primary flex items-center justify-center space-x-2"
          >
            <span>Send Message</span>
            <Send className="w-5 h-5" />
          </motion.button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
