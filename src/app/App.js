import React from "react";
import HomePage from "../pages/Home";
import Login from "../pages/session/Login";
import {Routes, Route} from "react-router-dom";
import NotFound from "../pages/session/NotFound";
import FlexBoxLayout from "../pages/Layouts/FlexBox";
import GridLayout from "../pages/Layouts/Grid"
import Customer from "../pages/session/Customer"
import Item from "../pages/session/Item"
import DashBoard from "../pages/session/DashBoard";


function App() {
  return (
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='flex-layout' element={<FlexBoxLayout/>}/>
        <Route path='grid-layout' element={<GridLayout/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="customer" element={<Customer/>}/>
        <Route path="item" element={<Item/>}/>
        <Route path="dashboard" element={<DashBoard/>}/>
      </Routes>

  );
}

export default App;