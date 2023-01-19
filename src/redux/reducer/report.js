const initReportState = {
  reportData: null,
  selectedCar: null,
  totalKm: null,
  totalVisit: null,
};

export const reportReducer = (state = initReportState, action) => {
  switch (action.type) {
    case 'SET_REPORT':
      return {
        ...state,
        reportData: action.value,
      };
    case 'SET_SELECTED_CAR':
      return {
        ...state,
        selectedCar: action.value,
      };
    case 'SET_TOTAL_KILOMETER':
      return {
        ...state,
        totalKm: action.value,
      };
    case 'SET_TOTAL_VISIT':
      return {
        ...state,
        totalVisit: action.value,
      };
    default:
      return state;
  }
};
