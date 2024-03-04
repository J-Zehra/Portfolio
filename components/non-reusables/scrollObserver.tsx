"use client";

import { scrollState } from "@/state/scrollState";
import { useEffect, ReactNode } from "react";
import { useSetRecoilState } from "recoil";

type Props = {
  children: ReactNode;
};

export default function ScrollObserver({ children }: Props) {
  const setScrolled = useSetRecoilState(scrollState);

  const handleScroll = () => {
    if (window.scrollY >= 60) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return children;
}
