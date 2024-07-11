// step 3
import * as types from "../actionTypes";

const initialState = {
  products: {
    data: null,
    loading: false,
    message: "data not found",
  },
  wishList: {
    data: null,
    loading: false,
    message: "There are no products in whish list",
  },
  cart: {
    data: null,
    loading: false,
    message: "There are no products in cart",
  },
};
const productsReducer = (state = initialState, action) => {
  // console.log(action.type,action.payload)
  switch (action.type) {
    case types.GET_PRODUCTS_START: {
      return {
        ...state,
        products:{
          loading: true,
          data: null,
           message: "getting data"
        }
      };
    }
    case types.GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products:{
          loading: false,
          data: action.payload,
           message: "got data successfully"
        }
      };
    }
    case types.GET_PRODUCTS_FAIL: {
      return {
        ...state,
        products:{
          loading: false,
          data: action.payload.data,
          message: action.payload.message
        }
      };
    }
    default:
      return state;
  }
};

export default productsReducer;
