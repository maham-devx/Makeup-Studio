'use client';

import React from 'react';
import Link from 'next/link';

export const Navbar: React.FC = () => {
    // Apna WhatsApp number yahan likhein (Country code ke sath, bina + ya 00 ke)
    // Example: 923001234567 (Pakistan ke liye)
    const whatsappNumber = "923001234567";

    // Jo message aap chahte hain ke user jab click kare to auto-type ho jaye
    const whatsappMessage = "Hi, I would like to book an appointment!";

    // Link generate karna
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-pink-100">
            <div className="bg-[#b56576] text-white text-xs text-center py-1.5 font-medium tracking-wide">
                ✨ Exclusive Bridal & Party Glam Packages Available — Book Your Slot Today! ✨
            </div>
            <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-200 to-rose-300 flex items-center justify-center border border-amber-400">
                        <svg className="w-5 h-5 text-[#b56576]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l2.4 6.6L21 11l-5.3 4.8 1.6 7.2-5.3-3.8-5.3 3.8 1.6-7.2L2 11l6.6-2.4z" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-serif text-xl font-bold text-gray-800 leading-tight">Dua's</span>
                        <span className="text-[9px] uppercase tracking-widest text-[#b56576] font-semibold">Makeup & Studio</span>
                    </div>
                </Link>

                <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-700">
                    <li><Link href="/" className="hover:text-[#b56576] transition-colors">Home</Link></li>
                    <li><Link href="/about" className="hover:text-[#b56576] transition-colors">About Us</Link></li>
                    <li><Link href="/services" className="hover:text-[#b56576] transition-colors">Our Services</Link></li>
                    <li><Link href="/gallery" className="hover:text-[#b56576] transition-colors">Gallery</Link></li>
                    <li><Link href="/catalogue" className="hover:text-[#b56576] transition-colors">Makeup Catalogue</Link></li>
                </ul>

                {/* Updated WhatsApp Button */}
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#b56576] text-white text-xs uppercase font-semibold tracking-wider px-5 py-2.5 rounded-full hover:bg-gray-800 transition-transform active:scale-95 shadow-md shadow-rose-200"
                >
                    Book Now
                </a>
            </nav>
        </header>
    );
};