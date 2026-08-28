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

const packages: PackageItem[] = [
    {
        id: '1',
        title: 'Royal Bridal Package',
        price: 'Rs. 45,000',
        description: 'Complete luxury HD airbrush makeover for your wedding day with eyelashes, hair styling, dupatta/jewelry setting, and nail color.',
        image: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&q=80&w=800',
        popular: true,
        duration: '3.5 - 4 Hours',
        features: [
            'Full HD Airbrush / Traditional Base',
            'High-End 3D Silk Mink Lashes',
            'Bridal Hair Styling & Hair Extensions',
            'Dupatta, Matha Patti & Heavy Jewelry Pins',
            'Nail Polish Application',
        ],
    },
    {
        id: '2',
        title: 'Signature Party Makeup',
        price: 'Rs. 15,000',
        description: 'Soft or glam contour base, customized eye look, false lashes, and blowdry or curls.',
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800',
        duration: '1.5 - 2 Hours',
        features: [
            'HD Glam Base & Sculpted Contour',
            'Custom Eye Makeup Look',
            'Premium False Eyelashes',
            'Hair Styling (Blowdry, Soft Curls, or Straightening)',
        ],
    },
    {
        id: '3',
        title: 'Engagement / Nikkah Glam',
        price: 'Rs. 25,000',
        description: 'Radiant, natural dewy base with romantic eye makeup, hair styling, and flower setting.',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
        duration: '2.5 Hours',
        features: [
            'Dewy Skin Glow Finish',
            'Soft Soft-Focus Eye Makeup',
            'Signature Hair Styling',
            'Fresh Flower Fixation / Dupatta Draping',
        ],
    },
    {
        id: '4',
        title: 'Bridal Mehndi Package',
        price: 'Rs. 20,000',
        description: 'Organic henna application for hands (up to elbows) and feet, paired with light party makeup.',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800',
        duration: '3 Hours',
        features: [
            'Organic Natural Stain Mehndi (Hands & Feet)',
            'Light Dewy Party Makeup',
            'Basic Hair Curls or Braid',
            'Eyelash Application',
        ],
    },
    {
        id: '5',
        title: 'Model / Editorial Makeup',
        price: 'Rs. 18,000',
        description: 'Camera-ready HD makeup designed for photoshoots, featuring creative eye art and touch-up support.',
        image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800',
        duration: '2 Hours (Includes Studio Touchups)',
        features: [
            'Camera & Lighting Optimized Base',
            'Creative / Graphic Eye Art',
            'High-Definition Contour & Lip Sculpting',
            'On-Set Touchup Assistance',
        ],
    },
];

export const MakeupPackages: React.FC = () => {
    const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null);

    const handleOpenModal = (pkg: PackageItem) => {
        setSelectedPackage(pkg);
    };

    const handleCloseModal = () => {
        setSelectedPackage(null);
    };

    return (
        <section className="min-h-screen bg-neutral-50 text-neutral-900 py-20 px-4 sm:px-6 lg:px-12 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16 space-y-3">
                    <span className="text-xs font-semibold tracking-[0.25em] uppercase text-neutral-500">
                        Exclusive Beauty Solutions
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-serif font-light text-neutral-900 tracking-wide">
                        Makeup Services & Packages
                    </h2>
                    <div className="w-16 h-[2px] bg-neutral-900 mx-auto mt-4" />
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => handleOpenModal(item)}
                            className="group cursor-pointer rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-xl hover:border-neutral-900 transition-all duration-300 overflow-hidden flex flex-col justify-between"
                        >
                            <div>
                                {/* Card Image */}
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

                                {/* Card Short Info */}
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

                {/* Details Modal / Popup Drawer */}
                {selectedPackage && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
                        <div
                            className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-neutral-200 animate-in fade-in zoom-in-95 duration-200"
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

                            {/* Modal Banner Image */}
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

                            {/* Modal Details Content */}
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
                                        Services Included:
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

                                {/* Modal CTA Buttons */}
                                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                                    <button
                                        onClick={() => {
                                            alert(`Booking confirmed for ${selectedPackage.title}`);
                                            handleCloseModal();
                                        }}
                                        className="flex-1 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs tracking-widest uppercase rounded-xl transition-all shadow-lg"
                                    >
                                        Confirm Booking
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

export default MakeupPackages;