import React from 'react'

function About() {
  return (
    <>
      <h1 className="text-6xl mb-4">Looking for anything on GitHub?</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details. This
        project is part of the
        <a href='https://www.udemy.com/course/modern-react-front-to-back/'>
          {' '}
          React Front To Back
        </a>{' '}
        Traversy Media course being completed by
        <strong>
          <a href='https://traversymedia.com'> Emmanuel Olure</a>
        </strong>
        .
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.1.1</span>
      </p>
      <p className='text-lg text-gray-400'>
        Layout By:
        <a className='text-white' href='https://twitter.com/hassibmoddasser'>
          Brad Traversy
        </a>
      </p>
    </>
    
  )
}

export default About