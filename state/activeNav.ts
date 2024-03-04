import { NavLinks } from "@/utils/enums";
import { atom } from "recoil";

export const activeNavState = atom<NavLinks>({
  key: "active-nav-state",
  default: NavLinks.home,
});
