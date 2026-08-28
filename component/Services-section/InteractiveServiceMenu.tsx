'use client';

import React, { useState } from 'react';
import { FaCircleCheck, FaWhatsapp, FaArrowRight } from 'react-icons/fa6';

export default function InteractiveServiceMenu() {
    const whatsappNumber = "923001234567"; // Apna WhatsApp number daalein

    const services = [
        {
            id: 'haircut',
            name: 'Haircut & Styling',
            price: '$25',
            desc: 'Precision cutting, wash, and signature blow-dry styling customized to your face structure.',
            image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80',
        },
        {
            id: 'color',
            name: 'Hair Color & Highlights',
            price: '$60',
            desc: 'Full root touch-up, vibrant glossing, or custom balayage with ammonia-free products.',
            image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
        },
        {
            id: 'facial',
            name: 'Rejuvenating Facial',
            price: '$40',
            desc: 'Deep cleansing, organic exfoliation, and a hydrating mask for an instant glow.',
            image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
        },
        {
            id: 'makeup',
            name: 'Glamour Makeup',
            price: '$80',
            desc: 'Full event glamour, high-definition airbrush finish, and premium lash application.',
            image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80',
        },
    ];

    const [activeService, setActiveService] = useState(services[0]);

    const whyChooseUs = [
        {
            title: 'Professional Experts',
            desc: 'Certified stylists and skin specialists with years of high-end salon experience.',
        },
        {
            title: 'Premium Products',
            desc: '100% cruelty-free, organic, and dermatologically approved global beauty brands.',
        },
        {
            title: 'Hygienic Environment',
            desc: 'Hospital-grade tool sterilization, single-use kits, and pristine clean spaces.',
        },
        {
            title: 'Personalized Care',
            desc: 'Customized beauty treatments tailored specifically to your hair type and skin profile.',
        },
    ];

    return (
        <div className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-rose-50">
            <div className="max-w-7xl mx-auto space-y-20">

                {/* SECTION 1: INTERACTIVE SERVICE MENU */}
                <section className="space-y-10">

                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto space-y-3">
                        <span className="text-rose-600 text-xs font-bold uppercase tracking-widest bg-rose-50 px-3.5 py-1.5 rounded-full inline-block">
                            Price List & Menu
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
                            Service <span className="text-rose-600">Menu</span>
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600">
                            Hover or tap on any service to view full details and preview.
                        </p>
                    </div>

                    {/* Interactive Menu Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                        {/* Left: Interactive Menu List (7 Cols) */}
                        <div className="lg:col-span-7 bg-rose-50/20 rounded-3xl p-6 sm:p-8 border border-rose-100 flex flex-col justify-between space-y-4">
                            {services.map((service) => {
                                const isActive = activeService.id === service.id;
                                return (
                                    <div
                                        key={service.id}
                                        onMouseEnter={() => setActiveService(service)}
                                        onClick={() => setActiveService(service)}
                                        className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${isActive
                                                ? 'bg-white border-rose-200 shadow-md scale-[1.01]'
                                                : 'bg-white/50 border-transparent hover:bg-white hover:border-rose-100'
                                            }`}
                                    >
                                        <div className="flex items-center justify-between gap-4">
                                            <div className="space-y-1">
                                                <h3 className={`text-lg font-bold transition-colors ${isActive ? 'text-rose-600' : 'text-gray-900'}`}>
                                                    {service.name}
                                                </h3>
                                                <p className="text-xs sm:text-sm text-gray-500 line-clamp-1">
                                                    {service.desc}
                                                </p>
                                            </div>

                                            <div className="text-right flex-shrink-0">
                                                <span className="text-xl font-black text-gray-900 block">
                                                    {service.price}
                                                </span>
                                                <span className={`text-[11px] font-bold inline-flex items-center gap-1 ${isActive ? 'text-rose-600' : 'text-gray-400'}`}>
                                                    Details <FaArrowRight className="text-[9px]" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Right: Dynamic Visual Card (5 Cols) */}
                        <div className="lg:col-span-5 bg-white rounded-3xl border border-rose-100 shadow-lg overflow-hidden flex flex-col justify-between group">
                            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100">
                                <img
                                    src={activeService.image}
                                    alt={activeService.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 bg-rose-600 text-white font-extrabold text-sm px-4 py-1.5 rounded-full shadow-md">
                                    {activeService.price}
                                </div>
                            </div>

                            <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                                <div className="space-y-2">
                                    <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
                                        Selected Service
                                    </span>
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        {activeService.name}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                        {activeService.desc}
                                    </p>
                                </div>

                                <a
                                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello! I want to book an appointment for ${activeService.name} (${activeService.price}).`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-emerald-950/20 transition-all duration-300"
                                >
                                    <FaWhatsapp className="text-base" />
                                    <span>Book {activeService.name}</span>
                                </a>
                            </div>
                        </div>

                    </div>

                </section>

                {/* SECTION 2: WHY CHOOSE US? */}
                <section className="bg-rose-50/30 rounded-3xl p-8 sm:p-12 border border-rose-100 space-y-10">

                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto space-y-3">
                        <span className="text-rose-600 text-xs font-bold uppercase tracking-widest bg-rose-100 px-3.5 py-1.5 rounded-full inline-block">
                            The Salon Standard
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
                            Why <span className="text-rose-600">Choose Us?</span>
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600">
                            Your safety, comfort, and satisfaction are at the heart of everything we do.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whyChooseUs.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm hover:shadow-md transition-shadow duration-300 space-y-3"
                            >
                                <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center">
                                    <FaCircleCheck className="text-rose-600 text-xl" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">
                                    {item.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </section>

            </div>
        </div>
    );
}