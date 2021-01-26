import { applyMiddleware, createStore, compose } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./root-reducer";
import rootSagas from "./root-sagas";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
let finalMiddlewares = applyMiddleware(...middlewares);

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  finalMiddlewares = composeEnhancers(applyMiddleware(...middlewares));
}

export const store = createStore(rootReducer, finalMiddlewares);

sagaMiddleware.run(rootSagas);

export const persistor = persistStore(store);
