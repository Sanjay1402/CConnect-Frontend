import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null,
  });

  const setAuthInfo = ({ user, token }) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    setAuthData({ user, token });
  };

  const clearAuthInfo = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setAuthData({ user: null, token: null });
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedToken = localStorage.getItem('token');
    if (storedUser && storedToken) {
      setAuthData({ user: storedUser, token: storedToken });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authData, setAuthInfo, clearAuthInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
