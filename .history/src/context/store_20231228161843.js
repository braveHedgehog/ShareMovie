/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import favoriteReducer from './FavoriteMovies/FavoriteSlice';

export default configureStore({
  reducer: {
    favorites: favoriteReducer,
  },
});
