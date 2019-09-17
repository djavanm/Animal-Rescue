export const isLoading = (state = true, action) => {
  switch (action.type) {
    case 'COMPLETE' :
      return false;
    case 'LOADING' :
      return true;
    default :
      return state;
  };
};
