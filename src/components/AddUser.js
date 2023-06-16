import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';

const AddUser = () => {
  const [users, setUsers] = useContext(UserContext);
  const [name, setName] = useState('');

  const addUser = (e) => {
      e.preventDefault();
      setUsers(prevUsers => [...prevUsers, name]);
  };

  return (
      <form onSubmit={addUser}>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
          <button type="submit">Dodaj użytkownika</button>
      </form>
  );
};

export default AddUser;