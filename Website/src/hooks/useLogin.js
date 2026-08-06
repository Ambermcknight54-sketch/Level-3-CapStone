import { useState, useEffect } from "react";

export function useLogin(prisma, login) {
  const [user, setUser] = useState();

  useEffect(componentDidUpdate, [prisma, login]);

  return user;

  function componentDidUpdate() {
    // 1. Check database if credentials are provided
    if (prisma && login) {
      handleLogin();
    } else {
      // 2. Otherwise load existing session from localStorage
      const userString = localStorage.getItem("user");

      if (userString) {
        try {
          const storedUser = JSON.parse(userString);
          setUser(storedUser);
        } catch (error) {
          console.error("Failed to parse user from localStorage:", error);
        }
      }
    }
  }

  async function handleLogin() {
    try {
      const foundUser = await prisma.users.findFirst({
        where: {
          email: login.email,
          password: login.password,
        },
      });

      if (foundUser) {
        const userString = JSON.stringify(foundUser);
        localStorage.setItem("user", userString);
        setUser(foundUser);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  }
}

//     const storedUser = JSON.parse(userString);
//     setUser(storedUser);
//   }
//   if (prisma) {
//     if (login) {
//       handleLogin();
// }
