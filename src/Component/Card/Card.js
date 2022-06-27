import React,{useEffect,useState} from 'react'
import "./Card.css"
import Paper from '@mui/material/Paper';
import {useDispatch,useSelector} from "react-redux"
import {Link} from "react-router-dom"
// import { Router } from 'react-router-dom';
export default function Card(
    {quizdata,
    displayans
    }) {
  console.log(displayans?.length)
        const [displaylength, setdisplaylength] = useState()
  
  const text2="..."
    const { loading, result } = useSelector((state) => state.result) 
    
// const displayans=()=>{

//     quizdata.map((e)=>e.quizans?.length)

//     if(quizdata.quizans?.length>=10)
//     {
//         setdisplaylength(quizdata.quizans.slice(0,7).concat(text2))
//     }
//     else{
//         setdisplaylength(" ")
//     }
// }
useEffect(() => {
if(displayans>10)
{
    setdisplaylength(quizdata.quizans.slice(0,7).concat(text2))
}
else{
    setdisplaylength(quizdata.quizans)
}
}, [displaylength])
// console.log(displaylength) 



    // quizdata.quizans?.length
    //    .slice(0,7).concat(text2))
       
    return (
 <Link to={`/quizapp/detailresult/${quizdata._id}`}>
 <Paper elevation={3}>
   <p> <span>Answer:</span><span>{displaylength}</span></p>
    <p><span>Marks:</span><span>{quizdata.marks}</span></p>
    <p><span>Date:</span><span>{quizdata.date}</span></p>


    
    </Paper>
    </Link>
  )
}
