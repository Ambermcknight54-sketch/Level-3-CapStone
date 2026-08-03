import { useEffect } from "react";
import { Modal, Ripple, initTWE } from "tw-elements";

export function useModalTWE() {
  useEffect(componentDidMount, []);

  function componentDidMount() {
    initTWE({ Modal, Ripple });
  }
}
