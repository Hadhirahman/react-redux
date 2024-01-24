import { DECREMENT, INCREMENT } from "./counterType"

 export const Increment=()=>{
    return{
        type:INCREMENT
    }
}

export const Decrement=()=>{
    return{
        type:DECREMENT
    }
}