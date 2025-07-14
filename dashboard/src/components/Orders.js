import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Orders({}) {
  const [orders, setorders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/orders").then((res) => {
      console.log(res.data);
      setorders(res.data);
    }, []);
  });
  return (
    <div className="orders">
      <div className="">
        <h3 className="title">Orders Detail</h3>
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Qty.</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order, index) => (
                  <tr key={index}>
                    <td>{order.name}</td>
                    <td>{order.qty}</td>
                    <td>₹{order.price}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">No orders placed yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
