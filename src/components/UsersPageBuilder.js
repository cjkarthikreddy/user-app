import React, { useState, useEffect } from "react";
import { getUsers } from "../client/userServiceClient";
import UsersPage from "./UsersPage";

const UsersPageBuilder = (props) => {
  const [users, setUsers] = useState([]);
  const [sliceInfo, setSliceInfo] = useState([]);
  const [pageNumber, setPageNumber] = useState(null);

  useEffect(() => {
    getUserList(0);
  }, []);

  function getUserList(
    newPageNumber,
    lastName = null,
    age = null,
    sortKey = null,
    sortDirection = null
  ) {
    getUsers(newPageNumber, lastName, age, sortKey, sortDirection).then(
      (_getUsersResponse) => {
        setUsers(_getUsersResponse.users);
        setSliceInfo(_getUsersResponse.sliceInfo);
        setPageNumber(_getUsersResponse.sliceInfo.number);
      }
    );
  }

  function navigateToPage(value, lastName, age, sortKey, sortDirection) {
    getUserList(pageNumber + value, lastName, age, sortKey, sortDirection);
  }

  return (
    <>
      <UsersPage
        users={users}
        sliceInfo={sliceInfo}
        navigateToPage={navigateToPage}
        handleApply={getUserList}
      />
    </>
  );
};

export default UsersPageBuilder;
