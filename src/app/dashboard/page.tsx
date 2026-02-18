"use client";

import { AlertTriangle, TrendingUp, Users, Scale, Clock } from "lucide-react";

export default function DashboardHome() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-serif font-bold tracking-tight">Dashboard Overview</h1>
                <p className="text-gray-400 mt-2">Welcome back, Hon. Sharma. Here is today's court intelligence report.</p>
            </div>

            {/* KPI Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <KPICard title="Total Pendency" value="1,248" change="+2.4%" icon={Scale} />
                <KPICard title="High Risk Cases" value="14" change="+4" isNegative icon={AlertTriangle} />
                <KPICard title="Avg. Hearing Time" value="45m" change="-12%" icon={Clock} />
                <KPICard title="Advocate Reliability" value="87%" change="+1.2%" icon={Users} />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Adjournment Risk Analysis */}
                <div className="lg:col-span-2 space-y-6">
                    <SectionHeader title="Adjournment Risk Analysis" />
                    <div className="grid gap-4">
                        <RiskCard
                            caseNo="VS-2024-892"
                            title="State vs. Rakesh Kumar"
                            riskScore={92}
                            reason="Key witness absent in last 3 hearings"
                        />
                        <RiskCard
                            caseNo="CIV-2023-104"
                            title="Mehta Industries vs. GIDC"
                            riskScore={78}
                            reason="Advocate request history shows pattern of delay"
                        />
                        <RiskCard
                            caseNo="FAM-2024-003"
                            title="Patel vs. Patel"
                            riskScore={65}
                            reason="Document verification pending"
                        />
                    </div>
                </div>

                {/* Advocate Insights */}
                <div className="space-y-6">
                    <SectionHeader title="Advocate Reliability" />
                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6">
                        <div className="space-y-6">
                            <AdvocateRow name="Adv. R.K. Singh" score={95} status="Excellent" />
                            <AdvocateRow name="Adv. M.L. Gupta" score={88} status="Good" />
                            <AdvocateRow name="Adv. S. Deshmukh" score={42} status="Critical Risk" />
                            <AdvocateRow name="Adv. P. Trivedi" score={60} status="Moderate" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Sub-components for cleaner code
function SectionHeader({ title }: { title: string }) {
    return <h2 className="text-xl font-semibold tracking-tight text-white/90">{title}</h2>;
}

function KPICard({ title, value, change, icon: Icon, isNegative }: any) {
    return (
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm font-medium text-gray-400">{title}</p>
                    <h3 className="text-2xl font-bold mt-2">{value}</h3>
                </div>
                <div className="p-3 bg-white/5 rounded-lg">
                    <Icon size={20} className="text-[#c9a227]" />
                </div>
            </div>
            <div className={`mt-4 text-xs font-medium ${isNegative ? "text-red-400" : "text-green-400"}`}>
                {change} <span className="text-gray-500">vs last month</span>
            </div>
        </div>
    );
}

function RiskCard({ caseNo, title, riskScore, reason }: any) {
    const isCritical = riskScore > 80;
    return (
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 flex items-center justify-between group hover:border-white/20 transition-all">
            <div>
                <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">{caseNo}</span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded ${isCritical ? "bg-red-500/20 text-red-400" : "bg-yellow-500/20 text-yellow-400"}`}>
                        {riskScore}% Risk
                    </span>
                </div>
                <h3 className="text-lg font-medium mt-2 group-hover:text-[#c9a227] transition-colors">{title}</h3>
                <p className="text-sm text-gray-400 mt-1">{reason}</p>
            </div>
            <button className="px-4 py-2 text-sm font-medium border border-white/20 rounded-lg hover:bg-white/10 transition-colors">
                View Details
            </button>
        </div>
    );
}

function AdvocateRow({ name, score, status }: any) {
    const getColor = (s: number) => {
        if (s >= 90) return "text-green-400";
        if (s >= 70) return "text-blue-400";
        if (s >= 50) return "text-yellow-400";
        return "text-red-400";
    };

    return (
        <div className="flex items-center justify-between">
            <div>
                <div className="font-medium text-white">{name}</div>
                <div className={`text-xs ${getColor(score)}`}>{status}</div>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-white transition-all" style={{ width: `${score}%`, opacity: score / 100 }}></div>
                </div>
                <span className="text-xs font-mono text-gray-400">{score}</span>
            </div>
        </div>
    )
}
