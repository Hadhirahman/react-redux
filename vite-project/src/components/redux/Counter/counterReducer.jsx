import { DECREMENT, INCREMENT } from "./counterType"


const initialValue={
    count:0
}

const countreduce=(state=initialValue,action)=>{
switch (action.type) {
    case INCREMENT:
        return{
            count:state.count+1
        }
        
     case DECREMENT:
        return{
            count:state.count-1
        }   
    
    default:
        return state
}
}

export default countreduce