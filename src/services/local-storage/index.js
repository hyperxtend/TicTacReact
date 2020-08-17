export const getStateFromLocalStorage = () => {
  try {
    const registeredState = localStorage.getItem('state');
    console.log('track', registeredState);
    if (registeredState === null) {
      return undefined;
    }
    return JSON.parse(registeredState);
  } catch (error) {
    return undefined;
  }
};

export const saveStateToLocalStorage = (currentState) => {
  try {
    const registeredState = JSON.stringify(currentState);
    localStorage.setItem('state', registeredState);
  } catch (error) {
    return error;
  }
  return undefined;
};
