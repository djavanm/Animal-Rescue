export const setAnimals = animals => ({
  type: 'SET_ANIMALS',
  animals
});

export const setDonations = donations => ({
  type: 'SET_DONATIONS',
  donations
});

export const hasError = message => ({
  type: 'HAS_ERROR',
  message
});

export const loadingComplete = () => ({
  type: 'COMPLETE'
});

export const nowLoading = () => ({
  type: 'LOADING'
});
