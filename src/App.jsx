import { useState } from 'react'
import SignIn from './SignIn';
import { CourseCard } from './components/CourseCard';
import { UserDashBoard } from './UserDashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path="/userdashboard" element={<UserDashBoard/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
