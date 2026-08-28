'use client';

import React, { useState } from 'react';
import { FaScissors, FaFaceSmile, FaWandMagicSparkles, FaHandSparkles, FaCrown, FaSpa, FaArrowRight } from 'react-icons/fa6';

export default function ServicesAndExperience() {
    const [activeTab, setActiveTab] = useState('Hair');

    // WhatsApp Config
    const whatsappNumber = "923001234567"; // Apna number country code ke sath likhein
    const whatsappLink = (serviceName: string) =>
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello! I would like to book an appointment for ${serviceName}.`)}`;

    const categories = [
        { name: 'Hair', icon: <FaScissors /> },
        { name: 'Makeup', icon: <FaWandMagicSparkles /> },
        { name: 'Skin', icon: <FaFaceSmile /> },
        { name: 'Nails', icon: <FaHandSparkles /> },
        { name: 'Bridal', icon: <FaCrown /> },
        { name: 'Spa', icon: <FaSpa /> },
    ];

    const serviceData: Record<string, { title: string; image: string; description: string; price: string; features: string[] }> = {
        Hair: {
            title: 'Couture Hair Styling & Coloring',
            image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1000&q=80',
            description: 'Transform your look with precision haircuts, custom balayage blends, keratin treatments, and nourishing scalp therapies using organic hair care lines.',
            price: 'Starting from $45',
            features: ['Precision Cuts', 'Custom Balayage & Highlights', 'Keratin & Glossing', 'Organic Scalp Care'],
        },
        Makeup: {
            title: 'Glamour & Event Makeup',
            image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1000&q=80',
            description: 'Highlight your natural features with high-definition, airbrush, and party makeup crafted for long-lasting glow and picture-perfect finishes.',
            price: 'Starting from $60',
            features: ['HD & Airbrush Makeup', 'Soft Glam & Evening Looks', 'Lash Application', 'Skin Prep Treatment'],
        },
        Skin: {
            title: 'Rejuvenating Skin & Facials',
            image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1000&q=80',
            description: 'Restore your natural glow with customized deep-cleansing facials, hydra-facials, and anti-aging treatments tailored to your skin type.',
            price: 'Starting from $50',
            features: ['Deep Hydra Facials', 'Anti-Aging Therapy', 'Detox & Glow Masks', 'Dermat-Approved Products'],
        },
        Nails: {
            title: 'Luxury Manicure & Pedicure',
            image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1000&q=80',
            description: 'Pamper your hands and feet with soothing spa manicures, custom gel nail art, acrylic extensions, and paraffin wax hydration.',
            price: 'Starting from $30',
            features: ['Custom Gel Nail Art', 'Spa Mani & Pedi', 'Acrylic Extensions', 'Paraffin Wax Treatment'],
        },
        Bridal: {
            title: 'Ultimate Bridal Glow Packages',
            image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1000&q=80',
            description: 'Complete luxury bridal makeovers including pre-wedding skin regimens, signature hair design, makeup trials, and drape styling.',
            price: 'Custom Packages Available',
            features: ['Pre-Bridal Skincare', 'Signature Bridal Makeup', 'Hair & Jewelry Styling', 'Bridal Party Packages'],
        },
        Spa: {
            title: 'Relaxing Spa & Body Therapies',
            image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1000&q=80',
            description: 'Unwind with aromatherapy massages, detoxifying body scrubs, and soothing wellness therapies designed to melt away stress.',
            price: 'Starting from $70',
            features: ['Aromatherapy Massage', 'Detox Body Scrubs', 'Hot Stone Therapy', 'Relaxing Foot Spa'],
        },
    };

    const currentService = serviceData[activeTab];

    return (
        <div className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-12">

                {/* SECTION HEADER */}
                <div className="text-center max-w-3xl mx-auto space-y-3">
                    <span className="text-rose-600 text-xs font-bold uppercase tracking-widest bg-rose-50 px-3.5 py-1.5 rounded-full inline-block">
                        Our Services
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
                        Beauty, Care & <span className="text-rose-600">Confidence</span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600">
                        Select a service category to explore our specialized treatments and experiences.
                    </p>
                </div>

                {/* CATEGORY TABS */}
                <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
                    {categories.map((cat) => (
                        <button
                            key={cat.name}
                            onClick={() => setActiveTab(cat.name)}
                            className={`flex items-center space-x-2 px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${activeTab === cat.name
                                    ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30 scale-105'
                                    : 'bg-rose-50/60 text-gray-700 hover:bg-rose-100'
                                }`}
                        >
                            <span className="text-base">{cat.icon}</span>
                            <span>{cat.name}</span>
                        </button>
                    ))}
                </div>

                {/* FEATURED EXPERIENCE DISPLAY */}
                <div className="bg-rose-50/30 rounded-3xl p-6 sm:p-10 border border-rose-100 shadow-sm transition-all duration-500">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                        {/* Large Image */}
                        <div className="lg:col-span-7 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md group">
                            <img
                                src={currentService.image}
                                alt={currentService.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-rose-600 shadow-sm">
                                Featured Experience
                            </div>
                        </div>

                        {/* Text + CTA */}
                        <div className="lg:col-span-5 space-y-6">
                            <div>
                                <span className="text-xs font-extrabold text-rose-600 uppercase tracking-widest">
                                    {activeTab} Specialization
                                </span>
                                <h3 className="text-2xl sm:text-4xl font-black text-gray-900 mt-1 leading-tight">
                                    {currentService.title}
                                </h3>
                            </div>

                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                {currentService.description}
                            </p>

                            {/* Feature Points */}
                            <div className="grid grid-cols-2 gap-2 pt-2">
                                {currentService.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center space-x-2 text-xs font-semibold text-gray-700">
                                        <span className="w-1.5 h-1.5 rounded-full bg-rose-600"></span>
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Price & Booking Link */}
                            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-rose-200/60">
                                <div>
                                    <span className="text-[10px] uppercase text-gray-400 font-bold tracking-wider">Pricing</span>
                                    <p className="text-lg font-bold text-gray-900">{currentService.price}</p>
                                </div>

                                <a
                                    href={whatsappLink(`${activeTab} - ${currentService.title}`)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-rose-600/20 transition-all duration-300"
                                >
                                    <span>Book This Service</span>
                                    <FaArrowRight />
                                </a>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}