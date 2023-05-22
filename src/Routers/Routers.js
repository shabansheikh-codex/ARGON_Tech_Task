import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Route, Routes } from 'react-router-dom'
import AdminDashboard from '../Containers/AdminDashboard/AdminDashboard'
import Error404 from '../Containers/ErrorPage/ErrorPage'
import Login from '../Containers/LoginPage/LoginPage'
import UserDashboard from '../Containers/UserDashboard/UserDashboard'
import ProtectedRoute from './ProtectedRoute'

const Routers = () => {
  const user=useSelector(({user})=>user)
  return (
    <>
      {user.isAuthenticated ?
        <Routes>
          <Route path="/admin-dashboard" element={<ProtectedRoute Component={AdminDashboard}/>}/>
          <Route path="/user-dashboard" element={<ProtectedRoute Component={UserDashboard}/>}/>
          <Route path="*" element={<Link to={`${user.profile.role}-dashboard`}>Redirect to dashboard</Link>}/>
        </Routes>:
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>
      }
    </>
  )
}

export default Routers