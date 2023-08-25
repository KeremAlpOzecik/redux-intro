import * as actionTypes from "./actionTypes";

export const increaseCounter = () => ({
  type: actionTypes.INCREASE_COUNTER,
  payload: 1,
});

export const decreaseCounter = () => ({
  type: actionTypes.DECREASE_COUNTER,
  payload: 1,
});

export const increaseByTwoCounter = () => ({
  type: actionTypes.INC_BY_2_COUNTER,
  payload: 2,
});
