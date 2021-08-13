import React, { useEffect } from "react";
import { useParams } from "react-router";
import Axios from "axios";
import { setUser } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectUsers } from "../HomePage/selectors";
import styled from "styled-components";

const UserContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
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

const UserEmail = styled.h3`
  font-size: 18px;
  color: #353535;
  margin: 0;
`;

const stateSelector = createSelector(makeSelectUsers, (user) => ({
  user,
}));

const actionDispatch = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});

const UserPage = (props) => {
  const { user } = useSelector(stateSelector);
  const { setUser } = actionDispatch(useDispatch());

  const { userId } = useParams();

  const fetchUser = async (id) => {
    const response = await Axios.get(`https://reqres.in/api/users/${id}`).catch(
      (err) => console.log("Err: ", err)
    );
    if (response) setUser(response.data.data);
  };
  useEffect(() => {
    if (userId && userId !== "") fetchUser(userId);
  }, [userId]);

  return <div> Hola test!!!</div>;
};

export default UserPage;
