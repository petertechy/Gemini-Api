import React from 'react'
import { useParams } from 'react-router-dom'
const Welcome = () => {
    const param = useParams()
  return (
    <div className='page'>


        Welcome to {param.data}
    </div>
  )
}

export default Welcome