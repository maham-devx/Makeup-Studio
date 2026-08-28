'use client';

import React, { useState } from 'react';

interface ProductItem {
    id: string;
    title: string;
    price: string;
    description: string;
    image: string;
    badge?: string;
    details: string[];
    inStock: boolean;
}

const products: ProductItem[] = [
    {
        id: '1',
        title: 'HD Matte Foundation',
        price: 'Rs. 3,200',
        description: 'Waterproof, 24-hour full-coverage base available in 15 skin shades.',
        image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?auto=format&fit=crop&q=80&w=800',
        badge: 'Bestseller',
        inStock: true,
        details: [
            '24-Hour Long Wear Formula',
            'Waterproof & Sweat-Resistant',
            '15 Inclusive Skin Shades',
            'Oil-Control Matte Finish',
        ],
    },
    {
        id: '2',
        title: 'Velvet Liquid Lipsticks',
        price: 'Rs. 1,500',
        description: 'Transfer-proof, non-drying matte liquid lipsticks in nudes, pinks, and bridal reds.',
        image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=800',
        badge: 'Trending',
        inStock: true,
        details: [
            'Transfer-Proof & Smudge-Proof',
            'Infused with Vitamin E for Comfort',
            'High-Pigment One-Swipe Application',
            'Available in Nudes, Pinks & Reds',
        ],
    },
    {
        id: '3',
        title: 'Glam Eyeshadow Palette',
        price: 'Rs. 4,500',
        description: '18 highly pigmented shades featuring mattes, shimmers, and glitters.',
        image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800',
        inStock: true,
        details: [
            '18 Velvet Smooth Shades',
            'Blendable Mattes, Pressed Shimmers & Glitters',
            'Zero Fallout Ultra-Pigmented Formula',
            'Built-in HD Mirror',
        ],
    },
    {
        id: '4',
        title: 'Glow Liquid Highlighter',
        price: 'Rs. 2,200',
        description: 'Blendable liquid formula for a natural glass-skin glow on cheekbones and collarbones.',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
        inStock: true,
        details: [
            'Seamless Glass-Skin Radiance',
            'Lightweight & Non-Sticky Feel',
            'Multipurpose (Cheekbones, Collarbones, Body)',
            'Buildable Natural to Intense Glow',
        ],
    },
    {
        id: '5',
        title: 'Professional Brush Set - 12 Pcs',
        price: 'Rs. 5,500',
        description: 'Soft synthetic brush set covering face foundation, contouring, and eye blending.',
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800',
        badge: 'Must Have',
        inStock: true,
        details: [
            '12 Essential Face & Eye Brushes',
            'Ultra-Soft Cruelty-Free Synthetic Bristles',
            'Durable Aluminum Ferrules & Premium Handles',
            'Includes Travel Storage Pouch',
        ],
    },
];

export const MakeupProductsShop: React.FC = () => {
    const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

    const handleOpenModal = (product: ProductItem) => {
        setSelectedProduct(product);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    const handleWhatsAppOrder = (product: ProductItem) => {
        const phoneNumber = '923001234567'; // Change to your WhatsApp business number
        const message = `Hi! I want to buy the *${product.title}* (${product.price}). Please confirm my order placement.`;
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <section className="min-h-screen bg-white text-neutral-900 py-20 px-4 sm:px-6 lg:px-12 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16 space-y-3">
                    <span className="text-xs font-semibold tracking-[0.25em] uppercase text-neutral-500">
                        Beauty Essentials & Cosmetics
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-serif font-light text-neutral-900 tracking-wide">
                        Makeup Products Shop
                    </h2>
                    <div className="w-16 h-[2px] bg-neutral-900 mx-auto mt-4" />
                </div>

                {/* Product Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => handleOpenModal(item)}
                            className="group cursor-pointer rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-2xl hover:border-neutral-900 transition-all duration-300 overflow-hidden flex flex-col justify-between"
                        >
                            <div>
                                {/* Product Image */}
                                <div className="relative h-64 w-full overflow-hidden bg-neutral-100">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {item.badge && (
                                        <span className="absolute top-4 right-4 bg-neutral-900 text-white text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                                            {item.badge}
                                        </span>
                                    )}
                                </div>

                                {/* Product Content */}
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
                                    View Details & Buy
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal / Popup Detail View */}
                {selectedProduct && (
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
                                    src={selectedProduct.image}
                                    alt={selectedProduct.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6 text-white">
                                    <span className="text-xs font-semibold tracking-widest uppercase bg-emerald-500/80 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-300">
                                        In Stock
                                    </span>
                                    <h3 className="text-3xl font-serif font-bold mt-2">
                                        {selectedProduct.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6 sm:p-8 space-y-6">
                                <div>
                                    <div className="text-3xl font-serif font-bold text-neutral-900 mb-2">
                                        {selectedProduct.price}
                                    </div>
                                    <p className="text-sm text-neutral-600 leading-relaxed">
                                        {selectedProduct.description}
                                    </p>
                                </div>

                                <div className="border-t border-neutral-200 pt-4">
                                    <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 mb-3">
                                        Key Highlights & Specifications:
                                    </h4>
                                    <ul className="space-y-2">
                                        {selectedProduct.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-xs text-neutral-700">
                                                <span className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center text-[10px] font-bold">
                                                    ✓
                                                </span>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Order & Close Buttons */}
                                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                                    <button
                                        onClick={() => handleWhatsAppOrder(selectedProduct)}
                                        className="flex-1 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs tracking-widest uppercase rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                                    >
                                        <span>Confirm Order via WhatsApp</span>
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

export default MakeupProductsShop;