export const setTotalBalanceAction = (state, action) => {
  state.totalBalance = action.payload;
};

export const setDataAction = (state, action) => {
  state.data = action.payload;
};
