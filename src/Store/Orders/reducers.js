import * as actionTypes from "./actionTypes";
import * as processTypes from "../Shared/processTypes";
import { combineReducers } from "redux";
import Immutable from "seamless-immutable";

const initalState = Immutable({});

export const ordersReducer = (state = initalState, action = {}) => {
  switch (action.type) {


    default:
      return state
  }
};

export default combineReducers({
  orders: ordersReducer
});
