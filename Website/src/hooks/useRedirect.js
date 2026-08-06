import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export function useRedirect(url, milliseconds) {
  const [timerId, setTimerId] = useState();
  const navigateTo = useNavigate();

  function handleRedirect() {
    clearTimeout(timerId);
    if (url) {
      navigateTo(url);
    }
  }

  function componentDidMount() {
    if (milliseconds) {
      const id = setTimeout(handleRedirect, milliseconds);
      setTimerId(id);
    }
  }

  useEffect(componentDidMount, []);

  return handleRedirect;
}
