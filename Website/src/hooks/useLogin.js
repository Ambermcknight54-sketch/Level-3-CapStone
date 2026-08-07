import { useState, useEffect } from "react";

export function useLogin(prisma, login) {
  const [user, setUser] = useState();
  useEffect(componentDidUpdate, [prisma, login]);
  return user;

  function componentDidUpdate() {
    if (prisma && login) handleLogin();
  }

  async function handleLogin() {
    const where = {
      email: login.email,
      password: login.password,
    };
    const result = await prisma.users.findFirst({ where });
    setUser(result);
  }
}
