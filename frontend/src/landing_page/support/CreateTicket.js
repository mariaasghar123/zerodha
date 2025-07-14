import React from 'react'

export default function CreateTicket() {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div>
          <h1 className='fs-2'>To create a ticket, select a relevant topic</h1>
        </div>
        <div className='col-4 p-5 mt-3'>
          <h3 className='fs-4'><i class="fa fa-plus-circle text-xs" style={{ fontSize: "15px", marginRight: "5px" }} aria-hidden="true"></i> Account Opening</h3>
          <div className='mt-5 lh-lg'>
            <li className='list-unstyled'><a className='text-decoration-none'>Online account opening</a></li> 
            <li className='list-unstyled'><a className='text-decoration-none'>Offline account opening</a></li> 
            <li className='list-unstyled'><a className='text-decoration-none'>Company, Partnership and HUF Account</a></li> 
            <li className='list-unstyled'><a className='text-decoration-none'>Opening</a></li> 
            <li className='list-unstyled'><a className='text-decoration-none'>NRI Account Opening</a></li> 
            <li className='list-unstyled'><a className='text-decoration-none'>Charges at Zerodha</a></li> 
            <li className='list-unstyled'><a className='text-decoration-none'>Zerodha IDFC FIRST Bank 3-in-1 Account</a></li> 
            <li className='list-unstyled'><a className='text-decoration-none'>Getting Started</a></li> 
          </div>
          
        </div>
        <div className='col-4 p-5 mt-3'>
          <h3 lassName='fs-4'> <i class="fa-solid fa-user" style={{ fontSize: "15px", marginRight: "5px" }}></i>Zerodha Account</h3>
          <div className='mt-5 lh-lg'>
            <li className='list-unstyled'><a className='text-decoration-none'>Login Credentials</a></li> 
            <li className='list-unstyled'><a className='text-decoration-none'>Account modification & segment Addition</a></li> 
            <li className='list-unstyled'><a className='text-decoration-none'>Dp ID and Bank details</a></li> 
            <li className='list-unstyled'><a className='text-decoration-none'>Your Peofile</a></li> 
            <li className='list-unstyled'><a className='text-decoration-none'>NTransfer and conversion of shares</a></li> 
          </div>
        </div>
        <div className='col-4 p-5 mt-3'>
          <h3 lassName='fs-4'> <i class="fa-solid fa-signal" style={{ fontSize: "15px", marginRight: "5px" }}></i> Account Activity</h3>
          <div className='mt-5 lh-lg'>
            <li className='list-unstyled'><a className='text-decoration-none'>Margin/levrage and Product</a></li> 
            <li className='list-unstyled'><a className='text-decoration-none'>Kite web & details </a></li> 
            <li className='list-unstyled'><a className='text-decoration-none'>Trading FAQs</a></li> 
            <li className='list-unstyled'><a className='text-decoration-none'>Opening</a></li> 
            <li className='list-unstyled'><a className='text-decoration-none'>NRI Account Opening</a></li> 
            <li className='list-unstyled'><a className='text-decoration-none'>PI and other Platforms</a></li> 
          </div>
        </div>
        
        </div>   
        <div className='row'>
        <div className='col-4 p-5'>
          <h3 lassName='fs-4'> <i class="fa-solid fa-credit-card" style={{ fontSize: "15px", marginRight: "5px" }}></i>Funds</h3>
          <div className='mt-5 lh-lg'>
            <li className='list-unstyled'><a className='text-decoration-none'>Adding funds</a></li> 
            <li className='list-unstyled'><a className='text-decoration-none'>funds withdrawl</a></li> 
            <li className='list-unstyled'><a className='text-decoration-none'>eMendates</a></li> 
            <li className='list-unstyled'><a className='text-decoration-none'>Adding Banka Acounts</a></li>
          </div>
        </div>
        <div className='col-4 p-5'>
          <h3 lassName='fs-4'> <i class="fa-solid fa-circle-notch" style={{ fontSize: "15px", marginRight: "5px" }}></i>console</h3>
          <div className='mt-5 lh-lg'>
            <li className='list-unstyled'><a className='text-decoration-none'>Reports</a></li> 
            <li className='list-unstyled'><a className='text-decoration-none'>Ledger</a></li> 
            <li className='list-unstyled'><a className='text-decoration-none'>Portfolio</a></li> 
            <li className='list-unstyled'><a className='text-decoration-none'>IPO</a></li> 
            <li className='list-unstyled'><a className='text-decoration-none'>Referral Program</a></li> 
          </div>
        </div>
        <div className='col-4 p-5'>
          <h3 lassName='fs-4'> <i class="fa-solid fa-coins" style={{ fontSize: "15px", marginRight: "5px" }}></i>coin</h3>
          <div className='mt-5 lh-lg'>
            <li className='list-unstyled'><a className='text-decoration-none'>Understanding mutual funds</a></li> 
            <li className='list-unstyled'><a className='text-decoration-none'>About Coin</a></li> 
            <li className='list-unstyled'><a className='text-decoration-none'>Buying and Selling</a></li> 
            <li className='list-unstyled'><a className='text-decoration-none'>Starting an SIP</a></li> 
            <li className='list-unstyled'><a className='text-decoration-none'>Moving to Coin</a></li> 
          </div>
        </div>
        </div>      
    </div>
  )
}
