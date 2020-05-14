import { onChatMessages } from './api';

export const logIn = (username) => ({
  type: 'LOG_IN',
  payload: { username },
});

export const logOut = () => ({
  type: 'LOG_OUT',
});

// Just an action dispatched on startup to trigger initializations and side-effects
export const init = () => ({
  type: 'INIT',
});

export const setChatMessages = (messages) => ({
  type: 'SET_CHAT_MESSAGES',
  payload: { messages },
});

export const addChatMessage = (message) => ({
  type: 'ADD_CHAT_MESSAGE',
  payload: { message },
});

// "side-effect" action
// redux-thunk allows actions to dispatch by returning a function instead of an object
// Typically used for actions fetching asynchronous data
export const loadChatMessages = () => (dispatch) => {
  onChatMessages((messages) => {
    dispatch(setChatMessages(messages));
  });
};

/*
More complete example: an async operation has typically 3 cases in reducer, and one dispatch-action

export const fetchBoardPosts = () => (dispatch) => {
  // 1. update state { loading: true } to show a spinner
  dispatch({ type: 'FETCH_BOARD_POSTS_START' });

  // 2. start async operation
  $.get('/board/posts')
    .then(result => {
      // 3.a. success, update state { loading: false, result } and UI accordingly
      dispatch({ type: 'FETCH_BOARD_POSTS_SUCCESS', payload: { result } })
    })
    .catch(xhr => {
      // 3.a. error, update state { loading: false, error } and UI accordingly
      dispatch({ type: 'FETCH_BOARD_POSTS_FAIL', error: true, payload: { error: xhr.responseText } })
    })
}
*/
