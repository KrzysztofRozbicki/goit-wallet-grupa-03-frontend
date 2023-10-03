export const changeIsLoadingAction = state => {
  state.isLoading = !state.isLoading;
};

export const changeIsModalLogoutOpenAction = state => {
  state.isModalLogoutOpen = !state.isModalLogoutOpen;
};

export const changeIsModalAddTransactionOpenAction = state => {
  state.isModalAddTransactionOpen = !state.isModalAddTransactionOpen;
};

export const changeIsModalEditTransactionOpenAction = state => {
  state.isModalEditTransactionOpen = !state.isModalEditTransactionOpen;
};
