/* eslint-disable prettier/prettier */
import { createSlice } from 'react-redux';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoriteList: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favoriteList = state.favoriteList.concat(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favoriteList = state.favoriteList.filter(
        item => item.id !== action.payload,
      );
    },
  },
});
export const {addFavorite, removeFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;
