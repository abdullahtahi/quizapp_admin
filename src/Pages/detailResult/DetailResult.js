import React,{useEffect,useState} from 'react'
import "./detailResult.css"
import { useParams } from 'react-router-dom'
import axios from "axios"
import {useDispatch,useSelector} from "react-redux"
import Paper from '@mui/material/Paper';
export default function DetailResult() {
    const [displaydetail,setdisplaydetail]=useState()
    const [loading,setloading]=useState(false)
    const {id}=useParams()
    console.log(displaydetail)
const dispatch=useDispatch()
const {detailresult}=useSelector((state)=>state.detailresult)
console.log(detailresult)
    const getsingleresult=async()=>{
    try {
        setloading(true)
        const {data}=await axios.get(`http://localhost:3001/quizapp/getsingleresult/${id}`)
        console.log(data)
        dispatch({
            type:"GETDETAIL_LOADING"})
            dispatch({
                type:"GETDETAIL_SUCCESS",
                payload:data
            })
            setloading(false)

          
    } catch (error) {
        console.log(error.response)
    }
}
    useEffect(() => {
        getsingleresult();
}, [id])
    return (
<div className="container">
       { loading? <h1>Loading...</h1>:<Paper style={{
            width:"500px"
         }} elevation={3} >
          <p style={{
            fontSize:"20px"
          }}><span style={{
            fontSize:"20px"
          }}>Answer:</span>{detailresult.quizans}</p>
        
         <p style={{
            fontSize:"20px"
          }}><span style={{
            fontSize:"20px"
          }}>Marks:</span>{detailresult.marks}</p>
        
        <p style={{
            fontSize:"20px"
          }}><span style={{
            fontSize:"20px"
          }}>Date:</span>{detailresult.date}</p> 
    </Paper>}
    </div>

)
}
