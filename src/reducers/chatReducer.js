import { ADD_MESSAGE, ADD_HISTORY, TOGGLE_CHAT } from "./chatActions";

export const chatReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload.message],
      };
    case ADD_HISTORY:
      return {
        ...state,
        messages: action.payload.history,
      };
    case TOGGLE_CHAT:
      return {
        ...state,
        isChatOpen: action.payload.isOpen,
      };
    default:
      return { ...state };
  }
};
