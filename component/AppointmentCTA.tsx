'use client';

import React from 'react';
import { FaCalendarCheck, FaPhone, FaLocationDot, FaWhatsapp } from 'react-icons/fa6';

export default function AppointmentCTA() {
    // Apna WhatsApp number Yahan daalein (Country code ke sath, bina '+' ya '-' ke)
    const whatsappNumber = "923001234567";
    const defaultMessage = encodeURIComponent("Hello! I would like to book an appointment for a salon service.");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

    return (
        <section className="relative overflow-hidden bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
            {/* Background Glow Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-600/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative max-w-5xl mx-auto text-center space-y-8">

                {/* Badge */}
                <div className="inline-flex items-center space-x-2 bg-rose-500/10 border border-rose-500/30 px-4 py-1.5 rounded-full backdrop-blur-md">
                    <FaCalendarCheck className="text-rose-400 text-xs" />
                    <span className="text-rose-300 text-xs font-bold uppercase tracking-widest">
                        Reserve Your Spot
                    </span>
                </div>

                {/* Main Heading */}
                <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
                    Ready for Your <br className="hidden sm:block" />
                    <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-rose-200 bg-clip-text text-transparent">
                        Beauty Transformation?
                    </span>
                </h2>

                {/* Description */}
                <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
                    Book your session today with our master stylists and treat yourself to a luxurious, personalized salon experience tailored just for you.
                </p>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-9 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold rounded-2xl shadow-xl shadow-emerald-950/40 hover:scale-105 transition-all duration-300 group"
                    >
                        <FaWhatsapp className="text-2xl group-hover:rotate-12 transition-transform duration-300" />
                        <span className="tracking-wide uppercase text-sm">Book Via WhatsApp</span>
                    </a>

                    <a
                        href="tel:+923001234567"
                        className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold rounded-2xl backdrop-blur-md transition-all duration-300 text-sm"
                    >
                        <FaPhone className="text-rose-400 text-xs" />
                        <span>Call Us Directly</span>
                    </a>
                </div>

                {/* Info Tags */}
                <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400 font-medium">
                    <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>Instant Confirmation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaLocationDot className="text-rose-500" />
                        <span>Prime City Location</span>
                    </div>
                </div>

            </div>
        </section>
    );
}