import Title from 'components/Title'
import React from 'react'

const ContactSection = (props) => {
  return (
    <div className='contactSection'>
      <Title>{props.sectionTitle}</Title>
    </div>
  )
}

export default ContactSection
