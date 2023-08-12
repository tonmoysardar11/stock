import React from 'react'

const Card = ({children}) => {
  return (
    <div className='h-full w-full p-8 border-1 bg-gray-500 rounded-md'>
      {children}
    </div>
  )
}

export default Card
