import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLanding from '../components/UserLanding'
import UserDashboard from '../components/UserDashboard'
import UserForgotPassword from '../components/UserForgotPassword'

const UserRoute = () => {
  return (
    <Routes>
        <Route index element ={<UserLanding/>}/>
        <Route path="/dashboard" element ={<UserDashboard/>}/>
        <Route path="/forgot-password" element ={<UserForgotPassword/>}/>
        <Route path="/*" element ={<UserForgotPassword/>}/>
    </Routes>
  )
}

export default UserRoute