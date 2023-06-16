import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { FilterContext } from '../contexts/FilterContext';


const UserList = () => {
  const [users] = useContext(UserContext);
  const [filter] = useContext(FilterContext);

  const filteredUsers = users.filter(user => user.toLowerCase().includes(filter.toLowerCase()));

  return (
      <ul>
          {filteredUsers.map((user, index) => <li key={index}>{user}</li>)}
      </ul>
  );
};

export default UserList;