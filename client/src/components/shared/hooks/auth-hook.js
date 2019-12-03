import { useState, useCallback, useEffect } from "react";
import { AuthContext } from "./components/shared/context/auth-context";

export const useAuth = () => {
  const [token, setToken] = useState(false);
  const [name, setName] = useState(false);
  const [userId, setUserId] = useState(false);
  const [trip, updateTrip] = useState({});

  const login = useCallback((userId, name, token) => {
    setToken(token);
    setName(name);
    setUserId(userId);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: userId,
        name: name,
        token: token
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    setName(null);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData && storedData.token) {
      login(storedData.userId, storedData.name, storedData.token);
    }
  }, [login]);

  return { token, login, logout, userId, name, trip };
};
