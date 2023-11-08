import { configureStore } from "@reduxjs/toolkit";
import { cartApi } from "./services/cartApi";
import { setupListeners } from "@reduxjs/toolkit/query";


export const store = configureStore({
      reducer:{
        [cartApi.reducerPath]: cartApi.reducer,
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cartApi.middleware),
})

setupListeners(store.dispatch)