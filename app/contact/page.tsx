"use client";

import useObserver from "@/hooks/useObserver";
import { NavLinks } from "@/utils/enums";

export default function ContactPage() {
  const { ref } = useObserver(NavLinks.contact);

  return <div ref={ref}>page</div>;
}
