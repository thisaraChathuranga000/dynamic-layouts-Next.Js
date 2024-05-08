import { createSlice } from '@reduxjs/toolkit';

const selectedIdSlice = createSlice({
    name: 'selectedId',
    initialState: '',
    reducers: {
      setSelectedId: (state, action) => {
        return action.payload;
      },
    },
});
  
export const { setSelectedId } = selectedIdSlice.actions; 
export default selectedIdSlice.reducer;