import { useEffect } from "react";
import { Collapse, initTWE } from "tw-elements";

export function useCollapseTWE() {
  useEffect(componentDidMount, []);

  function componentDidMount() {
    initTWE({ Collapse });
  }
}
