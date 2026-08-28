import AboutUsSalon from '@/component/About-section/AboutUsSalon'
import MissionAndTeam from '@/component/About-section/MissionAndTeam'
import QualityHygiene from '@/component/About-section/QualityHygiene'
import SalonStoryAndFeatures from '@/component/About-section/SalonStoryAndFeatures'
import AppointmentCTA from '@/component/AppointmentCTA'
import React from 'react'

function page() {
    return (
        <div>
            <AboutUsSalon />
            <SalonStoryAndFeatures />
            <MissionAndTeam />
            <QualityHygiene />
            <AppointmentCTA />
        </div>
    )
}

export default page