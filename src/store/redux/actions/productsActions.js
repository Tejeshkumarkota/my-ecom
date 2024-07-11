// step 2

import { Endpoints } from "../../../shared/constants/Endpoints";
import { getFullUrl, services } from "../../../shared/helpers";
import * as types from "../actionTypes";

export const getProducts = () => {
  return (dispatch) => {
      dispatch({
          type: types.GET_PRODUCTS_START,
          payload: null
      })
    services.Get(getFullUrl(Endpoints.PRODUCTS))
    .then((response) => {
        console.log(response)
        if(response.status === 200 && response.data){
            dispatch({
                type: types.GET_PRODUCTS_SUCCESS,
                payload: response.data
            })  
        }else{
            dispatch({
                type: types.GET_PRODUCTS_FAIL,
                payload: {
                    data:null,
                    message: "data not found"
                }
            })
        }
    })
    .catch((error)=>{
        dispatch({
            type: types.GET_PRODUCTS_FAIL,
            payload: {
                data:null,
                message:error.message
            }
        })
    })
};
};
export const getWishList_Products = () => {
  return (dispatch) => {
      dispatch({
          type: types.GET_WHISH_LIST_START,
          payload: null
      })
    services.Get(getFullUrl(Endpoints.PRODUCTS)).then((response=null) => {
        if(response.status === 200 && response.data){
            // console.log(response.data)
            dispatch({
                type: types.GET_WHISH_LIST_SUCCESS,
                payload: response.data
            })  
        }else{
            dispatch({
                type: types.GET_WHISH_LIST_FAIL,
                payload: response
            })
        }
    })
};
};
