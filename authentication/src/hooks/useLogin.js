// src/hooks/useLogin.js

import { useState, useEffect } from "react";

export function useLogin(prisma, login) {
  const [user, setUser] = useState();

  useEffect(componentDidUpdate, [prisma, login]);

  return user;

  function componentDidUpdate() {
    // 1. Retrieve string from localStorage
    const userString = localStorage.getItem("user");

    // 2. Safely parse JSON only if string exists
    if (userString) {
      try {
        const storedUser = JSON.parse(userString);

        // Prevent infinite render loops by checking if user changed
        if (JSON.stringify(user) !== JSON.stringify(storedUser)) {
          setUser(storedUser);
        }
      } catch (error) {
        console.error("Failed to parse user from localStorage:", error);
      }
    }

    // 3. Keep conditional check strictly inside componentDidUpdate
    if (prisma && login) {
      handleLogin();
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

//     const storedUser = JSON.parse(userString);
//     setUser(storedUser);
//   }
//   if (prisma) {
//     if (login) {
//       handleLogin();
// }
