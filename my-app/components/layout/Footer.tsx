"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link
            href="/"
            className="text-lg font-semibold text-gray-900 dark:text-white"
          >
            Your Brand
          </Link>
          <nav className="flex gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <motion.div
          className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 text-center sm:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-500 dark:text-gray-500">
            © {currentYear} Your Brand. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
