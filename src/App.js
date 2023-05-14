import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Boat from "./Pages/Boat_Page"
import Login from "./Pages/Login";
import SignIn from "./Pages/SignIn";
import BoatBuy from "./Pages/BoatBuy"
import BoatRent from "./Pages/BoatRent"
import Usertype from "./Pages/Usertype"
import Vendor from "./Pages/Vendor"
import Rent from "./Components/Rent"
// import User from "./Pages/User"
import Landing from "./Components/Landing"
import { Route, Routes } from "react-router-dom"
import Dashboard from "./Pages/Dashboard";
import VendorData from "./vendor-data"
// import BoatId from "./Components/BoatId";
import CardComponent from "./Components/Cardcomponent";
import FilterBar from "./Components/Sidebar 1";
import CardList from "./Components/Cardlist";
import FilterBar1 from "./Components/Filterbar";
import Filtercards from "./Components/Filtercards";




const App = () => {

  const [choice, setChoice] = useState(VendorData.user.choice)
  const [company, setCompany] = useState(VendorData.user.company)
  const [money, setMoney] = useState(VendorData.user.money)



  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/about" element={<About/>}/> */}
        <Route path="/boat" element={<Boat />} />
        <Route path="/boat/:id" element={<BoatBuy />} />
        <Route path="/boat/:id" element={<BoatRent />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignIn />} />
        <Route path='/usertype' element={<Usertype />} />
        <Route path='/vendor' element={<Vendor choice={choice} setChoice={setChoice} company={company} setCompany={setCompany} />} />
        <Route path='/dashboard' element={<Dashboard choice={choice} company={company} money={money} />} />
        <Route path='/vendor' element={<Vendor />} />
        {/* <Route path='/user' element={<User />} /> */}
        <Route path='/dashboard' element={<Dashboard />} />
        {/* <Route path='/boatid' element={<BoatId />} /> */}
        <Route path='/cardcomponent' element={<CardComponent />} />
        <Route path='/filterbar' element={<FilterBar />} />
        <Route path='/cardlist' element={<CardList />} />
        <Route path='/filterbar1' element={<FilterBar1 />} />
        <Route path='/filtercards' element={<Filtercards />} />
      </Routes >
    </div >


  )
}

export default App

