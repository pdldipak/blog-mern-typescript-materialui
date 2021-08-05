import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
type Props = {
  user: string | null;
  loading: boolean;
  error: boolean;
  onLogin?: (username: string, password: string) => Promise<void>;
  onLogout?: () => void;
};

const initialState = {
  user: null,
  loading: false,
  error: false,
};

export const UserContext = createContext<Props>(initialState);

export const UserContextProvider: React.FC<React.ReactNode> = ({
  children,
}) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  console.log(user);
  const onLogin = async (username: string, password: string) => {
    setLoading(true);
    setError(false);
    try {
      await axios
        .post('/blog/auth/login', {
          username,
          password,
        })
        .then(res => setUser(res.data));
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  const onLogout = () => setUser(null);

  // method returns value of the specified Storage Object item.
  useEffect(() => {
    const localData = localStorage.getItem('username');
    if (localData) {
      setUser(JSON.parse(localData));
    }
  }, []);

  //method sets the value of the specified Storage Object item
  useEffect(() => {
    localStorage.setItem('username', JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, loading, error, onLogin, onLogout }}>
      {children}
    </UserContext.Provider>
  );
};
