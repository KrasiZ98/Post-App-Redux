import { createStore, applyMiddleware} from "redux";
import { persistReducer, persistStore } from "redux-persist";
import {thunk} from "redux-thunk"
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";

// const persistConfig = {
//     key: "users",
//     storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(rootReducer, applyMiddleware(thunk));
// const persistor = persistStore(store);

export {
    store,
   
};





