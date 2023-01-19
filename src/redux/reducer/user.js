const initGlobalState = {
  userData: null,
  userOffline: null,
};

export const userReducer = (state = initGlobalState, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        userData: action.value,
      };
    case 'SET_USER_OFFLINE':
      return {
        ...state,
        userOffline: action.value,
      };

    default:
      return state;
  }
};
