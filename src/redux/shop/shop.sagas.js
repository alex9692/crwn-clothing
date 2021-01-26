import { all, takeLatest, call, put } from "redux-saga/effects";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
} from "./shop.actions";
import { FETCH_COLLECTIONS_START } from "./shop.actionTypes";

function* onFetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const mappedCollections = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(FETCH_COLLECTIONS_SUCCESS(mappedCollections));
  } catch (error) {
    yield put(FETCH_COLLECTIONS_FAILURE(error.message));
  }
}

function* onFetchCollectionStart() {
  yield takeLatest(FETCH_COLLECTIONS_START, onFetchCollectionAsync);
}

export function* shopSagas() {
  yield all([call(onFetchCollectionStart)]);
}
