const isLoading = (state, action) => {
  return {
    ...state,
    isLoading: action.payload,
  };
};
const updateUserData = (state, action) => {
  return {
    ...state,
    user: action.payload,
    isAdmin: action.payload.isAdmin,
    isLoading: false,
  };
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return isLoading(state, action);
    case "UPDATE_USER_DATA":
      return updateUserData(state, action);
    default:
      return state;
  }
};
