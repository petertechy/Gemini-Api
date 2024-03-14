import React, { useState,  useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AboutUsPage = () => {
  const [value, setValue]= useState("")
  const navigate = useNavigate()
  const runOnMount =()=>{
    console.log("Running about us")
  }


  useEffect(()=>{

    runOnMount()

    // return()=>{
      
    //   console.log("component is being unmounted")
    //   // alert("All changes not saved yet")
    //   if(!confirm("Are you sure you want to leave")){
    //     navigate("/about-us")
    //   }
    // }
  }, [value])
  const handleInputChange=(e)=>{
    console.log(e.target.value)
    setValue(e.target.value)
  }
  return (
    <div className='page'>
        <h1>About Us Page {value}</h1>

        <input type="text" onChange={(e)=> handleInputChange(e)} />
    </div>
  )
}

export default AboutUsPage