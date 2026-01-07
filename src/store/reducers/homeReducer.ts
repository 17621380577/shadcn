export const SendFaxReducer: STORE.IReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAX_NUMBER_HISTORY':
      if (Array.isArray(state.faxNumberHistory)) {
        const index = state.faxNumberHistory.findIndex(
          (e) =>
            e.countryId === action.payload.countryId && e.faxNumber === action.payload.faxNumber,
        );
        if (index > -1) {
          const newState = {
            ...state,
            faxNumberHistory: [
              ...state.faxNumberHistory.slice(0, index),
              action.payload,
              ...state.faxNumberHistory.slice(index + 1),
            ],
          };
          return { ...newState };
        } else {
          return {
            ...state,
            faxNumberHistory: [action.payload, ...(state.faxNumberHistory || [])],
          };
        }
      }
      return {
        ...state,
      };
    case 'SET_FAX_COVER_FORM':
      return {
        ...state,
        faxCoverForm: action.payload,
      };
    case 'SET_FAX_SELECTED_COUNTRY_ID':
      return {
        ...state,
        faxCurrentCountryIndex: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default [SendFaxReducer];
