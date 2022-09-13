import React from 'react'

interface CardImageProps {
  src: string
  alt?: string
}

const CardImage = ({src,alt}:CardImageProps) => {
  return (
    <div>
    <img src={src} alt="" className="object-contain transition-transform duration-1000 ease-in-out scale-125 hover:scale-150" />
    </div>
  )
}

export default CardImage