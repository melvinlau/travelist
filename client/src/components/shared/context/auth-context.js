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
  // updateTrip: () => { },
  // login: () => { },
  // logout: () => { },

  name: null,
  token: null,
  userId: null,
  trip: null,
  updateTrip: () => {},
  login: () => {},
  logout: () => {}
});
