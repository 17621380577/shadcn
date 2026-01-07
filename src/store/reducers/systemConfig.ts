export const SystemConfigReducer: STORE.IReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SYSTEM_CONFIG':
      return {
        ...state,
        systemConfig: {
          theme: 'red',
          ...action.payload,
        },
      };
    default:
      return {
        ...state,
        ...action.payload,
      };
  }
};
