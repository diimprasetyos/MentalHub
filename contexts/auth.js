import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import request from "../services/request";
const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [user, setUser] = useState({});
  const [authenticated, setAuthenticated] = useState(false);
  const setToken = (token) => {
    AsyncStorage.setItem("token", token);
  };

  const signup = async ({
    email,
    phone_number,
    name,
    password,
    date_of_birth,
  }) => {
    if (!email || !phone_number || !name || !password) return;
    try {
      const response = await request.User.signup({
        email,
        phone_number,
        name,
        password,
        date_of_birth,
      });
      if (!response.user) return null;

      setUser(response.user);
      setToken(response.token);
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  const login = async (email, password) => {
    if (!email || !password) return;
    try {
      const response = await request.User.login({
        email,
        password,
      });
      if (!response.user) return null;

      setUser(response.user);
      setToken(response.token);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };
  const AuthContextValue = useMemo({
    user,
    setUser,
    setToken,
    signup,
    login,
    logout,
  });
  return <AuthContext.Provider value={AuthContextValue} {...props} />;
};
const useAuthContext = () => useContext(AuthContext);

export { AuthContextProvider, useAuthContext, AuthContext };
