import { REQUEST_PRODUCT_LIST } from "../actions/ProductActions";
export const SUCCESS_PRODUCT_LIST = "SUCCESS_PRODUCT_LIST";
export const FAILURE_PRODUCT_LIST = "FAILURE_PRODUCT_LIST";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false
};

export default function products(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_PRODUCT_LIST:
      return { ...state, loading: true };
    case SUCCESS_PRODUCT_LIST:
      return { data: action.payload.data, loading: false, error: false };
    case FAILURE_PRODUCT_LIST:
      return { data: [], loading: false, error: true };
    default:
      return state;
  }
};
