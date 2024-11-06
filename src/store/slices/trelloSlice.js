import { createSlice } from "@reduxjs/toolkit";

export const trelloSlice = createSlice({
  name: "trello",
  initialState: {
    tasks: [],
    openCard: false,
  },

  reducers: {
    handleOpenCard: (state) => {
      state.openCard = true;
    },
    handleCloseCard: (state) => {
      state.openCard = false;
    },
    addCard: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteCard: (state, action) => {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload);
    },
    addNewCard: (state, action) => {
      const { cardId, newTodo } = action.payload;

      const newList = state.tasks.find((item) => item.id === cardId);
      if (newList) {
        newList.list.push(newTodo);
      }
    },
  },
});
export const {
  handleOpenCard,
  addCard,
  handleCloseCard,
  addNewCard,
  deleteCard,
} = trelloSlice.actions;
export default trelloSlice.reducer;
