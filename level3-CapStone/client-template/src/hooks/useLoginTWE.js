import { useState, useEffect } from "react";

export function useLogin(prisma, login) {
  const [user, setUser] = useState();

  useEffect(componentDidUpdate, [prisma, login]);

  return user;

  function componentDidUpdate() {
    const userString = localStorage.getItem("user");
    const storedUser = JSON.parse(userString);
    setUser(storedUser);

    if (prisma) {
      if (login) {
        handleLogin();
      }
    }
  }

  async function handleLogin() {
    const foundUser = await prisma.users.findFirst({
      where: {
        email: login.email,
        password: login.password,
      },
    });

    const userString = JSON.stringify(foundUser);
    localStorage.setItem("user", userString);

    setUser(foundUser);
  }
}
