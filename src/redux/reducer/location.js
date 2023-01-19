const initLocationState = {
  formLocation: [
    {
      key: 1,
      category: '',
      location: '',
      tag: '',
    },
    {
      key: 2,
      category: '',
      location: '',
      tag: '',
    },
  ],
  formIdSelect: null,
  formCategorySelect: null,
  dataLocation: null,
  locationType: null,
};

export const locationReducer = (state = initLocationState, action) => {
  switch (action.type) {
    case 'SET_FORM_LOCATION':
      return {
        ...state,
        formLocation: action.value,
      };
    case 'SET_FORM_SELECT_ID':
      return {
        ...state,
        formIdSelect: action.value,
      };
    case 'SET_FORM_SELECT_CATEGORY':
      return {
        ...state,
        formCategorySelect: action.value,
      };
    case 'SET_LOCATION_DATA':
      return {
        ...state,
        dataLocation: action.value,
      };
    case 'SET_LOCATION_BY_CATEGORY':
      return {
        ...state,
        locationType: action.value,
      };
    default:
      return state;
  }
};
