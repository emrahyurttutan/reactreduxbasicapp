import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";
const rootReducer = combineReducers({
  products: productReducer,
  user: userReducer
});
const store = createStore(
  rootReducer,
  {
    products: { name: "ürün deneme" },
    user: "admin"
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const userUpdateStore = {
  type: "userUpdate",
  payload: {
    user: "emrah"
  }
};

store.dispatch(userUpdateStore);

console.log("store eski", store.getState());
store.subscribe(() => {
  console.log("değişti", store.getState());
});
console.log("store", store.getState());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
