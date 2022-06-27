import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import getresultData from "../dispatch/getresultData"
import getdetailresult from '../dispatch/getdetailresult'
const  reducer= combineReducers({
    result:getresultData,
    detailresult:getdetailresult,
  })
export const store = configureStore({ 
    reducer
 })
