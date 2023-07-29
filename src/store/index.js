import { configureStore } from "@reduxjs/toolkit";
import routeSlice from "./slices/routeSlice";
import createSagaMiddleware from "redux-saga";
import { routeSagaWatcher } from "../sagas/routeSaga";
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: routeSlice,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(routeSagaWatcher);

export default store;
