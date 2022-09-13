import React from 'react'

interface SectionProps {
  className: string | ''
  children: React.ReactNode
}


export const Section = ({children, className}: SectionProps) => {
  return (
    <div className={`flex items-center py-10 px-9 max-w-7xl mx-auto flex-wrap ${className} dark:bg-[#101926] dark:text-[#FFFFFF]`}>
        {children}
    </div>
  )
}

Section.defaultProps = {
  className: ''
}


export default Section;