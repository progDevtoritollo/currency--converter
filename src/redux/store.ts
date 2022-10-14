import { configureStore } from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux';
import response from "./response/slice"
import app from "./app/slice"

export const store = configureStore({
  reducer: {
    response,
    app,
  },
});


// export type RootState = ReturnType<typeof store.getState>;

// type AppDispatch = typeof store.dispatch;

// export const useAppDispatch = () => useDispatch<AppDispatch>();
