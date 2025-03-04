import { configureStore } from "@reduxjs/toolkit";
import example from "./slices/example";


const store = configureStore({
  reducer: {
    example: example,
  
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
