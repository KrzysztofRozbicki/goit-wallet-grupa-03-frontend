export const setUserNameAction = (state, action) => {
  state.user.name = action.payload;
};

export const setUserTokenAction = (state, action) => {
  state.user.token = action.payload;
};

export const setErrorAction = (state, action) => {
  state.error = action.payload;
};

export const setIsAuthAction = state => {
  state.isAuth = true;
};
