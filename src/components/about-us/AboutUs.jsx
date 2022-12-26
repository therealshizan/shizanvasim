import React from 'react'
import './AboutUs.css'
import Vijay from 'img/Vijay.png'
import Title from 'components/Title'

const AboutUs = () => {
    return (
        <div className="content" id='about-us'>
            <div className="aboutContainer">
                <div className="aboutCol aboutImg">
                    <img src={Vijay} alt="" />
                </div>
                <div className="aboutCol aboutContent">
                    <Title titleSize="largeTitle">Shizan Vasim</Title>
                    <h4>Founded in Lebanon in 1967, Archo Architecture Company (KCC) has grown to become one of the Middle East's leading construction contractors.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/><br/>Distinctio maxime, ratione rem doloremque earum ullam adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, cupiditate repellat beatae <br/><br/>adipisci quam, numquam ad qui earum in exercitationem enim assumenda eaque perferendis praesentium voluptate magnam ipsam suscipit minus.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs