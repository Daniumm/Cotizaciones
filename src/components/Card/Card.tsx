import React from 'react'
import { CardProp } from './types'
import { WhiteCard } from './styles'

const Card: React.FC<CardProp> = ({
    children,
    width,
    height,
    colorBackground,
    color,
}) => {
  return (
    <WhiteCard 
    width={width}
    height={height}
    colorBackground={colorBackground}
    color = {color}
    >
        {children}
    </WhiteCard>
  )
}

export default Card