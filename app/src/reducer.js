export const initialState = {
  username: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return { ...state, username: action.payload.username };
    case 'LOG_OUT':
      return { ...state, username: null };
    default:
      return state;
  }
};
