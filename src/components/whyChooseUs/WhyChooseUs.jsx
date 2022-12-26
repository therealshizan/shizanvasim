import React from 'react'
import './WhyChooseUs.css'
import WhyChooseUsColumn from './WhyChooseUsColumn'
import { whyChooseUsData } from 'data/WhyChooseUsData'
import Title from 'components/Title'


const WhyChooseUs = () => {
    return (
        <div className="content" id="whyChooseUs">
            <Title>Why Choose Us</Title>
            <div className="why-choose-us-container">
                <div className="why-choose-use-row">
                    {whyChooseUsData.map(wcu => <WhyChooseUsColumn wcuTitle={wcu.title} wcuDescription={wcu.description} wcuReadMore={wcu.readMoreLink} />)}
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs