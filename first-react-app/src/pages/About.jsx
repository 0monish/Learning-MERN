import React, { useContext } from 'react'
import { MovContext } from '../context/Moviecontext'

const About = () => {
  return (
    <div className="absolute top-1/2 left-1/2 translate-y-1/2">
      <h1 className="m-0 text-5xl">
        About
      </h1>
    </div >
  )


  // ACCESSING THE CONTEXT DATA
  // const movName = useContext(MovContext)
  // return (
  //   <h1 className="m-10 text-xl">
  //     This is from About {movName} component
  //   </h1>
  // )
}

export default About