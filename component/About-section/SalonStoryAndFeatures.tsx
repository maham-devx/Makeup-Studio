'use client';

import React from 'react';
import { FaUserCheck, FaMedal, FaHandSparkles, FaCircleCheck } from 'react-icons/fa6';

export default function SalonStoryAndFeatures() {
    const features = [
        {
            icon: <FaUserCheck className="text-2xl text-rose-600" />,
            title: 'Experienced Stylists',
            description: 'Our team consists of certified, passionate professionals with years of expertise in high-end beauty care.',
        },
        {
            icon: <FaMedal className="text-2xl text-rose-600" />,
            title: 'Premium Quality',
            description: 'We strictly use top-tier, cruelty-free, and organic products to ensure your skin and hair stay healthy.',
        },
        {
            icon: <FaCircleCheck className="text-2xl text-rose-600" />,
            title: 'Personalized Care',
            description: 'Every treatment is customized to match your individual style, hair texture, and skin profile.',
        },
        {
            icon: <FaHandSparkles className="text-2xl text-rose-600" />,
            title: 'Uncompromised Hygiene',
            description: 'Sterilized tools, single-use kits, and pristine clean environments for your peace of mind.',
        },
    ];

    return (
        <div className="bg-white">

            {/* SECTION 1: OUR STORY */}
            <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-rose-50">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Story Text */}
                    <div className="space-y-6 order-2 lg:order-1">
                        <span className="text-rose-600 text-xs font-bold uppercase tracking-widest bg-rose-50 px-3.5 py-1.5 rounded-full inline-block">
                            Our Story
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                            A Journey Driven By <br />
                            <span className="text-rose-600">Passion & Transformation</span>
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
                            What started as a small dream with just two styling chairs has now grown into a premier luxury salon destination. Founded with the vision to make high-end beauty care welcoming and accessible, our journey has always been centered on authenticity and client happiness.
                        </p>
                        <p className="text-sm sm:text-base text-gray-500 font-normal leading-relaxed">
                            Over the years, we have served thousands of happy clients, continuously upgrading our techniques, adopting sustainable products, and creating a space where transformation feels effortless and relaxing.
                        </p>
                    </div>

                    {/* Story Image Grid */}
                    <div className="grid grid-cols-2 gap-4 order-1 lg:order-2">
                        <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                            <img
                                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
                                alt="Stylist working on client"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-lg border border-gray-100 mt-8">
                            <img
                                src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80"
                                alt="Salon products and interior"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* SECTION 2: WHY CHOOSE US? */}
            <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-rose-50/30">
                <div className="max-w-7xl mx-auto space-y-12">

                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto space-y-3">
                        <span className="text-rose-600 text-xs font-bold uppercase tracking-widest bg-rose-100 px-3.5 py-1.5 rounded-full inline-block">
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
                            The Standard Of <span className="text-rose-600">Excellence</span>
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600">
                            We prioritize your safety, satisfaction, and style through unmatched service standards.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-3xl border border-rose-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                            >
                                <div className="space-y-4">
                                    <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </div>
    );
}