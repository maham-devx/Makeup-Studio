import InteractiveServiceMenu from '@/component/Services-section/InteractiveServiceMenu'
import LuxuryBeautyMenu from '@/component/Services-section/LuxuryBeautyMenu'
import ServicesAndExperience from '@/component/Services-section/ServicesAndExperience'
import React from 'react'

function page() {
    return (
        <div>
            <ServicesAndExperience />
            <InteractiveServiceMenu />
            <LuxuryBeautyMenu />
        </div>
    )
}

export default page