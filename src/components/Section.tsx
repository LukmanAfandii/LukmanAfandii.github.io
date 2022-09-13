import React from 'react'

interface SectionProps {
  className: string | ''
  id?: string
  children: React.ReactNode
}


export const Section = ({children, className, id}: SectionProps) => {
  return (
    <div id={id} className={`flex items-center py-10 px-9 max-w-7xl mx-auto flex-wrap ${className} dark:bg-[#101926] dark:text-[#FFFFFF]`}>
        {children}
    </div>
  )
}

Section.defaultProps = {
  className: ''
}


export default Section;