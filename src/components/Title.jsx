import React from 'react'

const SIZES = ["largeTitle", "mediumTitle", "smallTitle"]

const Title = (props, titleSize) => {
    const checkTitleSize = SIZES.includes(props.titleSize) ? props.titleSize : SIZES[0]
  return (
    <h3 className={`title ${checkTitleSize}`} >{props.children}</h3>
  )
}

export default Title