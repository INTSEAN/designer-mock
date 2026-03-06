"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <motion.div
      className="min-h-screen mt-16 flex flex-col items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <main className="max-w-2xl mx-auto text-center">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Your headline here
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          A compelling subheadline that describes what you offer.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Button size="lg" className="font-medium">
            Get started
          </Button>
        </motion.div>
      </main>
    </motion.div>
  );
}
