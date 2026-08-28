'use client';

import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa6';

export default function MissionAndTeam() {
    const teamMembers = [
        {
            name: 'Sophia Reynolds',
            role: 'Master Stylist & Founder',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
            bio: 'Specializing in couture hair design and color transformations with over 12 years of global experience.',
            socials: { instagram: '#', twitter: '#', linkedin: '#' },
        },
        {
            name: 'Elena Rostova',
            role: 'Senior Skincare Specialist',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80',
            bio: 'Certified aesthetician expert in holistic facial therapies, skin rejuvenation, and organic care.',
            socials: { instagram: '#', twitter: '#', linkedin: '#' },
        },
        {
            name: 'Marcus Vance',
            role: 'Creative Hair Colorist',
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
            bio: 'Renowned for precision balayage techniques and creating vibrant, healthy color blends.',
            socials: { instagram: '#', twitter: '#', linkedin: '#' },
        },
    ];

    return (
        <div className="bg-white">

            {/* SECTION 1: OUR MISSION */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-rose-50 bg-rose-50/20">
                <div className="max-w-4xl mx-auto text-center space-y-4">
                    <span className="text-rose-600 text-xs font-bold uppercase tracking-widest bg-rose-100 px-3.5 py-1.5 rounded-full inline-block">
                        Our Mission
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                        Empowering Confidence Through <br />
                        <span className="text-rose-600">Exceptional Care</span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed max-w-2xl mx-auto pt-2">
                        Our mission is to empower every individual to feel uniquely beautiful and confident. We deliver personalized, top-tier salon experiences combining sustainable beauty practices, cutting-edge techniques, and a warm atmosphere.
                    </p>
                </div>
            </section>

            {/* SECTION 2: MEET OUR TEAM */}
            <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto space-y-12">

                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto space-y-3">
                        <span className="text-rose-600 text-xs font-bold uppercase tracking-widest bg-rose-50 px-3.5 py-1.5 rounded-full inline-block">
                            Our Experts
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
                            Meet Our <span className="text-rose-600">Talented Team</span>
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600">
                            The passionate artists and specialists dedicated to bringing out your finest look.
                        </p>
                    </div>

                    {/* Team Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl overflow-hidden border border-rose-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                            >
                                {/* Member Image */}
                                <div className="relative h-80 w-full overflow-hidden bg-gray-100">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                        <div className="flex space-x-3">
                                            <a href={member.socials.instagram} className="w-9 h-9 bg-white text-gray-900 rounded-full flex items-center justify-center hover:bg-rose-600 hover:text-white transition-colors">
                                                <FaInstagram className="text-sm" />
                                            </a>
                                            <a href={member.socials.twitter} className="w-9 h-9 bg-white text-gray-900 rounded-full flex items-center justify-center hover:bg-rose-600 hover:text-white transition-colors">
                                                <FaTwitter className="text-sm" />
                                            </a>
                                            <a href={member.socials.linkedin} className="w-9 h-9 bg-white text-gray-900 rounded-full flex items-center justify-center hover:bg-rose-600 hover:text-white transition-colors">
                                                <FaLinkedinIn className="text-sm" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Member Details */}
                                <div className="p-6 text-center space-y-2">
                                    <h3 className="text-xl font-bold text-gray-900">
                                        {member.name}
                                    </h3>
                                    <p className="text-xs font-bold text-rose-600 uppercase tracking-wider">
                                        {member.role}
                                    </p>
                                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed pt-2">
                                        {member.bio}
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