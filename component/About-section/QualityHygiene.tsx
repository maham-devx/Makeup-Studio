'use client';

import React from 'react';
import { FaPumpSoap, FaUserTie, FaGem } from 'react-icons/fa6';

export default function QualityHygiene() {
    const pillars = [
        {
            title: 'Clean & Sanitized',
            tagline: 'Spotless Standards',
            description: 'Sterilized single-use tools, hospital-grade disinfection, and daily deep cleaning routines to ensure 100% safety.',
            icon: <FaPumpSoap className="text-2xl text-rose-600" />,
            image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
        },
        {
            title: 'Professional Experts',
            tagline: 'Certified Care',
            description: 'Our team consists of highly trained artists who prioritize gentleness, safety protocols, and personalized perfection.',
            icon: <FaUserTie className="text-2xl text-rose-600" />,
            image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
        },
        {
            title: 'Premium Products',
            tagline: 'Luxury Quality',
            description: 'We exclusively use cruelty-free, dermatologically tested, organic, and top-tier global beauty brands for your skin and hair.',
            icon: <FaGem className="text-2xl text-rose-600" />,
            image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
        },
    ];

    return (
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-rose-50/20 border-b border-rose-50">
            <div className="max-w-7xl mx-auto space-y-12">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto space-y-3">
                    <span className="text-rose-600 text-xs font-bold uppercase tracking-widest bg-rose-100 px-3.5 py-1.5 rounded-full inline-block">
                        Safety & Excellence
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
                        Quality & <span className="text-rose-600">Hygiene</span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600">
                        We hold ourselves to the highest standards so you can relax with complete peace of mind.
                    </p>
                </div>

                {/* 3 Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl overflow-hidden border border-rose-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                        >
                            {/* Image Box */}
                            <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-md border border-rose-100">
                                    {item.icon}
                                </div>
                            </div>

                            {/* Text Details */}
                            <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                                <div>
                                    <span className="text-[11px] font-bold text-rose-600 uppercase tracking-wider">
                                        {item.tagline}
                                    </span>
                                    <h3 className="text-xl font-bold text-gray-900 mt-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-2">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}