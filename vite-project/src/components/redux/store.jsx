import {createStore} from "redux"
import countreduce from "./Counter/counterReducer"

const store=createStore(countreduce)

export default store