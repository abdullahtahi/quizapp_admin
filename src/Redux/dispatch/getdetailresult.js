const initialState = {detailresult:[]}

export default function getdetailresult(state = initialState,action){
  switch (action.type) {

  case "GETDETAIL_LOADING":
    return { 
        loading:true,
    detailresult:[] }

    case "GETDETAIL_SUCCESS":
        return { 
            loading:false,
        detailresult:action.payload }
    
  default:
    return state
  }
}
