import React from 'react'

export default function Universe() {
  return (
    <div className='container mt-5'>
      <div className='row text-center'>
        <div className='text-center'>
          <h1>The Zerodha Universe</h1>
          <p className='mt-3'>Extend your trading and investment experience even further with our partner platforms</p>
        </div>
        <div className='col-4 p-5 mt-3'>
          <img src='media/images/images/smallcaseLogo.png' style={{width: "60%"}} className='mb-5'/>
          <img src='media/images/images/zerodhaFundhouse.png' style={{width: "50%"}}/>
        </div>
        <div className='col-4 p-5 mt-3'>
          <img src='media/images/images/streakLogo.png' style={{width: "60%"}} className='mb-5'/>
          <img src='media/images/images/goldenpiLogo.png' style={{width: "50%"}}/>
        </div>
        <div className='col-4 p-5 mt-3'>
          <img src='media/images/images/sensibullLogo.svg' style={{width: "60%"}} className='mb-5'/>
          <img src='media/images/images/dittoLogo.png' style={{width: "50%"}}/>
        </div>
        <button
          className="btn btn-primary fs-5 mx-auto p-2 text-center mt-5"
          style={{ width: "20%" }}
        >
          Signup Now
        </button>
        </div>      
    </div>
  )
}
