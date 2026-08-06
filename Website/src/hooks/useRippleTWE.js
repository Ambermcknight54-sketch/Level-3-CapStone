import { useEffect } from "react";
import { Ripple, initTWE } from "tw-elements";

export function useRippleTWE() {
  useEffect(componentDidMount, []);

  function componentDidMount() {
    initTWE({ Ripple });
  }
}
