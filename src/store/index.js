import { configureStore } from "@reduxjs/toolkit";

import titleNavReducer from "../fetures/TitleNav/TitleNavSlice";
import authReducer from "../fetures/User/UserSlice"
import infoReducer from "../fetures/Info/InfoSlice";

import { apiInfo } from "../services/apiInfoServices";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../services/authService";

const store = configureStore({
    reducer: {
        title: titleNavReducer,
        info: infoReducer,
        auth: authReducer,
        [apiInfo.reducerPath]: apiInfo.reducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(apiInfo.middleware)
            .concat(authApi.middleware)
});

setupListeners(store.dispatch)

export default store