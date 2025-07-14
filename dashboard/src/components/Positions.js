import React,{useState, useEffect} from "react";
import axios from "axios"
// import { positions } from "../data/data";
export default function Positions() {
  const [showallPositions, setshowallPositions] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3002/allpositions").then((res)=>{
      console.log(res.data);
      setshowallPositions(res.data);
    });
  }, []);


  return (
    <>
      <h3 className="title">Positions ({showallPositions.length})</h3>
      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
            <th> Day Chg.</th>
          </tr>
          {showallPositions.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty.toFixed(2)}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}
