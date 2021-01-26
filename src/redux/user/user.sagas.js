import { all, call, put, takeLatest } from "redux-saga/effects";
import * as userActionTypes from "./user.actionTypes";

import {
  EMAIL_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  CHECK_USER_SESSION_END,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from "./user.actions";

import {
  auth,
  createUserProfileDocument,
  googleProvider,
  getCurrentUser,
} from "../../firebase/firebase.utils";

function* fetchUserData(user, additionalData) {
  try {
    const userRef = yield call(createUserProfileDocument, user, additionalData);
    const userSnapshot = yield userRef.get();
    const userData = { id: userSnapshot.id, ...userSnapshot.data() };
    yield put(SIGN_IN_SUCCESS(userData));
  } catch (error) {
    yield put(SIGN_IN_FAILURE(error.message));
  }
}

function* onGoogleSignIn() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield* fetchUserData(user);
  } catch (error) {
    yield put(SIGN_IN_FAILURE(error.message));
  }
}

function* onEmailSignIn({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield* fetchUserData(user);
  } catch (error) {
    yield put(SIGN_IN_FAILURE(error.message));
  }
}

function* isUserAuthenticated() {
  try {
    const user = yield getCurrentUser();
    if (!user) {
      yield put(CHECK_USER_SESSION_END());
      return;
    }
    yield* fetchUserData(user);
  } catch (error) {
    yield put(SIGN_IN_FAILURE(error.message));
  }
}

function* onSignOut() {
  try {
    yield auth.signOut();
    yield put(SIGN_OUT_SUCCESS());
  } catch (error) {
    yield put(SIGN_OUT_FAILURE(error.message));
  }
}

function* onSignUp({ payload: { email, password, ...additionalData } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield call(createUserProfileDocument, user, additionalData);
    yield put(SIGN_UP_SUCCESS());
    yield put(EMAIL_SIGN_IN_START({ email, password }));
  } catch (error) {
    yield put(SIGN_UP_FAILURE(error.message));
  }
}

// function* onSignUp({ payload: { email, password, ...additionalData } }) {
//   try {
//     const { user } = yield auth.createUserWithEmailAndPassword(email, password);
//     yield put(SIGN_UP_SUCCESS({ user, additionalData }));
//   } catch (error) {
//     yield put(SIGN_UP_FAILURE(error.message));
//   }
// }

// function* signUpThenSignIn({ payload: { user, additionalData } }) {
//   try {
//     yield* fetchUserData(user, additionalData);
//   } catch (error) {
//     yield put(SIGN_UP_FAILURE(error.message));
//   }
// }

function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, onGoogleSignIn);
}

function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, onEmailSignIn);
}

function* onCheckUserSessionStart() {
  yield takeLatest(
    userActionTypes.CHECK_USER_SESSION_START,
    isUserAuthenticated
  );
}

function* onSignOutStart() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, onSignOut);
}

function* onSignUpStart() {
  yield takeLatest(userActionTypes.SIGN_UP_START, onSignUp);
}

// function* onSignUpSuccess() {
//   yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signUpThenSignIn);
// }

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSessionStart),
    call(onSignOutStart),
    call(onSignUpStart),
    // call(onSignUpSuccess)
  ]);
}
