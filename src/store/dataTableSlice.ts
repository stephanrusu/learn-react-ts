import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialDataTable } from '../constants/initialDataTable';

const initialState = {
  entries: initialDataTable,
  currentPage: 1,
  itemsPerPage: 10,
};

const dataTableSlice = createSlice({
  name: 'dataTable',
  initialState,
  reducers: {
    updateCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    updateItemsPerPage(state, action: PayloadAction<number>) {
      state.itemsPerPage = action.payload;
    },
    updateEntries(state, action: PayloadAction<Movie[]>) {
      state.entries = action.payload;
    },
  },
});

export const { updateCurrentPage, updateItemsPerPage, updateEntries } = dataTableSlice.actions;

export default dataTableSlice.reducer;
