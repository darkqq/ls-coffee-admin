import React, { FC } from 'react'
import Section from '../../components/Section'

const dataSections = ['Setion 1', 'Setion 2', 'Setion 3', 'Setion 4']

const Main = () => {
  return (
    <main className='main'>
      <div className="main__body">
        {dataSections.map(item => (<Section key={item} children={item}/>))}
      </div>
    </main>
  )
}

export default Main