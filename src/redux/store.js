import { configureStore } from "@reduxjs/toolkit";
import { cartApi } from "./services/cartApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "./services/productApi";
import { userApi } from "./services/userApi";


export const store = configureStore({
      reducer:{
        [cartApi.reducerPath]: cartApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
        [userApi.reducerPath]: userApi.reducer
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cartApi.middleware , productApi.middleware , userApi.middleware),
})

setupListeners(store.dispatch)