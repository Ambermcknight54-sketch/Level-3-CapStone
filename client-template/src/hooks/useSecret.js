import { useEffect, useState } from "react";

export function useSecret(secretKey) {
  const [secretValue, setSecretValue] = useState();
  useEffect(componentDiDMount, []);

  return [secretValue, handleSubmit];

  function componentDiDMount() {
    const value = sessionStorage.getItem("secretKey");
    setSecretValue(value);
    sessionStorage.clear();
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const value = form.elements[secretKey].value;
    sessionStorage.setItem("secretKey", value);
    setSecretValue(value);
    form.reset();
  }
}
