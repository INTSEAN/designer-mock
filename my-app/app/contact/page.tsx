"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      className="min-h-screen mt-16 px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <main className="max-w-2xl mx-auto">
        <motion.h1
          className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Contact
        </motion.h1>
        <motion.p
          className="text-gray-600 dark:text-gray-400"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Add your contact form or details here.
        </motion.p>
      </main>
    </motion.div>
  );
}
