'use client';

import React, { useState } from 'react';
import {
    FaWandMagicSparkles,
    FaCrown,
    FaCamera,
    FaEye,
    FaGem,
    FaHeart,
    FaClock,
    FaWhatsapp,
    FaXmark,
    FaUserCheck
} from 'react-icons/fa6';

export default function LuxuryMakeupCatalog() {
    const [activeTab, setActiveTab] = useState<'all' | 'signature' | 'bridal' | 'party' | 'hd' | 'eyes' | 'addons'>('all');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const whatsappNumber = "923001234567"; // Apna WhatsApp Number Yahan Replace Karein

    const catalogItems = [
        // 1. Signature Makeup
        {
            id: 101,
            category: 'signature',
            title: 'Soft Glam Makeup',
            price: 'Rs. 8,500',
            duration: '60 min',
            desc: 'Subtle enhancement with glowing skin, neutral eye tones, and soft nude lips.',
            image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80',
        },
        {
            id: 102,
            category: 'signature',
            title: 'Full Glam Makeup',
            price: 'Rs. 12,000',
            duration: '90 min',
            desc: 'High drama look with contouring, bold eyes, full-coverage finish, and statement lips.',
            image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80',
        },

        // 2. Bridal Makeup
        {
            id: 201,
            category: 'bridal',
            title: 'Bridal HD Glam',
            price: 'Rs. 45,000',
            duration: '180 min',
            desc: 'Flawless, camera-ready bridal look designed to last all day with luxury HD products.',
            image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
        },
        {
            id: 202,
            category: 'bridal',
            title: 'Nikah / Engagement Makeup',
            price: 'Rs. 28,000',
            duration: '120 min',
            desc: 'Soft, radiant, and ethereal aesthetics tailored for intimate ceremonies.',
            image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
        },

        // 3. Party & Event
        {
            id: 301,
            category: 'party',
            title: 'Wedding Guest Glam',
            price: 'Rs. 9,500',
            duration: '75 min',
            desc: 'Long-lasting event makeup styled according to your outfit theme.',
            image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80',
        },

        // 4. HD / Photography
        {
            id: 401,
            category: 'hd',
            title: 'Photoshoot Editorial Glam',
            price: 'Rs. 18,000',
            duration: '120 min',
            desc: '4K precision camera base with light-reflecting technique for high-definition studio shots.',
            image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
        },

        // 5. Eye Makeup Menu
        {
            id: 501,
            category: 'eyes',
            title: 'Classic Cut Crease Eyes',
            price: 'Rs. 4,500',
            duration: '45 min',
            desc: 'Sharp cut-crease eye design with custom lashes and precision liner.',
            image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80',
        },

        // 6. Add-ons
        {
            id: 601,
            category: 'addons',
            title: 'Dupatta & Jewelry Setting',
            price: 'Rs. 2,500',
            duration: '20 min',
            desc: 'Professional pinning and secure placement of heavy bridal veil and jewelry.',
            image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
        },
    ];

    const packages = [
        {
            name: 'The Classic',
            badge: 'Popular Choice',
            price: 'Rs. 12,999',
            features: ['Party Makeup', 'Basic Hair Styling', 'Standard Lashes', 'Setting Spray Finish'],
        },
        {
            name: 'The Glam',
            badge: 'Best Value',
            price: 'Rs. 21,999',
            features: ['HD Ultra Base Makeup', 'Advanced Hair Styling', 'Mink Lashes', 'Jewelry Setting'],
        },
        {
            name: 'The Complete Bride',
            badge: 'Luxury VIP',
            price: 'Rs. 65,000',
            features: ['Pre-Bridal Facial Care', 'Bridal HD Makeup', 'Luxury Hair Styling', 'Luxury Lashes', 'Dupatta & Jewelry Setting', 'Nail Extensions'],
        },
    ];

    const artists = [
        {
            name: 'Ayesha Khan',
            role: 'Senior Lead Artist',
            specialty: 'Bridal • HD • Soft Glam',
            experience: '8+ Years Exp.',
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80',
        },
        {
            name: 'Zoya Fatima',
            role: 'Editorial Specialist',
            specialty: 'Fashion • Cut Crease • High Glam',
            experience: '5+ Years Exp.',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80',
        },
    ];

    const transformations = [
        { id: 1, title: 'Bridal Transformation', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80' },
        { id: 2, title: 'Soft Glam Glow', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80' },
        { id: 3, title: 'High Fashion HD', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80' },
        { id: 4, title: 'Evening Event Look', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80' },
    ];

    const filteredItems = activeTab === 'all'
        ? catalogItems
        : catalogItems.filter(item => item.category === activeTab);

    return (
        <div className="bg-[#FAF7F2] text-gray-900 font-sans min-h-screen border-b border-amber-900/10">

            {/* 1. HERO BANNER */}
            <section className="relative bg-black text-[#FDFBF7] py-24 sm:py-32 px-4 text-center overflow-hidden">
                <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600&q=80')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

                <div className="relative z-10 max-w-4xl mx-auto space-y-6">
                    <span className="text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-[0.3em] bg-amber-900/30 px-5 py-2 rounded-full border border-amber-500/30 inline-block">
                        The Executive Makeup Collection
                    </span>
                    <h1 className="text-4xl sm:text-7xl font-serif font-bold tracking-tight text-[#FAF7F2]">
                        Your Look. Your Moment. <br />
                        <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-rose-300 bg-clip-text text-transparent italic">
                            Your Elegance.
                        </span>
                    </h1>
                    <p className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto font-light">
                        Explore our curated beauty catalog featuring signature looks, bespoke bridal packages, and studio-grade HD transformations.
                    </p>
                </div>
            </section>

            {/* 2. CATEGORY TABS & CATALOG GRID */}
            <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-12">

                {/* Category Navigation Tabs */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                    {[
                        { id: 'all', label: 'All Services', icon: <FaWandMagicSparkles /> },
                        { id: 'signature', label: 'Signature', icon: <FaHeart /> },
                        { id: 'bridal', label: 'Bridal', icon: <FaCrown /> },
                        { id: 'party', label: 'Party Glam', icon: <FaGem /> },
                        { id: 'hd', label: 'HD Photography', icon: <FaCamera /> },
                        { id: 'eyes', label: 'Eye Menu', icon: <FaEye /> },
                        { id: 'addons', label: 'Add-ons', icon: <FaWandMagicSparkles /> },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as any)}
                            className={`flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${activeTab === tab.id
                                    ? 'bg-black text-amber-300 shadow-lg scale-105'
                                    : 'bg-white text-gray-700 hover:bg-amber-100/50 border border-amber-900/10'
                                }`}
                        >
                            <span>{tab.icon}</span>
                            <span>{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Catalog Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-3xl overflow-hidden border border-amber-900/10 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group"
                        >
                            <div>
                                <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md text-amber-300 font-bold text-xs px-3 py-1 rounded-full border border-amber-400/30">
                                        {item.price}
                                    </div>
                                </div>

                                <div className="p-6 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-serif font-bold text-gray-900">{item.title}</h3>
                                        <span className="flex items-center text-xs text-gray-500 font-medium">
                                            <FaClock className="mr-1 text-amber-600" /> {item.duration}
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>

                            <div className="p-6 pt-0">
                                <a
                                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello! I want to book ${item.title} (${item.price}).`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center space-x-2 px-4 py-3 bg-black hover:bg-amber-900 text-amber-200 rounded-2xl text-xs font-bold transition-all duration-300 shadow-md"
                                >
                                    <FaWhatsapp className="text-base text-emerald-400" />
                                    <span>Book Service Now</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. LUXURY PACKAGES SECTION */}
            <section className="bg-black text-[#FAF7F2] py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto space-y-12">
                    <div className="text-center space-y-3">
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-900/40 px-4 py-1.5 rounded-full border border-amber-500/30">
                            Curated Bundles
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-serif font-bold">Exclusive Beauty Packages</h2>
                        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
                            Combine styling, makeup, and hair care into seamless luxury packages.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {packages.map((pkg, idx) => (
                            <div
                                key={idx}
                                className="bg-zinc-900 border border-amber-500/20 rounded-3xl p-8 space-y-6 flex flex-col justify-between relative hover:border-amber-400 transition-all duration-300"
                            >
                                <div className="space-y-4">
                                    <span className="bg-amber-400/10 text-amber-300 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full border border-amber-400/20">
                                        {pkg.badge}
                                    </span>
                                    <h3 className="text-2xl font-serif font-bold text-white">{pkg.name}</h3>
                                    <div className="text-3xl font-bold text-amber-400">{pkg.price}</div>

                                    <hr className="border-zinc-800" />

                                    <ul className="space-y-3">
                                        {pkg.features.map((feat, fIdx) => (
                                            <li key={fIdx} className="flex items-center text-xs text-gray-300 space-x-2">
                                                <FaUserCheck className="text-amber-400" />
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <a
                                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello! I want to inquire about package: ${pkg.name}.`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full text-center py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-2xl text-xs hover:brightness-110 transition-all"
                                >
                                    Book Consultation →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. BEFORE & AFTER GALLERY */}
            <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 space-y-10">
                <div className="text-center space-y-3">
                    <span className="text-amber-900 text-xs font-bold uppercase tracking-widest bg-amber-100 px-4 py-1.5 rounded-full">
                        Real Clients
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-serif font-bold text-gray-900">The Transformation</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {transformations.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => setSelectedImage(item.image)}
                            className="relative h-80 rounded-3xl overflow-hidden cursor-pointer group border border-amber-900/10 shadow-md"
                        >
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                                <p className="text-xs text-amber-300 font-semibold uppercase tracking-wider">Before → After</p>
                                <h4 className="font-serif font-bold text-sm">{item.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. MAKEUP ARTISTS SECTION */}
            <section className="bg-amber-50/60 py-20 px-4 sm:px-6 lg:px-8 border-y border-amber-900/10">
                <div className="max-w-7xl mx-auto space-y-12">
                    <div className="text-center space-y-3">
                        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-gray-900">Meet Your Makeup Artists</h2>
                        <p className="text-gray-600 text-sm">Certified masters in bridal and studio glamour.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {artists.map((artist, idx) => (
                            <div key={idx} className="bg-white rounded-3xl p-6 border border-amber-900/10 shadow-sm flex items-center space-x-6">
                                <img src={artist.image} alt={artist.name} className="w-24 h-24 rounded-2xl object-cover border-2 border-amber-400" />
                                <div className="space-y-1">
                                    <span className="text-[10px] font-bold uppercase text-amber-800 tracking-wider">{artist.experience}</span>
                                    <h3 className="text-xl font-serif font-bold text-gray-900">{artist.name}</h3>
                                    <p className="text-xs font-semibold text-rose-600">{artist.role}</p>
                                    <p className="text-xs text-gray-500 italic pt-1">{artist.specialty}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. CLEAN PRICING SUMMARY TABLE */}
            <section className="max-w-5xl mx-auto py-20 px-4">
                <div className="text-center space-y-3 mb-10">
                    <h2 className="text-3xl font-serif font-bold text-gray-900">Menu Price Summary</h2>
                </div>

                <div className="overflow-x-auto bg-white rounded-3xl border border-amber-900/10 shadow-sm">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-black text-amber-300 text-xs uppercase tracking-wider">
                                <th className="p-4 sm:p-5 font-bold">Service</th>
                                <th className="p-4 sm:p-5 font-bold">Starting Price</th>
                                <th className="p-4 sm:p-5 font-bold">Duration</th>
                                <th className="p-4 sm:p-5 font-bold text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-amber-900/10 text-xs sm:text-sm text-gray-700">
                            {catalogItems.map((row) => (
                                <tr key={row.id} className="hover:bg-amber-50/50 transition-colors">
                                    <td className="p-4 sm:p-5 font-semibold text-gray-900">{row.title}</td>
                                    <td className="p-4 sm:p-5 font-bold text-amber-900">{row.price}</td>
                                    <td className="p-4 sm:p-5 text-gray-500">{row.duration}</td>
                                    <td className="p-4 sm:p-5 text-right">
                                        <a
                                            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Book query for ${row.title}`)}`}
                                            className="inline-block px-4 py-1.5 bg-black text-white text-xs font-bold rounded-xl hover:bg-amber-900"
                                        >
                                            Book
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* 7. FINAL CALL TO ACTION */}
            <section className="bg-black text-[#FAF7F2] py-20 px-4 text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl sm:text-5xl font-serif font-bold">Ready to Create Your Perfect Look?</h2>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=Hello!%20I%20want%20to%20book%20a%20makeup%20appointment.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-4 bg-amber-400 text-black font-bold rounded-2xl hover:bg-amber-300 transition-all shadow-xl"
                        >
                            BOOK YOUR MAKEUP NOW
                        </a>
                    </div>
                </div>
            </section>

            {/* LIGHTBOX MODAL */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-4xl w-full bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 z-10 p-3 bg-white/20 rounded-full text-white"
                        >
                            <FaXmark className="text-lg" />
                        </button>
                        <img src={selectedImage} alt="Transformation" className="w-full h-[70vh] object-contain" />
                    </div>
                </div>
            )}

        </div>
    );
}