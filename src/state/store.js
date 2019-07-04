import { createStore, applyMiddleware, compose  } from "redux";
import globalReducer from "./reducers/globalReducers";

export function createReduxStore() {
  const enhancer = compose(
    applyMiddleware(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
  const store = createStore(globalReducer, enhancer)

  return store
}
