import { configureStore } from '@reduxjs/toolkit';
import { mainSlice } from './Reducers/MainSlice';
// Configure and create the Redux store
export default configureStore({
  reducer: {
    main: mainSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    // Disable checks for immutability and serialization to improve performance
    immutableCheck: false,
    serializableCheck: false,
  })
})