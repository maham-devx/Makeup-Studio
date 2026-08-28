'use client';

import React, { useState } from 'react';

interface Feature {
    name: string;
}

interface PackageItem {
    id: string;
    title: string;
    price: string;
    description: string;
    image: string;
    popular?: boolean;
    features: string[];
    duration: string;
}

const hairAndBodyPackages: PackageItem[] = [
    {
        id: '1',
        title: 'Protein Hair Treatment',
        price: 'Rs. 12,000',
        description: 'Deep conditioning wash, protein mask, and steam to repair frizzy and damaged hair.',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
        duration: '1.5 - 2 Hours',
        features: [
            'Deep Cleansing Scalp & Hair Wash',
            'Concentrated Protein Repair Mask',
            'Hydrating Steam Therapy',
            'Blowdry & Shine Seal Finish',
        ],
    },
    {
        id: '2',
        title: 'Keratin Smoothing Treatment',
        price: 'Rs. 18,000',
        description: 'Semi-permanent smoothing treatment to eliminate frizz and make hair silky and straight.',
        image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
        popular: true,
        duration: '2.5 - 3 Hours',
        features: [
            'Frizz Elimination & Smooth Texture',
            'Formaldehyde-Free Safe Formula',
            'Long-lasting Silky & Straight Result (Up to 4 Months)',
            'Includes Post-Treatment Hair Wash Protocol',
        ],
    },
    {
        id: '3',
        title: 'Event Hair Styling',
        price: 'Rs. 4,000',
        description: 'Customized styling including Hollywood waves, up-dos, braids, or textured curls.',
        image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800',
        duration: '45 Mins - 1 Hour',
        features: [
            'Hollywood Waves / Textured Glam Curls',
            'Bridal & Party Up-Dos / Modern Braids',
            'Hair Extension Placement Support',
            'Long-Hold Setting Spray & Shine Seal',
        ],
    },
    {
        id: '4',
        title: 'Full Body Waxing',
        price: 'Rs. 8,000',
        description: 'Complete arms, legs, and underarms hair removal using soothing soft wax.',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800',
        duration: '1 Hour',
        features: [
            'Full Arms & Full Legs Waxing',
            'Underarms Hair Removal',
            'Hygienic Single-Use Applicators',
            'Post-Wax Soothing Oil Application',
        ],
    },
    {
        id: '5',
        title: 'RICA Sensitive Body Wax',
        price: 'Rs. 11,000',
        description: 'Organic fruit wax treatment with anti-redness care for sensitive skin.',
        image: 'downloadnm.png',
        duration: '1.15 Hours',
        features: [
            'Colophony-Free RICA Italian Wax',
            'Gentle Hair Removal for Sensitive Skin',
            'Anti-Redness & Hydrating Aloe Vera Gel Finish',
            'Soothes & Prevents In-grown Hair',
        ],
    },
];

export const HairAndBodyCare: React.FC = () => {
    const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null);

    const handleOpenModal = (pkg: PackageItem) => {
        setSelectedPackage(pkg);
    };

    const handleCloseModal = () => {
        setSelectedPackage(null);
    };

    const handleWhatsAppBooking = (pkg: PackageItem) => {
        const phoneNumber = '923001234567'; // Change to your salon WhatsApp number
        const message = `Hello! I would like to book the *${pkg.title}* (${pkg.price}). Please share available slots.`;
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <section className="min-h-screen bg-white text-neutral-900 py-20 px-4 sm:px-6 lg:px-12 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16 space-y-3">
                    <span className="text-xs font-semibold tracking-[0.25em] uppercase text-neutral-500">
                        Premium Care & Rejuvenation
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-serif font-light text-neutral-900 tracking-wide">
                        Hair & Body Care
                    </h2>
                    <div className="w-16 h-[2px] bg-neutral-900 mx-auto mt-4" />
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {hairAndBodyPackages.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => handleOpenModal(item)}
                            className="group cursor-pointer rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-2xl hover:border-neutral-900 transition-all duration-300 overflow-hidden flex flex-col justify-between"
                        >
                            <div>
                                {/* Image Box */}
                                <div className="relative h-64 w-full overflow-hidden bg-neutral-100">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {item.popular && (
                                        <span className="absolute top-4 right-4 bg-neutral-900 text-white text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                                            Most Popular
                                        </span>
                                    )}
                                </div>

                                {/* Card Content */}
                                <div className="p-6 space-y-3">
                                    <h3 className="text-xl font-serif font-medium text-neutral-900 group-hover:text-neutral-700 transition-colors">
                                        {item.title}
                                    </h3>
                                    <div className="text-2xl font-serif font-semibold text-neutral-900">
                                        {item.price}
                                    </div>
                                    <p className="text-xs text-neutral-600 leading-relaxed line-clamp-2">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            {/* Action Button */}
                            <div className="p-6 pt-0">
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleOpenModal(item);
                                    }}
                                    className="w-full py-3 text-xs tracking-[0.15em] font-semibold uppercase transition-all duration-300 rounded-lg bg-neutral-100 text-neutral-900 hover:bg-neutral-900 hover:text-white"
                                >
                                    View Details & Book
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal / Popup Detail View */}
                {selectedPackage && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
                        onClick={handleCloseModal}
                    >
                        <div
                            className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-neutral-200 transition-all transform duration-200"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={handleCloseModal}
                                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-neutral-200 text-neutral-800 transition-colors shadow-md"
                                aria-label="Close modal"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Modal Top Image */}
                            <div className="relative h-72 w-full">
                                <img
                                    src={selectedPackage.image}
                                    alt={selectedPackage.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6 text-white">
                                    <span className="text-xs font-semibold tracking-widest uppercase bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                                        Duration: {selectedPackage.duration}
                                    </span>
                                    <h3 className="text-3xl font-serif font-bold mt-2">
                                        {selectedPackage.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Modal Body Info */}
                            <div className="p-6 sm:p-8 space-y-6">
                                <div>
                                    <div className="text-3xl font-serif font-bold text-neutral-900 mb-2">
                                        {selectedPackage.price}
                                    </div>
                                    <p className="text-sm text-neutral-600 leading-relaxed">
                                        {selectedPackage.description}
                                    </p>
                                </div>

                                <div className="border-t border-neutral-200 pt-4">
                                    <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 mb-3">
                                        Service Includes:
                                    </h4>
                                    <ul className="space-y-2">
                                        {selectedPackage.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-xs text-neutral-700">
                                                <span className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center text-[10px] font-bold">
                                                    ✓
                                                </span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Booking & Close Buttons */}
                                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                                    <button
                                        onClick={() => handleWhatsAppBooking(selectedPackage)}
                                        className="flex-1 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs tracking-widest uppercase rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                                    >
                                        <span>Book via WhatsApp</span>
                                    </button>
                                    <button
                                        onClick={handleCloseModal}
                                        className="py-3.5 px-6 border border-neutral-300 text-neutral-700 font-semibold text-xs tracking-widest uppercase rounded-xl hover:bg-neutral-100 transition-all"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                )}

            </div>
        </section>
    );
};

export default HairAndBodyCare;