export const openLoadingAction = state => {
  state.isLoading = true;
};
export const closeLoadingAction = state => {
  state.isLoading = false;
};

export const openModalLogoutAction = state => {
  state.isModalLogoutOpen = true;
};
export const closeModalLogoutAction = state => {
  state.isModalLogoutOpen = false;
};

export const openModalAddTransactionAction = state => {
  state.isModalAddTransactionOpen = true;
};
export const closeModalAddTransactionAction = state => {
  state.isModalAddTransactionOpen = false;
};

export const openModalEditTransactionAction = state => {
  state.isModalEditTransactionOpen = true;
};
export const closeModalEditTransactionAction = state => {
  state.isModalEditTransactionOpen = false;
};
