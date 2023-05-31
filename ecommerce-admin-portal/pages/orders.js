import Layout from "@/components/Layout";
import axios from "axios";
import React, { useEffect, useState } from "react";

const orders = () => {
  const [orders, setOrders] = useState([]);
  const getOrders = async () => {
    const resp = await axios.get("/api/orders");
    setOrders(resp.data);
  };
  useEffect(() => {
    getOrders();
  }, []);
  return (
    <Layout>
      <div className="w-full bg-gray-100 p-3 select-none">
        <h1>Orders</h1>
        <table className="basic">
          <thead>
            <tr className="p-2 text-center rounded-xl">
              <td>Order name</td>
              <td>Order price</td>
              <td>Order time</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* <td>Order name</td>
            <td>Order price</td> */}
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default orders;
