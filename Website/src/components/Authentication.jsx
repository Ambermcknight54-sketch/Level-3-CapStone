import { Login } from "./Login";
import { Logout } from "./Logout";

export function Authentication({ setLogin, user }) {
  let component;

  if (user) {
    component = <Logout setLogin={setLogin} />;
  } else {
    component = <Login setLogin={setLogin} />;
  }

  // let component =

  // <Login setLogin={setLogin} />;

  // if (user) {
  //   component = <Logout setLogin={setLogin} />;
  // }

  return component;
}
