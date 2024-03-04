import { Box, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbBrandFiverr } from "react-icons/tb";

export default function Socials() {
  const socials = [
    { label: "Facebook", link: "", icon: <CiFacebook /> },
    { label: "Linkedin", link: "", icon: <CiLinkedin /> },
    { label: "Email", link: "", icon: <MdOutlineMailOutline /> },
    { label: "Fiverr", link: "", icon: <TbBrandFiverr /> },
  ];

  return (
    <Stack direction="row" align="center" spacing="1rem">
      {socials.map((social) => {
        return (
          <Link key={social.label} href={social.link}>
            <Box color="palette.accent">{social.icon}</Box>
          </Link>
        );
      })}
    </Stack>
  );
}
