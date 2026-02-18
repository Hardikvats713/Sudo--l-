"use client";

import { Search, Filter, Calendar } from "lucide-react";
import { useState } from "react";

const CAUSE_LIST_DATA = [
    { id: "VS-2024-892", title: "State vs. Rakesh Kumar", date: "2024-03-15", stage: "Evidence", status: "High Risk", judge: "Hon. Sharma" },
    { id: "CIV-2023-104", title: "Mehta Industries vs. GIDC", date: "2024-03-15", stage: "Arguments", status: "Medium Risk", judge: "Hon. Sharma" },
    { id: "FAM-2024-003", title: "Patel vs. Patel", date: "2024-03-16", stage: "Mediation", status: "On Track", judge: "Hon. Patel" },
    { id: "CRM-2024-112", title: "State vs. Suresh & Others", date: "2024-03-16", stage: "Charges", status: "Critical", judge: "Hon. Singh" },
    { id: "CIV-2022-881", title: "Green City Association vs. Muni. Corp", date: "2024-03-17", stage: "Final Hearing", status: "On Track", judge: "Hon. Sharma" },
    { id: "LAB-2023-056", title: "Workers Union vs. Factory Manager", date: "2024-03-18", stage: "Witness", status: "Medium Risk", judge: "Hon. Rao" },
];

export default function CauseListPage() {
    const [filter, setFilter] = useState("All");

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-serif font-bold tracking-tight">Daily Cause List</h1>
                    <p className="text-gray-400 mt-2">Manage and track hearing schedules efficiently.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
                        <Calendar size={18} />
                        <span>Select Date</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#c9a227] text-black font-semibold rounded-lg hover:bg-[#b08d21] transition-colors">
                        Generate Report
                    </button>
                </div>
            </div>

            {/* Filters & Search */}
            <div className="flex flex-col md:flex-row gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search by Case No. or Party Name..."
                        className="w-full bg-black/20 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-white/30"
                    />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                    {["All", "High Risk", "Medium Risk", "On Track"].map(status => (
                        <button
                            key={status}
                            onClick={() => setFilter(status)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors border ${filter === status
                                    ? "bg-white text-black border-white"
                                    : "bg-transparent text-gray-400 border-white/10 hover:border-white/30"
                                }`}
                        >
                            {status}
                        </button>
                    ))}
                </div>
            </div>

            {/* Table */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/10 bg-white/5">
                                <th className="p-4 font-medium text-gray-400 text-sm">Case No.</th>
                                <th className="p-4 font-medium text-gray-400 text-sm">Title</th>
                                <th className="p-4 font-medium text-gray-400 text-sm">Next Hearing</th>
                                <th className="p-4 font-medium text-gray-400 text-sm">Stage</th>
                                <th className="p-4 font-medium text-gray-400 text-sm">Judge</th>
                                <th className="p-4 font-medium text-gray-400 text-sm">Status</th>
                                <th className="p-4 font-medium text-gray-400 text-sm">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {CAUSE_LIST_DATA.filter(item => filter === "All" || item.status === filter).map((item, index) => (
                                <tr key={item.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                                    <td className="p-4 font-mono text-sm text-gray-300">{item.id}</td>
                                    <td className="p-4 font-medium">{item.title}</td>
                                    <td className="p-4 text-gray-400">{item.date}</td>
                                    <td className="p-4 text-gray-300">{item.stage}</td>
                                    <td className="p-4 text-gray-400">{item.judge}</td>
                                    <td className="p-4">
                                        <StatusBadge status={item.status} />
                                    </td>
                                    <td className="p-4">
                                        <button className="text-sm text-[#c9a227] hover:underline opacity-0 group-hover:opacity-100 transition-opacity">
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

function StatusBadge({ status }: { status: string }) {
    let colorClass = "bg-gray-500/20 text-gray-400";
    if (status === "High Risk" || status === "Critical") colorClass = "bg-red-500/20 text-red-400";
    if (status === "Medium Risk") colorClass = "bg-yellow-500/20 text-yellow-400";
    if (status === "On Track") colorClass = "bg-green-500/20 text-green-400";

    return (
        <span className={`px-2 py-1 rounded text-xs font-medium ${colorClass}`}>
            {status}
        </span>
    );
}
