export const rescueAnimals = (state = [], action) => {
  switch (action.type) {
    case 'SET_ANIMALS':
      return [...state, action.animals]
    default :
      return state;
  }
};
