"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function SignupForm({ style }: { style: any }) {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push('/login');
    };

    return (
        <motion.div
            style={style}
            className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[90%] max-w-md p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl z-20 pointer-events-auto"
        >
            <h2 className="text-3xl mb-6 font-primary text-center tracking-tight">Access the Future of Law</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                    <input
                        type="email"
                        placeholder="jurist@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
                >
                    Request Early Access
                </button>
            </form>
        </motion.div>
    );
}
