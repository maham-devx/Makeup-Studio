'use client';

import React from 'react';
import {
    FaScissors,
    FaWandMagicSparkles,
    FaFaceSmile,
    FaHandSparkles,
    FaArrowRight
} from 'react-icons/fa6';

export default function LuxuryBeautyMenu() {
    const whatsappNumber = "923001234567"; // Apna WhatsApp Number Yahan Daalein

    const categories = [
        {
            id: 'hair',
            badge: 'Studio 01',
            title: 'Hair Studio',
            icon: <FaScissors className="text-rose-500 text-lg" />,
            image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80',
            tagline: 'Precision cuts, custom blends & luxury hair care',
            services: [
                'Signature Haircut',
                'Blowout & Styling',
                'Hair Color',
                'Highlights & Balayage',
                'Keratin & Smoothening',
                'Hair Spa & Repair',
            ],
            ctaText: 'View Hair Menu',
            accentColor: 'from-rose-500/10 to-pink-500/5',
        },
        {
            id: 'makeup',
            badge: 'Studio 02',
            title: 'Makeup Studio',
            icon: <FaWandMagicSparkles className="text-rose-500 text-lg" />,
            image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80',
            tagline: 'Flawless glam for every celebration & big day',
            services: [
                'Soft Glam Makeup',
                'HD Makeup',
                'Party Makeup',
                'Engagement Makeup',
                'Bridal Makeup',
                'Photoshoot Makeup',
            ],
            ctaText: 'View Makeup Menu',
            accentColor: 'from-purple-500/10 to-rose-500/5',
        },
        {
            id: 'skin',
            badge: 'Studio 03',
            title: 'Skin & Glow',
            icon: <FaFaceSmile className="text-rose-500 text-lg" />,
            image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
            tagline: 'Deep restoration & glowing aesthetic facials',
            services: [
                'Deep Cleansing Facial',
                'Hydrating Facial',
                'Glow Treatment',
                'Acne Care',
                'Skin Refresh Treatment',
                'Premium Facial',
            ],
            ctaText: 'Explore Skin Care',
            accentColor: 'from-emerald-500/10 to-teal-500/5',
        },
        {
            id: 'nails',
            badge: 'Studio 04',
            title: 'Nails & Beauty',
            icon: <FaHandSparkles className="text-rose-500 text-lg" />,
            image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80',
            tagline: 'Exquisite nail art & relaxing pampering sessions',
            services: [
                'Classic Manicure',
                'Luxury Pedicure',
                'Gel Polish',
                'Nail Extensions',
                'Nail Art',
                'Hand & Foot Care',
            ],
            ctaText: 'View Nails Menu',
            accentColor: 'from-amber-500/10 to-rose-500/5',
        },
    ];

    return (
        <section className="bg-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-rose-50">
            <div className="max-w-7xl mx-auto space-y-16">

                {/* SECTION HEADER */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <span className="text-rose-600 text-xs font-bold uppercase tracking-widest bg-rose-50 px-4 py-1.5 rounded-full inline-block border border-rose-100 shadow-sm">
                        Curated Services
                    </span>
                    <h2 className="text-4xl sm:text-6xl font-black text-gray-900 tracking-tight leading-tight">
                        Our Beauty <span className="bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent">Menu</span>
                    </h2>
                    <p className="text-base sm:text-xl text-gray-600 font-normal">
                        Everything you need to look good, feel confident & shine.
                    </p>
                </div>

                {/* BEAUTY MENU GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((item) => (
                        <div
                            key={item.id}
                            className="group bg-white rounded-3xl overflow-hidden border border-rose-100/80 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between"
                        >
                            <div>
                                {/* Visual Image Header */}
                                <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Dark Gradient Overlay for Readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent"></div>

                                    {/* Top Badge */}
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-gray-900 shadow-md border border-white/40">
                                        {item.badge}
                                    </div>

                                    {/* Title & Icon overlaid on image bottom */}
                                    <div className="absolute bottom-4 left-4 right-4 space-y-1 text-white">
                                        <div className="flex items-center space-x-2">
                                            <div className="p-1.5 bg-white/20 backdrop-blur-md rounded-xl text-white">
                                                {item.icon}
                                            </div>
                                            <h3 className="text-2xl font-black tracking-wide">
                                                {item.title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                {/* Service List */}
                                <div className="p-6 space-y-5">
                                    <p className="text-xs text-gray-500 italic font-medium leading-relaxed border-b border-rose-50 pb-3">
                                        {item.tagline}
                                    </p>

                                    <ul className="space-y-3">
                                        {item.services.map((service, idx) => (
                                            <li key={idx} className="flex items-center text-xs sm:text-sm font-semibold text-gray-700 space-x-2.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 group-hover:scale-125 transition-transform"></span>
                                                <span className="group-hover:text-gray-900 transition-colors">{service}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Bottom CTA Button linked with WhatsApp */}
                            <div className="p-6 pt-0">
                                <a
                                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello! I want to check details for ${item.title} services.`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-between px-5 py-3.5 bg-rose-50 group-hover:bg-rose-600 text-rose-600 group-hover:text-white rounded-2xl text-xs font-bold transition-all duration-300 shadow-sm"
                                >
                                    <span>{item.ctaText}</span>
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}