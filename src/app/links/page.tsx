"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Github,
    Globe,
    Mail,
    Linkedin,
    Instagram,
    ArrowUpRight,
} from "lucide-react";

export default function LinksPage() {
    const links = [
        {
            title: "My Portfolio Website",
            href: "/",
            icon: <Globe className="w-5 h-5" />,
        },
        {
            title: "GitHub",
            href: "https://github.com/",
            icon: <Github className="w-5 h-5" />,
        },
        {
            title: "LinkedIn",
            href: "https://linkedin.com/",
            icon: <Linkedin className="w-5 h-5" />,
        },
        {
            title: "Instagram",
            href: "https://instagram.com/",
            icon: <Instagram className="w-5 h-5" />,
        },
        {
            title: "Email Me",
            href: "mailto:muhammadamir27901@gmail.com",
            icon: <Mail className="w-5 h-5" />,
        },
    ];

    return (
        <section className="bg-[#0b0b0b] text-white min-h-screen py-28 px-6 flex flex-col items-center">
            {/* Back to Home */}
            <div className="w-full max-w-[1150px] mx-auto mb-6 px-6 text-left">
                <Link
                    href="/"
                    className="inline-flex items-center text-yellow-400 font-medium hover:text-yellow-300 transition"
                >
                    ← Back to Home
                </Link>
            </div>


            {/* Profile */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center text-center mb-10"
            >
                <div className="relative w-28 h-28 mb-4">
                    <Image
                        src="/profile.jpg" // 👉 replace with your profile image
                        alt="Profile"
                        fill
                        className="rounded-full object-cover border-2 border-yellow-400 shadow-[0_0_15px_rgba(255,204,0,0.4)]"
                    />
                </div>
                <h1 className="text-2xl md:text-3xl font-bold">Amir’s Links</h1>
                <p className="text-gray-400 mt-2 text-sm max-w-sm">
                    Developer • Designer • Creator
                    — Building modern digital experiences.
                </p>
            </motion.div>

            {/* Links */}
            <div className="w-full max-w-md flex flex-col gap-4">
                {links.map((link, index) => (
                    <motion.a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        className="flex items-center justify-between bg-[#141414] border border-[#2a2a2a] rounded-xl px-5 py-4 hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(255,204,0,0.2)] transition-all group"
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-yellow-400">{link.icon}</span>
                            <span className="font-medium">{link.title}</span>
                        </div>
                        <ArrowUpRight
                            size={18}
                            className="opacity-0 group-hover:opacity-100 text-yellow-400 transition-all"
                        />
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
