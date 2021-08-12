import React from "react";
import { createSelector } from "reselect";
import { makeSelectUsers } from "./selectors";

const UsersContainers = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const UserImage = styled.div`
  width: 7em;
  height: 7em;
  img {
    width: 100%;
    height: 100%;
  }
`;

const UserName = styled.h3`
  font-size: 20px;
  color: #000;
  margin: 0;
`;

const stateSelector = createSelector(makeSelectUsers, (users) => ({
  users,
}));

const userslist = (props) => {
  const { users } = useSelector(stateSelector);

  return <div></div>;
};

export default userslist;
