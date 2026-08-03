import { useEffect } from "react";
import { Input, initTWE } from "tw-elements";

export function useInputTWE() {
  useEffect(componentDiDMount, []);

  function componentDiDMount() {
    initTWE({ Input });
  }
}
