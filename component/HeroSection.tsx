'use client';
import React, { useState, useEffect } from 'react';

interface Slide {
    id: string;
    title: string;
    subtitle: string;
    imageSrc: string;
    buttonText: string;
    buttonLink: string;
}

const slides: Slide[] = [
    {
        id: '1',
        title: 'Model Party Makeup',
        subtitle: 'Step into a world of timeless beauty',
        imageSrc: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&q=80&w=1200',
        buttonText: 'VIEW MORE',
        buttonLink: '#services',
    },
    {
        id: '2',
        title: 'Royal Bridal Glow',
        subtitle: 'Unveil your elegance on your special day',
        imageSrc: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1200',
        buttonText: 'EXPLORE LOOKS',
        buttonLink: '#bridal',
    },
];

export const HeroSection: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full h-[85vh] min-h-[500px] bg-[#D87D56] overflow-hidden text-white font-sans">
            <div className="relative w-full h-full">
                {slides.map((slide, index) => {
                    const isActive = index === currentSlide;
                    return (
                        <div
                            key={slide.id}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center justify-between px-8 sm:px-16 lg:px-24 ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                                }`}
                        >
                            <div className="w-full lg:w-1/2 z-20 space-y-6 max-w-xl">
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light leading-tight">
                                    {slide.title}
                                </h1>
                                <p className="text-lg sm:text-xl font-light text-amber-50/90">
                                    {slide.subtitle}
                                </p>
                                <div className="pt-4">
                                    <a
                                        href={slide.buttonLink}
                                        className="inline-block bg-white text-neutral-900 font-semibold text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-neutral-900 hover:text-white transition-all"
                                    >
                                        {slide.buttonText}
                                    </a>
                                </div>
                            </div>

                            <div className="hidden lg:flex w-1/2 h-full justify-end items-center">
                                <div className="relative w-[450px] h-[550px] overflow-hidden rounded-b-full shadow-2xl">
                                    <img
                                        src={slide.imageSrc}
                                        alt={slide.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`transition-all duration-300 rounded-full ${index === currentSlide ? 'w-8 h-2 bg-white' : 'w-2 h-2 bg-white/50'
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroSection;