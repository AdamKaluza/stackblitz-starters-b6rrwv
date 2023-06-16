import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { FilterContext } from '../contexts/FilterContext';


const GroupedUserList = () => {
  const [users] = useContext(UserContext);
  const [filter] = useContext(FilterContext);

  const filteredUsers = users.filter(user => user.toLowerCase().includes(filter.toLowerCase()));
  const usersGrouped = filteredUsers.reduce((acc, user) => {
      const firstLetter = user[0].toUpperCase();
      if (!acc[firstLetter]) {
          acc[firstLetter] = [];
      }
      acc[firstLetter].push(user);
      return acc;
  }, {});

  return (
      <div>
          {Object.keys(usersGrouped).sort().map(letter => (
              <div key={letter}>
                  <h2>{letter}</h2>
                  <ul>
                      {usersGrouped[letter].map((user, index) => <li key={index}>{user}</li>)}
                  </ul>
              </div>
          ))}
      </div>
  );
};

export default GroupedUserList;