'use client';

import React, { useState } from 'react';
import { FaExpand, FaXmark } from 'react-icons/fa6'; // 👈 FaXmark import karein

export default function ProfessionalGallery() {
    const [selectedImage, setSelectedImage] = useState<{ src: string; tag: string; title: string } | null>(null);

    const galleryItems = [
        {
            id: 1,
            tag: 'Bridal',
            title: 'Luxury Bridal Makeup',
            image: 'images22.png',
        },
        {
            id: 2,
            tag: 'Balayage',
            title: 'Custom Hair Coloring',
            image: 'download22.png',
        },
        {
            id: 3,
            tag: 'Glamour',
            title: 'High-Definition Evening Makeup',
            image: 'Best.png',
        },
        {
            id: 4,
            tag: 'Facial',
            title: 'Rejuvenating Skin Glow',
            image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1000&q=80',
        },
        {
            id: 5,
            tag: 'NailArt',
            title: 'Custom Gel Nail Extensions',
            image: 'downloadnn.png',
        },
        {
            id: 6,
            tag: 'Hairstyle',
            title: 'Signature Blowout & Waves',
            image: 'imagesv.png',
        },
        {
            id: 7,
            tag: 'SoftGlam',
            title: 'Natural Party Look',
            image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1000&q=80',
        },
        {
            id: 8,
            tag: 'Spa Care',
            title: 'Relaxing Facial Therapy',
            image: 'imagess.png',
        },
    ];

    return (
        <section className="bg-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-rose-50">
            <div className="max-w-7xl mx-auto space-y-12">

                {/* SECTION HEADER */}
                <div className="text-center max-w-3xl mx-auto space-y-3">
                    <span className="text-rose-600 text-xs font-bold uppercase tracking-widest bg-rose-50 px-4 py-1.5 rounded-full inline-block border border-rose-100 shadow-sm">
                        Our Work Portfolio
                    </span>
                    <h2 className="text-4xl sm:text-6xl font-black text-gray-900 tracking-tight">
                        Client <span className="text-rose-600">Transformations</span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600">
                        A glimpse into our real work, client styles, and professional beauty looks.
                    </p>
                </div>

                {/* GALLERY GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {galleryItems.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => setSelectedImage({ src: item.image, tag: item.tag, title: item.title })}
                            className="group relative h-80 sm:h-96 rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 border border-rose-100/50"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                            <div className="absolute top-4 left-4">
                                <span className="bg-white/90 backdrop-blur-md text-gray-900 text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md border border-white/50">
                                    {item.tag}
                                </span>
                            </div>

                            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                                <div>
                                    <h3 className="text-white font-bold text-base sm:text-lg drop-shadow-md">
                                        {item.title}
                                    </h3>
                                </div>
                                <div className="p-2.5 bg-rose-600/90 hover:bg-rose-600 backdrop-blur-md rounded-2xl text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <FaExpand className="text-sm" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* LIGHTBOX MODAL */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-3xl bg-gray-900 border border-white/10 shadow-2xl flex flex-col justify-between" onClick={(e) => e.stopPropagation()}>

                        {/* Close Button (FaXmark ka use kiya gaya hai) */}
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 z-10 p-3 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-all duration-300"
                        >
                            <FaXmark className="text-lg" />
                        </button>

                        <div className="relative w-full h-[65vh] sm:h-[75vh] bg-black">
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        <div className="p-6 bg-gray-950 text-white flex items-center justify-between border-t border-white/10">
                            <div>
                                <span className="text-xs font-bold uppercase tracking-widest text-rose-500">
                                    {selectedImage.tag}
                                </span>
                                <h3 className="text-lg sm:text-xl font-bold mt-0.5">
                                    {selectedImage.title}
                                </h3>
                            </div>
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-xl transition-all"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}