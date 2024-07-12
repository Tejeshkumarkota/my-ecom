// step 2

import { Endpoints } from "../../../shared/constants/Endpoints";
import { getFullUrl, services } from "../../../shared/helpers";
import * as types from "../actionTypes";

export const getProducts = () => {
  return (dispatch) => {
    dispatch({
      type: types.GET_PRODUCTS_START,
      payload: null,
    });
    services
      .Get(getFullUrl(Endpoints.PRODUCTS))
      .then((response) => {
        if (response.status === 200 && response.data) {
          dispatch({
            type: types.GET_PRODUCTS_SUCCESS,
            payload: response.data,
          });
        } else {
          dispatch({
            type: types.GET_PRODUCTS_FAIL,
            payload: {
              data: null,
              message: "data not found",
            },
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: types.GET_PRODUCTS_FAIL,
          payload: {
            data: null,
            message: error.message,
          },
        });
      });
  };
};
export const getWishList_Products = () => {
  return (dispatch) => {
    dispatch({
      type: types.GET_WHISH_LIST_START,
      payload: null,
    });
    services
      .Get(getFullUrl(Endpoints.WISH_LIST))
      .then((response) => {
        if (response.status === 200 && response.data) {
          dispatch({
            type: types.GET_WHISH_LIST_SUCCESS,
            payload: response.data,
          });
        } else {
          dispatch({
            type: types.GET_WHISH_LIST_FAIL,
            payload: {
              data: null,
              message: "data not found",
            },
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: types.GET_WHISH_LIST_FAIL,
          payload: {
            data: null,
            message: error.message,
          },
        });
      });
  };
};
export const postWishList_Products = (data) => {
  return (dispatch) => {
    dispatch({
      type: types.POST_WHISH_LIST_START,
      payload: null,
    });
    services
      .Post(getFullUrl(Endpoints.WISH_LIST),{id:data})
      .then((response) => {
        if (response.status === 201 && response.data) {
          dispatch({
            type: types.POST_WHISH_LIST_SUCCESS,
            payload: response.data,
          });
        } else {
          dispatch({
            type: types.POST_WHISH_LIST_FAIL,
            payload: {
              data: null,
              message: "data not found",
            },
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: types.POST_WHISH_LIST_FAIL,
          payload: {
            data: null,
            message: error.message,
          },
        });
      });
  };
};
export const deleteWishList_Products = (id) => {
  // console.log(data)
  return (dispatch) => {
    // dispatch({
    //   type: types.GET_WHISH_LIST_START,
    //   payload: null,
    // });
    services
      .Delete(getFullUrl(Endpoints.WISH_LIST)+'/'+id)
      .then((response) => {
        // console.log("response",response)
        // if (response.status === 200 && response.data) {
          // console.log('post_response',response.data)
          // dispatch({
          //   type: types.POST_WHISH_LIST_SUCCESS,
          //   payload: response.data,
          // });
        // } else {
          // dispatch({
          //   type: types.POST_WHISH_LIST_FAIL,
          //   payload: {
          //   //   data: null,
          //   //   message: "data not found",
          //   },
          // });
        // }
      })
      .catch((error) => {
        // dispatch({
        //   type: types.POST_WHISH_LIST_FAIL,
        //   payload: {
        //     // data: null,
        //     // message: error.message,
        //   },
        // });
        console.log(error)
      });
  };
};
