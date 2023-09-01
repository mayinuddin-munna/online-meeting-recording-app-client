export const ADD_MESSAGE = "ADD_MESSAGE";
export const ADD_HISTORY = "ADD_HISTORY";
export const TOGGLE_CHAT = "TOGGLE_CHAT";

export const addMessageAction = (message) => ({
  type: ADD_MESSAGE,
  payload: { message },
});

export const addHistoryAction = (history) => ({
  type: ADD_HISTORY,
  payload: { history },
});

export const toggleChatAction = (isOpen) => ({
  type: TOGGLE_CHAT,
  payload: { isOpen },
});
