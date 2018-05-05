import { combineReducers } from 'redux'

//import all reducers

import ordersReducer from "./Orders/reducers"

const rootReducer = combineReducers({
    //add reducer here    
    orders: ordersReducer
})

export default rootReducer