import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const verifyCookie = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:3002",
          {},
          { withCredentials: true }
        );
        const { status, user } = data;
        if (status) {
          setUsername(user);
          toast.success(`Welcome ${user}`, { position: "top-right" });
        }
      } catch (error) {
        console.log("Not logged in. But continuing anyway...");
      }
    };
    verifyCookie();
  }, []);

  const logout = () => {
    removeCookie("token");
    window.location.href = "http://localhost:3000/login"; // send back to login
  };

  return (
    <>
      <TopBar />
      <Dashboard />
      <ToastContainer />
    </>
  );
}
