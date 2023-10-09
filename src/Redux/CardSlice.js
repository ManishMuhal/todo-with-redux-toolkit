import { createSlice } from '@reduxjs/toolkit';

const initialData = {
  list: [],
};

const CardSlice = createSlice({
  name: 'list',
  initialState: initialData,
  reducers: {
    createList: (state, action) => {
      const newList = {
        name: action.payload,
        items: [],
        id: state.list.length + 1,
        receivedData: {
          id: state.list.length + 1,
          additionalData: [],
        },
      };
      state.list.push(newList);
    },
    pushToArray: (state, action) => {
      const { receivedData, itemToPush } = action.payload;
      const listIndex = state.list.findIndex((list) => list.  id === receivedData.id);

      if (listIndex !== -1) {
        const updatedReceivedData = {
          parent_id: receivedData.id,
          additionalData: [
            ...state.list[listIndex].receivedData.additionalData.map((item, index) => ({
              ...item,
              child_id: index + 1,
            })),
            {
              ...itemToPush,
              child_id: state.list[listIndex].receivedData.additionalData.length + 1,
            },
          ],
        };

        state.list[listIndex].receivedData = updatedReceivedData;
      }
    },
    deleteList: (state, action) => {
      const updatedList = action.payload;
      state.list = updatedList;
    },
  },
});

export const { createList, pushToArray,deleteList } = CardSlice.actions;
export default CardSlice.reducer;