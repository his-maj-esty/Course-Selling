import { useState } from 'react'
import SignIn from './SignIn';
import {AdminLogin} from './AdminLogin'
import {AdminDashboard} from './AdminDashboard';
import { CourseCard } from './components/CourseCard';
import { UserDashBoard } from './UserDashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
    <AdminDashboard></AdminDashboard>
    {/* <Router>
      <AdminDashboard></AdminDashboard>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path="/userdashboard" element={<UserDashBoard/>}></Route>
        <Route path='/admin' element={<AdminLogin />}></Route>
      </Routes>
    </Router> */}
    </>
  )
}

export default App
