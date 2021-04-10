import { createSlice } from '@reduxjs/toolkit';
import { initialDataTable } from '../constants/initialDataTable';

const initialState = {
  entries: initialDataTable,
};

const dataTableSlice = createSlice({
  name: 'dataTable',
  initialState,
  reducers: {},
});

export default dataTableSlice.reducer;
