export const selectError = state => state.session.error;

export const selectIsAuth = state => state.session.isAuth;

export const selectUserName = state => state.session.user.name;

export const selectUserToken = state => state.session.user.token;

export const selectIsRefreshing = state => state.session.isRefreshing;
