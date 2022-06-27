const initialState ={result:[]
}
export default function getresultData(state = initialState,action){
  switch (action.type) {

  case "GETRESULT_LOADING":
    return { 
        loading:true,
        result:[]
         }
         
  case "GETRESULT_SUCCESS":
    return { 
        loading:false,
        result:action.payload
         }

  default:
    return state
  }
}
