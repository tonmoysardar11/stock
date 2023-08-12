import React from 'react'

const Card = ({children}) => {
  return (
    <div className='h-full w-full p-4 border-1 bg-gray-100 rounded-md'>
      {children}
    </div>
  )
}

export default Card
