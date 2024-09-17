import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext(null);

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ firstName: '', lastName: '' });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
