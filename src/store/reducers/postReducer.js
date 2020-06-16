const initialState = {
  items: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export const postManager = (state) => state;
