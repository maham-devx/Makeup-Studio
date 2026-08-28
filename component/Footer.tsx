'use client';

import React, { useState } from 'react';

export const Footer: React.FC = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail('');
        }
    };

    return (
        <footer className="bg-white text-neutral-900 border-t border-neutral-200 font-sans">

            {/* Top Banner: Newsletter & Booking Prompt */}
            <div className="border-b border-neutral-100 bg-neutral-50/50 py-12 px-4 sm:px-6 lg:px-12">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="space-y-2 text-center lg:text-left">
                        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-700">
                            Join Our VIP Circle
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-serif font-light text-neutral-900">
                            Get Exclusive Bridal Deals & Beauty Tips
                        </h3>
                        <p className="text-xs text-neutral-500 max-w-md">
                            Subscribe to receive seasonal discount packages, appointment reminders, and beauty updates.
                        </p>
                    </div>

                    <form onSubmit={handleSubscribe} className="flex w-full sm:w-auto max-w-md gap-2">
                        <input
                            type="email"
                            required
                            placeholder="Enter your email address..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full sm:w-72 px-4 py-3 text-xs bg-white border border-neutral-300 rounded-xl focus:outline-none focus:border-neutral-900 transition-colors"
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-md whitespace-nowrap"
                        >
                            {subscribed ? 'Subscribed!' : 'Subscribe'}
                        </button>
                    </form>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

                    {/* Brand Info */}
                    <div className="lg:col-span-2 space-y-4">
                        <h2 className="text-2xl font-serif font-bold text-neutral-900 tracking-wider">
                            GLAMOUR & BRIDAL
                        </h2>
                        <p className="text-xs text-neutral-600 leading-relaxed max-w-sm">
                            Your luxury destination for bridal makeovers, party glam, hair treatments, and organic skincare products. Crafting timeless beauty for every occasion.
                        </p>
                        <div className="pt-2 flex items-center gap-4">
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 hover:bg-neutral-900 hover:text-white transition-all text-sm">
                                📸
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 hover:bg-neutral-900 hover:text-white transition-all text-sm">
                                👍
                            </a>
                            <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 hover:bg-neutral-900 hover:text-white transition-all text-sm">
                                💬
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-3">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900">
                            Services
                        </h4>
                        <ul className="space-y-2 text-xs text-neutral-600">
                            <li><a href="#bridal" className="hover:text-neutral-900 transition-colors">Royal Bridal Package</a></li>
                            <li><a href="#party" className="hover:text-neutral-900 transition-colors">Signature Party Makeup</a></li>
                            <li><a href="#nikkah" className="hover:text-neutral-900 transition-colors">Engagement & Nikkah Glam</a></li>
                            <li><a href="#mehndi" className="hover:text-neutral-900 transition-colors">Bridal Mehndi & Mayun</a></li>
                            <li><a href="#hair" className="hover:text-neutral-900 transition-colors">Keratin & Hair Treatments</a></li>
                        </ul>
                    </div>

                    {/* Shop */}
                    <div className="space-y-3">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900">
                            Cosmetics Shop
                        </h4>
                        <ul className="space-y-2 text-xs text-neutral-600">
                            <li><a href="#shop" className="hover:text-neutral-900 transition-colors">HD Matte Foundation</a></li>
                            <li><a href="#shop" className="hover:text-neutral-900 transition-colors">Velvet Liquid Lipsticks</a></li>
                            <li><a href="#shop" className="hover:text-neutral-900 transition-colors">Glam Eyeshadow Palette</a></li>
                            <li><a href="#shop" className="hover:text-neutral-900 transition-colors">Liquid Highlighter</a></li>
                            <li><a href="#shop" className="hover:text-neutral-900 transition-colors">12 Pcs Brush Set</a></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-3">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900">
                            Visit Studio
                        </h4>
                        <div className="space-y-2 text-xs text-neutral-600 leading-relaxed">
                            <p>📍 Main Gulberg III, MM Alam Road, Lahore, Pakistan</p>
                            <p>📞 Phone: +92 300 1234567</p>
                            <p>✉️ Email: info@glamourbridal.com</p>
                            <p>🕒 Hours: Tue - Sun (11:00 AM - 8:00 PM)</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-neutral-100 py-6 px-4 sm:px-6 lg:px-12 bg-neutral-50/50">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
                    <p>© 2026 Glamour & Bridal Suite. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <a href="#privacy" className="hover:text-neutral-900 transition-colors">Privacy Policy</a>
                        <a href="#terms" className="hover:text-neutral-900 transition-colors">Terms of Service</a>
                        <a href="#booking" className="hover:text-neutral-900 transition-colors">Book Appointment</a>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;