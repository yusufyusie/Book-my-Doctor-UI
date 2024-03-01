const initialState = {
  doctors: [],
};

function doctorReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_DOCTOR':
      return { ...state, doctors: [...state.doctors, action.payload] };
    default:
      return state;
  }
}

export default doctorReducer;
