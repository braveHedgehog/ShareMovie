/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import favoriteReducer from './FavoritesJob/favoriteSlice';
import submitReducer from './SubmitsJob/submitSlice';

export default configureStore({
  reducer: {
    favorites: favoriteReducer,
    submits: submitReducer,
  },
});
