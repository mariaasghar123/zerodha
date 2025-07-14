import React from 'react'
import WatchList from './WatchList'
import {Routes, Route} from "react-router-dom"
import Summary from './Summary'
import Holdings from './Holdings'
import Orders from './Orders'
import Positions from './Positions'
import Funds from './Funds'
import App from './App'
import { GeneralContextProvider } from './GeneralContext'
export default function Dashboard() {
  return (
    <div className='dashboard-container'>
      <GeneralContextProvider>
        <WatchList/>
      </GeneralContextProvider>
        <div className='content'>
           <Routes>
                <Route exact path='/' element={<Summary/>}/>
                <Route path='/Holdings' element={<Holdings/>}/>
                <Route path='/Orders' element={<Orders/>}/>
                <Route path='/Positions' element={<Positions/>}/>
                <Route path='/Funds' element={<Funds/>}/>
                <Route path='/App' element={<App/>}/>
            </Routes> 
        </div>
      
    </div>
  )
}
