import { useEffect } from "react";
import { Carousel, initTWE } from "tw-elements";

export function useCarouselTWE() {
  useEffect(componentDidMount, []);

  function componentDidMount() {
    initTWE({ Carousel });
  }
}
