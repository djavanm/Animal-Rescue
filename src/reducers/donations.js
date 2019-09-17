export const donations = (state = [], action) => {
  switch (action.type) {
    case 'SET_DONATIONS' :
      return [...state, action.donations]
    default :
      return state;
  }
};
