"use client";

import { User, Bell, Shield, Database, Moon, LogOut } from "lucide-react";

export default function SettingsPage() {
    return (
        <div className="space-y-8 max-w-4xl">
            <div>
                <h1 className="text-3xl font-serif font-bold tracking-tight">Settings & Preferences</h1>
                <p className="text-gray-400 mt-2">Manage your account and system configurations.</p>
            </div>

            {/* Profile Section */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                    <User size={40} className="text-gray-300" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold">Hon. Rajesh Sharma</h2>
                    <p className="text-gray-400">District Judge, Room 402</p>
                    <div className="flex gap-3 mt-3">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full font-medium border border-blue-500/30">Admin Access</span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full font-medium border border-green-500/30">Active</span>
                    </div>
                </div>
                <div className="ml-auto">
                    <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors">
                        Edit Profile
                    </button>
                </div>
            </div>

            {/* Settings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Appearance */}
                <SettingsCard icon={Moon} title="Appearance">
                    <div className="flex items-center justify-between py-3 border-b border-white/10">
                        <span className="text-sm text-gray-300">Dark Mode</span>
                        <Toggle checked />
                    </div>
                    <div className="flex items-center justify-between py-3">
                        <span className="text-sm text-gray-300">Compact View</span>
                        <Toggle />
                    </div>
                </SettingsCard>

                {/* Notifications */}
                <SettingsCard icon={Bell} title="Notifications">
                    <div className="flex items-center justify-between py-3 border-b border-white/10">
                        <span className="text-sm text-gray-300">Email Alerts</span>
                        <Toggle checked />
                    </div>
                    <div className="flex items-center justify-between py-3">
                        <span className="text-sm text-gray-300">Daily Digest</span>
                        <Toggle checked />
                    </div>
                </SettingsCard>

                {/* Security */}
                <SettingsCard icon={Shield} title="Security">
                    <div className="flex items-center justify-between py-3 border-b border-white/10">
                        <span className="text-sm text-gray-300">Two-Factor Auth</span>
                        <Toggle />
                    </div>
                    <div className="flex items-center justify-between py-3">
                        <span className="text-sm text-gray-300">Login History</span>
                        <button className="text-xs text-blue-400 hover:text-blue-300">View Logs</button>
                    </div>
                </SettingsCard>

                {/* System */}
                <SettingsCard icon={Database} title="System">
                    <div className="flex items-center justify-between py-3 border-b border-white/10">
                        <span className="text-sm text-gray-300">Auto-Sync</span>
                        <Toggle checked />
                    </div>
                    <div className="flex items-center justify-between py-3">
                        <span className="text-sm text-gray-300">Data Backup</span>
                        <span className="text-xs text-green-400">Last: 2h ago</span>
                    </div>
                </SettingsCard>

            </div>

            <div className="pt-6 border-t border-white/10">
                <button className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors">
                    <LogOut size={18} />
                    <span className="font-medium">Sign Out from all devices</span>
                </button>
            </div>
        </div>
    );
}

function SettingsCard({ icon: Icon, title, children }: any) {
    return (
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white/10 rounded-lg">
                    <Icon size={20} className="text-[#c9a227]" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            <div className="space-y-1">
                {children}
            </div>
        </div>
    );
}

function Toggle({ checked }: { checked?: boolean }) {
    return (
        <div className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors ${checked ? "bg-green-500" : "bg-gray-600"}`}>
            <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${checked ? "left-6" : "left-1"}`}></div>
        </div>
    );
}
