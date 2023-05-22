import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = (props) => {
    const navigate=useNavigate();
    const {Component} = props
    const {isAuthenticated} = useSelector(({user}) => user)
    useEffect(() => {
        if(!isAuthenticated){
            navigate("/")
        }
    })
  return (
    isAuthenticated && <Component/>
  )
}

export default ProtectedRoute