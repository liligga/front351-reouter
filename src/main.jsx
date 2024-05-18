import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

// глобальноесостояние
const defaultState = {
    counter: 100,
};
// ф-я для изменения глобального состояния - редьюсер
const counterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "INCREMENT":
          return {counter: state.counter + 1};
        case "DECREMENT":
          return {counter: state.counter - 1};
        default:
          return state;
    }
};
const store = createStore(counterReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
