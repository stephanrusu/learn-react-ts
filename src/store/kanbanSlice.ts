import { createSlice } from '@reduxjs/toolkit';
import initialBoards from '../constants/initialBoards';

const kanbanSlice = createSlice({
  name: 'kanban',
  initialState: initialBoards,
  reducers: {}
});


export default kanbanSlice.reducer
