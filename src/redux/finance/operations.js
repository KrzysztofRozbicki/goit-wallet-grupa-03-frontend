export const setTotalBalanceAction = (state, action) => {
  state.totalBalance = action.payload;
};

export const setDataAction = (state, action) => {
  state.data = action.payload;
};

export const addTransactionAction = (state, action) => {
  state.data.push(action.payload);
};

export const editTransactionAction = (state, action) => {
  const { id, updatedTransaction } = action.payload;
  const index = state.data.findIndex(transaction => transaction.id === id);
  if (index !== -1) {
    state.data[index] = {
      ...state.data[index],
      ...updatedTransaction,
    };
  }
};
