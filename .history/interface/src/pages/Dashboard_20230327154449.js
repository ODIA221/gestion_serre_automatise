import React from 'react'
import {Outlet  } from "react-router-dom";
import Header from '../components/Header';
import "./Style2.css";
import TableauDB from './TableauDB';
const Dashboard = () => {
  return (
    <>
    <Header/>
    <div id='container2'>
    <Outlet></Outlet>
    <TableauDB
    </div>
    </>
  )
}

export default Dashboard