import React, { FC } from 'react'

type SectionProps = {
  children: React.ReactNode,
  custom?: string
}

const Section: FC<SectionProps> = ({ children, custom }) => {
  return (
    <section className={`section section--${custom}`}>
      {children}
    </section>
  )
}

export default Section