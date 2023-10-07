export const cashFormatter = (balance) => {
    const cash = Number.parseFloat(balance);
    return (
      cash.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  };