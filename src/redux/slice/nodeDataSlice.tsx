import { createSlice } from '@reduxjs/toolkit';

interface JSXState {
  jsxData: JSX.Element | null;
}
  
const initialState : JSXState = {
  jsxData: null,
};

const nodeDataSlice = createSlice({
  name: 'node',
  initialState,
  reducers: {
    setNodeData(state, action) {
      state.jsxData  = action.payload;
    },
  },
});

export const { setNodeData } = nodeDataSlice.actions;
export default nodeDataSlice.reducer;