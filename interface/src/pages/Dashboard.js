import React from 'react'
import {Link, Outlet  } from "react-router-dom";
import Header from '../components/Header';
const Dashboard = () => {
  return (
    <>
    <Header/>
    <Outlet></Outlet>
    </>
  )
}

export default Dashboard