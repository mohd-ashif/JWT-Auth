import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Dashboard = () => {

    const [suc, setSuc] = useState()
    const navigate = useNavigate()
    axios.defaults.withCredentials = true
    useEffect(() => {
        axios.get("http://localhost:3000/dashboard")
        .then(res => {
            if(res.data === "Succcess"){
                setSuc("Successded OK")
            }else{
                navigate('/dashboard')
            }
 
        })

    },  [])

  return (
    <div>
        <h2>Dashboard</h2>
        <h3>{suc}</h3>
    </div>
  )
}

export default Dashboard