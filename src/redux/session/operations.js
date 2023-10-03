export const setUserNameAction = (state, action) => {
  state.user.name = action.payload;
};

export const setUserTokenAction = (state, action) => {
  state.user.token = action.payload;
};

export const changeErrorAction = state => {
  state.error = !state.error;
};

export const changeIsAuthAction = state => {
  state.isAuth = !state.isAuth;
};
