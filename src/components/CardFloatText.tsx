import React from 'react'

interface CardFloatTextProps {
  text: 'Laravel' | 'Next JS' | 'Bootstrap' | 'Tailwind' | 'React' | 'Figma' | 'VS Code' | 'React'
  bgColor: 'bg-red-600' | 'bg-gray-600' | 'bg-indigo-600' | 'bg-teal-500' | 'bg-blue-500' | 'bg-[#ff8e8e]' | 'bg-[#86fff7]' | 'bg-[#edff75]' | 'bg-[#7d84ff]'
  textWhite?: boolean
}

const CardFloatText = ({bgColor,text,textWhite=true}: CardFloatTextProps) => {    
  return (
    <span className={`cursor-default relative md:px-5 px-3 py-1 md:py-2 md:text-base text-sm  font-bold ${bgColor} rounded-full bottom-4 md:bottom-6 shadow-lg mx-1 ${textWhite?'text-white':'text-gray-900'}`}>{text}</span>
  )
}

export default CardFloatText