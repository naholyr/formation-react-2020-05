export const initialState = {
  username: null,
  chatMessages: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return { ...state, username: action.payload.username };
    case 'LOG_OUT':
      return { ...state, username: null };
    case 'SET_CHAT_MESSAGES':
      return { ...state, chatMessages: action.payload.messages };
    case 'ADD_CHAT_MESSAGE':
      return {
        ...state,
        chatMessages: [action.payload.message, ...state.chatMessages],
      };
    default:
      return state;
  }
};
