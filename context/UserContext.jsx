"use client"
import { createContext, useContext, useState } from 'react';

const userContext = createContext('');

export const UserProvider = ({ children }) => {
  const [User, setUser] = useState('');

  return (
    <userContext.Provider value={{ User, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export function useUser ()  {
  return useContext(userContext);
};
