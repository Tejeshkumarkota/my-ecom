// step 4
import {combineReducers} from 'redux';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
    allProducts: productsReducer,
    items: productsReducer
})
export default rootReducer





