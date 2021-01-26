import { all, put, call, takeLatest } from "redux-saga/effects";

import { SIGN_OUT_SUCCESS } from "../user/user.actionTypes";
import { CLEAR_CART } from "./cart.actions";

function* clearCartOnSignOutSuccess() {
  yield put(CLEAR_CART());
}

function* onClearCartOnSignOutSuccessStart() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOutSuccess);
}

export function* cartSagas() {
  yield all([call(onClearCartOnSignOutSuccessStart)]);
}
