import React from 'react'
import {Link, Outlet  } from "react-router-dom";
import Header from '../components/Header';
import "./Style2.css";
const Dashboard = () => {
  return (
    <>
    <Header/>
    <div id='container'>
    <Outlet></Outlet> 
    </div>
    di
    </>
  )
}

export default Dashboard