import React from 'react'
import { Link } from 'react-router-dom'
export default function Teams() {
  return (
    <div>
      <hr/>
      <h1
        className="text-center fs-2 mt-3"
      >
        About Us
      </h1>
      <div className="container">
        <div className="row text-muted p-5">
          <div className="col-6 p-5 text-center">
            <img src='/media/images/images/photo.jpeg' className='rounded-circle image-fluid ' alt='img' width="250px" height="350px"/>
            <p className='fs-2 mt-3'>Maria Asghar</p>
            <p>Founder, CEO</p>
          </div>
          <div className="col-6 p-5 lh-lg mt-5">
            <p className='mb-3'>
            Maria Asghar is a Professional FullStack softwere developer. She manage her time wisely. She love Coding and know how to handle logics.
          </p>
          <p className='mb-3'>
            She believes in self-learning skills.
          </p>
          <p className='mb-3'>Reading Books is her zen.</p>
          <p>connect on <Link to={"/"} className='text-decoration-none'> HomePage/ </Link> 
                        <Link to={"/"} className='text-decoration-none'> TradingQnA/ </Link>
                        <Link to={"/"} className='text-decoration-none'> Twitter </Link>
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}
