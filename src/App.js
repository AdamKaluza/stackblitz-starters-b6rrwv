import React from 'react';
import { UserProvider } from './contexts/UserContext';
import { FilterProvider } from './contexts/FilterContext';
import AddUser from './components/AddUser';
import FilterUser from './components/FilterUser';
import UserList from './components/UserList';
import GroupedUserList from './components/GroupedUserList';



function App() {
    return (
        <UserProvider>
            <FilterProvider>
                <AddUser />
                <FilterUser />
                <UserList />
                <GroupedUserList />
            </FilterProvider>
        </UserProvider>
    );
}

export default App;