"use client";

import { activeNavState } from "@/state/activeNav";
import { NavLinks } from "@/utils/enums";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";

function useObserver(link: NavLinks) {
  const setActiveNav = useSetRecoilState(activeNavState);

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setActiveNav(link);
    }
  }, [ref, isInView, setActiveNav, link]);

  return { ref };
}

export default useObserver;
