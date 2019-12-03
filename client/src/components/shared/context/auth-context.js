import { createContext } from "react";

export const AuthContext = createContext({
  name: null,
  token: null,
  userId: null,
  trip: null,
  updateTrip: () => {},
  login: () => {},
  logout: () => {}
});
