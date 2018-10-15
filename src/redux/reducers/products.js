import * as MFApi from "../../lib/API";

// Action types
const LOAD_PRODUCTS = "bookInventory/books/LOAD_BOOKS";
const SET_CATEGORY = "SET_CATEGORY";

export function loadProducts() {
  return dispatch => {
    return MFApi.getAllProducts().then(products => {
      dispatch({
        type: LOAD_PRODUCTS,
        payload: products
      });
    });
  };
}

export function setCategory() {
  return dispatch => {
    dispatch({
      type: SET_CATEGORY,
      payload: "alma"
    });
  };
}

const initialState = [];
// Los reducers tienen que ser funciones __puras__!!
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
}
