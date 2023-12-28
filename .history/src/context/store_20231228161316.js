/* eslint-disable prettier/prettier */
import { configureStore } from 'react-redux';
import favoriteReducer from './FavoriteMovies/FavoriteSlice';

export default configureStore({
  reducer: {
    favorites: favoriteReducer,
  },
});
