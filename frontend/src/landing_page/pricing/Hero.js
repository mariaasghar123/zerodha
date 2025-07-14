import React from 'react'

export default function Hero() {
  return (
    <div className='container mt-5'>
      <div className='row text-center border-bottom' style={{marginBottom: "5rem"}}>
        <div className='text-center border-bottom' style={{marginTop: "8rem"}}>
          <h1>Pricing</h1>
          <h3 className="text-muted mt-3 fs-5">
            Free equity investments and flat ₹20 traday and F&O trades
          </h3>
        </div>
        <div className='col-4 p-5' style={{marginTop: "5rem"}}>
          <img src='media/images/images/pricing0.svg' style={{width: "60%"}} className='mb-5'/>
          <h1 className='fs-3'>Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className='col-4 p-5' style={{marginTop: "5rem"}}>
          <img src='media/images/images/intradayTrades.svg' style={{width: "60%"}} className='mb-5'/>
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className='col-4 p-5' style={{marginTop: "5rem"}}>
          <img src='media/images/images/pricing0.svg' style={{width: "60%"}} className='mb-5'/>
          <h1 className="fs-3">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>   
    </div>
  )
}
