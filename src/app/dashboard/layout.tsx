"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BarChart3, Gavel, Settings, User, Search, Bell, LogOut } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const navigation = [
        { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
        { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
        { name: "Cause List", href: "/dashboard/cause-list", icon: Gavel },
        { name: "Settings", href: "/dashboard/settings", icon: Settings },
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white flex">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/10 flex flex-col fixed h-full bg-[#050505] z-50">
                <div className="p-6 border-b border-white/10">
                    <div className="text-2xl font-serif font-bold tracking-tight">
                        Court<span className="text-[#c9a227]">Intel</span>
                    </div>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive
                                    ? "bg-white/10 text-white"
                                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                                    }`}
                            >
                                <item.icon size={18} />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-white/10">
                    <button className="flex items-center gap-3 px-4 py-3 w-full text-left text-sm font-medium text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">
                        <LogOut size={18} />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 ml-64 flex flex-col min-h-screen">
                {/* Header */}
                <header className="h-16 border-b border-white/10 bg-[#050505]/80 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-8">
                    <div className="flex items-center gap-4 flex-1">
                        <Search className="text-gray-500" size={20} />
                        <input
                            type="text"
                            placeholder="Search cases, advocates, or judges..."
                            className="bg-transparent border-none focus:outline-none text-sm w-full max-w-md text-white placeholder-gray-500"
                        />
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="text-gray-400 hover:text-white transition-colors">
                            <Bell size={20} />
                        </button>
                        <div className="flex items-center gap-3 pl-6 border-l border-white/10">
                            <div className="text-right hidden md:block">
                                <div className="text-sm font-medium">Hon. Sharma</div>
                                <div className="text-xs text-gray-500">District Judge</div>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                                <User size={16} />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
