import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import reducer from "./reducers";

export default function makeStore(initialState = {}) {
  const middleware = applyMiddleware(logger, thunk);

  return createStore(reducer, initialState, middleware);
}
