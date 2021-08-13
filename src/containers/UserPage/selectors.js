import { createSelector } from "reselect";

const userPageState = (state) => state.userPage;

export const makeSelectUsers = createSelector(
  userPageState,
  (userPage) => userPage.user
);
