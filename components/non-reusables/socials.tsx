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
    <Stack direction="row" align="center" spacing=".5rem">
      {socials.map((social) => {
        return (
          <Link key={social.label} href={social.link}>
            <Box
              p=".5rem"
              transition="all .3s ease"
              borderRadius="2rem"
              color="palette.accent.secondary.color"
              _hover={{
                bg: "palette.background.secondary.color",
                color: "palette.accent.primary.color",
              }}
            >
              {social.icon}
            </Box>
          </Link>
        );
      })}
    </Stack>
  );
}
