/* eslint-disable prettier/prettier */
import { configureStore } from 'react-redux';
import favoriteReducer from './FavoritesJob/favoriteSlice';

export default configureStore({
  reducer: {
    favorites: favoriteReducer,
  },
});
