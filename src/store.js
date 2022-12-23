import {combineReducers, applyMiddleware,createStore} from 'redux'
import thunk  from 'redux-thunk' //to generate middleware
import { restaurantListReducer } from './Reducer/restaurantReducer'

const reducers=combineReducers({//2
    restaurantReducer:restaurantListReducer
    //key:function
})
const middleware=[thunk]
const store=createStore(reducers,applyMiddleware(...middleware))//1

export default store 