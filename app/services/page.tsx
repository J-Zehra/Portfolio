"use client";

import useObserver from "@/hooks/useObserver";
import { NavLinks } from "@/utils/enums";

export default function ServicesPage() {
  const { ref } = useObserver(NavLinks.services);

  return <div ref={ref}>page</div>;
}
