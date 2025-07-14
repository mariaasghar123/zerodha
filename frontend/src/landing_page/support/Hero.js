import React from 'react'

export default function Hero() {
  return (
    <div className='bg-primary'>
    <div className='container text-white pt-5 pb-5'>
      <div className='row'>
        <div className='d-flex justify-content-between items-center'>
          <h3 style={{marginBottom: "8rem"}}>Support Portal</h3>
          <a className='text-white'>Track Tickets</a>
          </div>
        <div className='col-6'> 
          <p className=' fs-2'>Search for an answer or browse help topics to create a ticket</p>
          <input placeholder='Eg. how do I activate F&O, why is my order getting rejected' className='p-4 mt-3 rounded w-75' style={{outline: "none"}}/>  <br/> 
          <div className='mt-5'></div>
          <a className='text-white'>Track account opening</a> &nbsp; <a className='text-white'>Track account opening</a> &nbsp;
          <a className='text-white'>intaday</a> <br/>  <a className='text-white'>margins</a> &nbsp; <a className='text-white'>Kite user manual</a> 
        </div>
        <div className='col-6 p-5'>
          <h1 className="fs-3" style={{marginLeft: "8rem"}}>Featured</h1>
          <ol className='lh-lg' style={{marginLeft: "8rem"}}>
            <li>
              <a href="" className='text-white'>Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="" className='text-white'>Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
  )
}
