import React, { useEffect, useState } from 'react'
import "./DisplayingResult.css"
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from "react-redux"
import axios from 'axios';
import Card from '../../Component/Card/Card';
import { ContentPasteSearchOutlined } from '@mui/icons-material';
export default function DisplayingResult() {
    const dispatch = useDispatch()
    const { loading, result } = useSelector((state) => state.result)
    const [loader, setloader] = useState(false)

    const getquiz = async () => {

        try {
            setloader(true)
            const { data } = await axios.get("http://localhost:3001/quizapp/getquizresult")

            dispatch({
                type: "GETRESULT_LOADING"
            })
            
            dispatch({
                type: "GETRESULT_SUCCESS",
                payload: data
            })
            setloader(false)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getquiz();
    }, []);
    //     {
    // result.map((e)=>console.log("the value from map",e.quizans.length))
    // }
    return (
        <div className='container'>
            {loader?<h1>Loading.....</h1>:result.map((e, k) => <Card key={k} quizdata={e} displayans={e.quizans?.length}/>)}
            <div>
            </div>
        </div>
    )
}
