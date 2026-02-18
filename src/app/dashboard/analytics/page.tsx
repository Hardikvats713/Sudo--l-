"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line } from "recharts";

const CASE_TYPE_DATA = [
    { name: "Civil", value: 450, color: "#3b82f6" },
    { name: "Criminal", value: 300, color: "#ef4444" },
    { name: "Family", value: 200, color: "#eab308" },
    { name: "Traffic", value: 150, color: "#22c55e" },
];

const DISPOSAL_DATA = [
    { month: "Jan", cases: 120 },
    { month: "Feb", cases: 132 },
    { month: "Mar", cases: 101 },
    { month: "Apr", cases: 134 },
    { month: "May", cases: 190 },
    { month: "Jun", cases: 230 },
];

const JUDGE_EFFICIENCY_DATA = [
    { name: "Hon. Sharma", score: 92 },
    { name: "Hon. Patel", score: 88 },
    { name: "Hon. Singh", score: 75 },
    { name: "Hon. Rao", score: 82 },
];

export default function AnalyticsPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-serif font-bold tracking-tight">Analytics & Trends</h1>
                <p className="text-gray-400 mt-2">Deep dive into court performance metrics and case statistics.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Case Type Distribution */}
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6">
                    <h2 className="text-xl font-semibold mb-6">Case Type Distribution</h2>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={CASE_TYPE_DATA}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={100}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {CASE_TYPE_DATA.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ backgroundColor: "#171717", border: "1px solid #333", borderRadius: "8px" }}
                                    itemStyle={{ color: "#fff" }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex justify-center gap-4 flex-wrap mt-4">
                        {CASE_TYPE_DATA.map(item => (
                            <div key={item.name} className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                                <span className="text-sm text-gray-400">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Case Disposal Trend */}
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6">
                    <h2 className="text-xl font-semibold mb-6">Monthly Disposal Trend</h2>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={DISPOSAL_DATA}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                                <XAxis dataKey="month" stroke="#666" />
                                <YAxis stroke="#666" />
                                <Tooltip
                                    contentStyle={{ backgroundColor: "#171717", border: "1px solid #333", borderRadius: "8px" }}
                                    itemStyle={{ color: "#fff" }}
                                />
                                <Line type="monotone" dataKey="cases" stroke="#c9a227" strokeWidth={3} dot={{ fill: "#c9a227" }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Judge Efficiency */}
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 lg:col-span-2">
                    <h2 className="text-xl font-semibold mb-6">Judge Efficiency Score (Clearance Rate)</h2>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={JUDGE_EFFICIENCY_DATA}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                                <XAxis dataKey="name" stroke="#666" />
                                <YAxis stroke="#666" />
                                <Tooltip
                                    contentStyle={{ backgroundColor: "#171717", border: "1px solid #333", borderRadius: "8px" }}
                                    cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
                                    itemStyle={{ color: "#fff" }}
                                />
                                <Bar dataKey="score" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={60} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

            </div>
        </div>
    );
}
