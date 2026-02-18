'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const DEMO_ACCOUNTS = [
    { role: 'Judge', email: 'judge.sharma@courtmail.in', password: 'Court@2024' },
    { role: 'Clerk', email: 'clerk.patel@courtmail.in', password: 'Court@2024' },
    { role: 'Admin', email: 'admin@courtmail.in', password: 'Court@2024' },
];

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (email: string, password: string) => {
        // Mock login for now
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (password === 'Court@2024') {
                    resolve(true);
                } else {
                    reject({ response: { data: { message: 'Invalid credentials' } } });
                }
            }, 1000);
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(''); setLoading(true);
        try {
            await handleLogin(email, password);
            // For now, redirect to dashboard or home, user didn't specify destination
            router.push('/dashboard');
        } catch (err: any) {
            setError(err.response?.data?.message || 'Login failed. Check credentials.');
        } finally { setLoading(false); }
    };

    const fillDemo = (acc: any) => { setEmail(acc.email); setPassword(acc.password); };

    return (
        <div style={{
            minHeight: '100vh', display: 'flex',
            background: 'linear-gradient(135deg, #0f2441 0%, #1e3a5f 50%, #0f2441 100%)'
        }}>
            {/* Left panel */}
            <div style={{
                flex: 1, display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                padding: 60, color: 'white'
            }}>
                <div style={{ maxWidth: 440 }}>
                    <div style={{ fontSize: '3.5rem', marginBottom: 20 }}>⚖️</div>
                    <h1 style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 16 }}>
                        Court Delay<br />
                        <span style={{ color: '#c9a227' }}>Intelligence System</span>
                    </h1>
                    <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: 40 }}>
                        A smart delay intelligence engine for Indian district courts.
                        Track adjournments, predict risks, and optimize hearing schedules
                        with AI-driven insights.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {[
                            ['📊', 'Adjournment Risk Prediction'],
                            ['⭐', 'Advocate Reliability Scoring'],
                            ['📋', 'Smart Cause List Generation'],
                            ['📈', 'Court Analytics Dashboard'],
                        ].map(([icon, text]) => (
                            <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                <span>{icon}</span>
                                <span style={{ fontSize: '0.875rem', color: '#cbd5e1' }}>{text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right panel — Login form */}
            <div style={{
                width: 460, background: 'white',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                padding: 48,
            }}>
                <div style={{ width: '100%', maxWidth: 380 }}>
                    <div style={{ marginBottom: 32 }}>
                        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.02em', color: '#171717', marginBottom: 6 }}>
                            Sign In
                        </h2>
                        <p style={{ color: '#525252', fontSize: '0.875rem' }}>
                            Court staff access only
                        </p>
                    </div>

                    {error && (
                        <div style={{ background: '#fee2e2', border: '1px solid #fca5a5', color: '#dc2626', padding: '10px 14px', borderRadius: 8, fontSize: '0.85rem', marginBottom: 20 }}>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-700">Email Address</label>
                            <input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900" type="email" value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="your@courtmail.in" required />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-700">Password</label>
                            <input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900" type="password" value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="••••••••" required />
                        </div>
                        <button type="submit" disabled={loading}
                            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-1">
                            {loading ? 'Signing in...' : 'Sign In →'}
                        </button>
                    </form>

                    {/* Demo accounts */}
                    <div style={{ marginTop: 32 }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#737373', marginBottom: 10 }}>
                            Demo Accounts
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                            {DEMO_ACCOUNTS.map(acc => (
                                <button key={acc.role} onClick={() => fillDemo(acc)}
                                    style={{
                                        width: '100%', padding: '10px 14px', borderRadius: 8,
                                        border: '1px solid #e5e5e5', background: '#f8fafc',
                                        cursor: 'pointer', display: 'flex', justifyContent: 'space-between',
                                        alignItems: 'center', fontFamily: 'inherit', transition: 'all 0.15s'
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.borderColor = '#2563eb'}
                                    onMouseLeave={e => e.currentTarget.style.borderColor = '#e5e5e5'}
                                >
                                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#171717' }}>{acc.role}</span>
                                    <span style={{ fontSize: '0.75rem', color: '#737373' }}>{acc.email}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div style={{ marginTop: 24, paddingTop: 24, borderTop: '1px solid #e5e5e5', textAlign: 'center' }}>
                        <a href="/" style={{ fontSize: '0.8rem', color: '#2563eb', textDecoration: 'none' }}>
                            ← Back to Main
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
