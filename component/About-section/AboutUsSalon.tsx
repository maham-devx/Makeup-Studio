'use client';

import React from 'react';
import { FaAward, FaHeart, FaSmile } from 'react-icons/fa';

export default function AboutUsSalon() {
    return (
        <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-rose-50">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* Left Column: Beautiful Salon Image */}
                <div className="relative">
                    <div className="relative h-[380px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
                        <img
                            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1000&q=80"
                            alt="Beautiful Luxury Salon"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    </div>

                    {/* Floating Experience Badge */}
                    <div className="absolute -bottom-6 -right-2 sm:right-6 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-rose-100 flex items-center space-x-4">
                        <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center text-xl font-bold">
                            <FaAward />
                        </div>
                        <div>
                            <p className="text-xl font-black text-gray-900">10+ Years</p>
                            <p className="text-xs text-gray-500 font-medium">Of Excellence</p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Heading & Short Introduction */}
                <div className="space-y-6">
                    <div className="space-y-2">
                        <span className="text-rose-600 text-xs font-bold uppercase tracking-widest bg-rose-50 px-3.5 py-1.5 rounded-full inline-block">
                            About Our Salon
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                            Your Beauty, <br />
                            <span className="text-rose-600">Our Passion</span>
                        </h2>
                    </div>

                    {/* Short Introduction */}
                    <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
                        Welcome to our sanctuary of style and wellness. Founded with a vision to redefine beauty care, our salon blends modern techniques with personalized attention. We believe everyone deserves to feel confident, radiant, and valued every single day.
                    </p>

                    <p className="text-sm sm:text-base text-gray-500 font-normal leading-relaxed">
                        Our team of certified stylists and beauty experts work dedicatedly to highlight your unique features using eco-friendly, premium products in a relaxing atmosphere.
                    </p>

                    {/* Key Highlights */}
                    <div className="grid grid-cols-2 gap-4 pt-2">
                        <div className="flex items-center space-x-3 bg-rose-50/50 p-3.5 rounded-2xl border border-rose-100">
                            <FaHeart className="text-rose-500 text-lg flex-shrink-0" />
                            <span className="text-xs sm:text-sm font-bold text-gray-800">Customized Care</span>
                        </div>
                        <div className="flex items-center space-x-3 bg-rose-50/50 p-3.5 rounded-2xl border border-rose-100">
                            <FaSmile className="text-rose-500 text-lg flex-shrink-0" />
                            <span className="text-xs sm:text-sm font-bold text-gray-800">100% Satisfaction</span>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}