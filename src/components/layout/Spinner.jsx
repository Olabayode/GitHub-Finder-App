import React from 'react'
import spinner2 from '../layout/assets/spinner2.gif'

function Spinner() {
  return (
    <div className='w-100 mt-2'>
        <img 
        width={180}
        src={spinner2}
        alt='Loading...'
        className='text-center mx-auto'
        />
    </div>
  )
}

export default Spinner