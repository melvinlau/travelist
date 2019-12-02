import { createContext } from "react";

export const AuthContext = createContext({
  // isLoggedIn: false,
  // setIsLoggedIn: () => { },
  // userId: undefined,
  // setUserId: () => { },
  // name: undefined,
  // setName: () => { },
  // token: undefined,
  // setToken: () => { },
  // trip: undefined,
  // updateTrip: () => { },
  // login: () => { },
  // logout: () => { },

  isLoggedIn: false,
  userId: null,
  name: null,
  token: null,
  login: () => {},
  logout: () => {}
});
