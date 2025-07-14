import React, {useState} from 'react'
import {Tooltip, Grow} from "@mui/material"
import {BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz} from "@mui/icons-material"
import { watchlist } from '../data/data'
import GeneralContext from "./GeneralContext";
import { useContext } from 'react';
import { DoughnutChart } from './DoughnutChart';


  const labels= watchlist.map((subArray)=>subArray["names"])

  export default function WatchList() {

    
  const data = {
    labels, 
    datasets: [
    {
      label: 'stock price',
      data: watchlist.map((stock)=> stock.price),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
  }
  

  return (
    <div className='watchlist-container'>
        <div className='search-container'>
            <input type='text'
            name='search'
            id='search'
            placeholder='Search eg:infy, bse, nify fut weekly, gold mcx'
            className='search'
            />
            <span className='counts'>{watchlist.length} / 50</span>
        </div>
      <ul className='list'>
        {watchlist.map((stock, index) => {
            return(
            <WatchlistItem stock={stock} key={index}/>
            )
        })}
      </ul>
       <DoughnutChart {...data}/>
    </div>
  )
}

const WatchlistItem= ({ stock }) =>{
    const [showwatchlisticons, setshowwatchlisticons]= useState(false)

    const handlewatchlistEnter=(e)=>{
        setshowwatchlisticons(true);
    };
    const handlewatchlistLeave=(e)=>{
        setshowwatchlisticons(false);
    };
    return(
        <>
        <li onMouseEnter={handlewatchlistEnter} onMouseLeave={handlewatchlistLeave}>
            <div className='item'>
                <p className={stock.isDown? "down" : "up"}>{stock.name}</p>
                <div className='itemInfo'>
                    <span className='percent'>{stock.percent}</span>
                    {stock.isDown? (
                        <KeyboardArrowDown className="down"/>
                        
                    ): (
                        <KeyboardArrowUp className="up"/>
                        
                    )}
                    <span className='price'>{stock.price}</span>

                </div>
            </div>
            {showwatchlisticons && <Watchlistactions uid={stock.name}/>}
        </li>
       
        </>
    )
}
const Watchlistactions = ({uid})=>{
    const generalContext = useContext(GeneralContext);
    const handleBuyClick = ()=>{
        generalContext.openBuyWindow(uid)
    }
    return(
        <>
        <span className='actions'>
            <Tooltip
            title="Buy(B)"
            placement='top'
            TransitionComponent={Grow}
            onClick={handleBuyClick}
            arrow
            >
                <button className='buy'>Buy</button>
            </Tooltip>
            <Tooltip
            title="Sell(S)"
            placement='top'
            TransitionComponent={Grow}
            arrow
            >
                <button className='sell'>Sell</button>
            </Tooltip>
            <Tooltip
            title="Analytics(A)"
            placement='top'
            TransitionComponent={Grow}
            arrow
            >
                <button className='action'>
                    <BarChartOutlined className='icon'/>
                </button>
            </Tooltip>
            <Tooltip
            title="More"
            placement='top'
            TransitionComponent={Grow}
            arrow
            >
                <button className='action'>
                    <MoreHoriz className='icon'/>
                </button>
            </Tooltip>
        </span>
        </>
    )
}
