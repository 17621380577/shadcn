export const AuthReducer: STORE.IReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload,
      };
    case 'SET_USER_INFO':
      return {
        ...state,
        user: action.payload,
      };
    case 'SET_REGISTER_SUCCESS':
      return {
        ...state,
        registerSuccess: action.payload,
      };
    default:
      return {
        ...state,
        ...action.payload,
      };
  }
};
