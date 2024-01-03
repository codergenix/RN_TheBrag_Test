import { configureStore } from '@reduxjs/toolkit';
import { mainSlice } from './Reducers/MainSlice';

export default configureStore({
  reducer: {
    main: mainSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
})