import React from 'react'
import Title from 'components/Title'

const WhyChooseUsColumn = (props, wcuTitle, wcuDescription, wcuReadMore) => {

    return (
        <>
            <div className="why-choose-use-col">
                <div>
                    <a href={props.wcuReadMore}><Title titleSize="mediumTitle">{props.wcuTitle}</Title></a>
                    <p className='wcu-description'>{props.wcuDescription}</p>
                </div>
                <a href={props.wcuReadMore} className="more">Read More</a>
            </div>
        </>
    )
}

export default WhyChooseUsColumn