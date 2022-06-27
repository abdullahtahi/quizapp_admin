import React from 'react'
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './Component/Header/Header';
import DisplayingResult from './Pages/displayingResult/DisplayingResult';
import DetailResult from './Pages/detailResult/DetailResult';
import "./App.css"
export default function App() {
  return (
    <div className='myallcontent'>
    <Router>
      <Header/>
      <Routes>
<Route path="/" element={<DisplayingResult/>}/>
<Route path="/quizapp/detailresult/:id" element={<DetailResult/>}/>
      </Routes>
    </Router>
    </div>
  )
}
