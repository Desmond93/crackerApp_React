import {createStore, combineReducers} from 'redux';
import crackerReducer from './crackerReducer'


let reducers = combineReducers({
    cracker: crackerReducer
})

const store = createStore(reducers);

export default store;