import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useRedirect(url, milliseconds) {
  const navigateTo = useNavigate();
  const [timerId, setTimerId] = useState();
  useEffect(componentDidMount, []);
  return handleRedirect;

  function componentDidMount() {
    if (milliseconds) {
      const id = setTimeout(handleRedirect, milliseconds);
      setTimerId(id);
    }
  }
  function handleRedirect() {
    navigateTo(url);
    clearTimeout(timerId);
  }
}
