'use client';

import React, { useState } from 'react';

interface DealItem {
    id: string;
    title: string;
    price: string;
    description: string;
    image: string;
    badge?: string;
    useCase: string;
    features: string[];
    duration: string;
}

const mehndiMayunDeal: DealItem = {
    id: 'mehndi-mayun-1',
    title: 'Bridal Mehndi & Mayun Deal',
    price: 'Rs. 22,000',
    description: 'Traditional glowy base, light hair braid/up-do, organic bridal henna (hands & feet).',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800',
    badge: 'Special Ceremony Deal',
    useCase: 'Mehndi, Mayun, aur Dholki ceremonies ke liye.',
    duration: '3 - 3.5 Hours',
    features: [
        'Traditional Dewy & Glowy Base Makeover',
        'Customized Light Hair Braid or Soft Up-Do',
        'Organic Bridal Henna Application (Hands & Feet)',
        'Fresh Flower Insertion & Setting Support',
        'Eyelash Application & Long-Hold Fixer Spray',
    ],
};

export const BridalMehndiMayunDeal: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => setIsOpen(true);
    const handleCloseModal = () => setIsOpen(false);

    const handleWhatsAppBooking = () => {
        const phoneNumber = '923001234567'; // Salon WhatsApp number
        const message = `Hello! I want to book the *${mehndiMayunDeal.title}* (${mehndiMayunDeal.price}) for my Mehndi/Mayun ceremony. Please let me know available slots.`;
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <section className="min-h-screen bg-white text-neutral-900 py-20 px-4 sm:px-6 lg:px-12 font-sans">
            <div className="max-w-4xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16 space-y-3">
                    <span className="text-xs font-semibold tracking-[0.25em] uppercase text-neutral-500">
                        Ceremony Exclusive
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-serif font-light text-neutral-900 tracking-wide">
                        Bridal Mehndi & Mayun Special
                    </h2>
                    <div className="w-16 h-[2px] bg-neutral-900 mx-auto mt-4" />
                </div>

                {/* Featured Deal Card */}
                <div
                    onClick={handleOpenModal}
                    className="group cursor-pointer rounded-3xl bg-white border border-neutral-200 shadow-sm hover:shadow-2xl hover:border-neutral-900 transition-all duration-300 overflow-hidden flex flex-col md:flex-row justify-between"
                >
                    {/* Card Image */}
                    <div className="relative h-72 md:h-auto md:w-1/2 overflow-hidden bg-neutral-100">
                        <img
                            src={mehndiMayunDeal.image}
                            alt={mehndiMayunDeal.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {mehndiMayunDeal.badge && (
                            <span className="absolute top-4 left-4 bg-neutral-900 text-white text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                                {mehndiMayunDeal.badge}
                            </span>
                        )}
                    </div>

                    {/* Card Short Details */}
                    <div className="p-8 md:w-1/2 flex flex-col justify-between space-y-6">
                        <div className="space-y-4">
                            <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                                {mehndiMayunDeal.useCase}
                            </span>

                            <h3 className="text-2xl sm:text-3xl font-serif font-medium text-neutral-900 group-hover:text-neutral-700 transition-colors">
                                {mehndiMayunDeal.title}
                            </h3>

                            <div className="text-3xl font-serif font-semibold text-neutral-900">
                                {mehndiMayunDeal.price}
                            </div>

                            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                                {mehndiMayunDeal.description}
                            </p>
                        </div>

                        {/* Action Button */}
                        <div>
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleOpenModal();
                                }}
                                className="w-full py-3.5 text-xs tracking-[0.15em] font-semibold uppercase transition-all duration-300 rounded-xl bg-neutral-100 text-neutral-900 hover:bg-neutral-900 hover:text-white"
                            >
                                View Details & Book
                            </button>
                        </div>
                    </div>
                </div>

                {/* Modal / Popup Detail View */}
                {isOpen && (
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

                            {/* Modal Banner Image */}
                            <div className="relative h-72 w-full">
                                <img
                                    src={mehndiMayunDeal.image}
                                    alt={mehndiMayunDeal.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6 text-white">
                                    <span className="text-xs font-semibold tracking-widest uppercase bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                                        Estimated Time: {mehndiMayunDeal.duration}
                                    </span>
                                    <h3 className="text-3xl font-serif font-bold mt-2">
                                        {mehndiMayunDeal.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Modal Body Info */}
                            <div className="p-6 sm:p-8 space-y-6">
                                <div>
                                    <div className="text-3xl font-serif font-bold text-neutral-900 mb-2">
                                        {mehndiMayunDeal.price}
                                    </div>
                                    <p className="text-sm text-neutral-600 leading-relaxed">
                                        {mehndiMayunDeal.description}
                                    </p>
                                    <p className="text-xs text-amber-700 font-medium mt-2">
                                        <strong>Ideal for:</strong> {mehndiMayunDeal.useCase}
                                    </p>
                                </div>

                                <div className="border-t border-neutral-200 pt-4">
                                    <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 mb-3">
                                        Services Included in Deal:
                                    </h4>
                                    <ul className="space-y-2">
                                        {mehndiMayunDeal.features.map((feature, idx) => (
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
                                        onClick={handleWhatsAppBooking}
                                        className="flex-1 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs tracking-widest uppercase rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                                    >
                                        <span>Confirm Booking via WhatsApp</span>
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

export default BridalMehndiMayunDeal;