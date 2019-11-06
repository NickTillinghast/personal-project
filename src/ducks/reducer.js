const initialState = {
  user: null
};

export const SET_USER = "SET_USER";

export default function reducer(state = initialState, action) {
  let { payload } = action;
  switch (action.type) {
    case SET_USER:
      return { user: payload };
    default:
      return state;
  }
}
export function setUser(user) {
  return {
    type: SET_USER,
    payload: user
  };
}
