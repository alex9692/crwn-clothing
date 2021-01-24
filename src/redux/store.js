import { applyMiddleware, createStore, compose } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

const middlewares = [];
let addtionalData = applyMiddleware(...middlewares);

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  addtionalData = composeEnhancers(applyMiddleware(...middlewares));
}

export const store = createStore(rootReducer, addtionalData);

export const persistor = persistStore(store);
