import { Login } from "../components/Login";
import { Logout } from "../components/Logout";

export function Authentication({ setLogin, user }) {
  let component = <Login setLogin={setLogin} />;

  if (user) {
    component = <Logout setLogin={setLogin} />;
  }

  return component;
}
