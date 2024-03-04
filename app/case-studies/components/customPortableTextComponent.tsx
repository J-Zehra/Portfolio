import { urlFor } from "@/utils/sanityUrlBuilder";
import { Box, Text, Image } from "@chakra-ui/react";
import { PortableTextReactComponents } from "@portabletext/react";
import Link from "next/link";

export const customPortableTextComponent: Partial<PortableTextReactComponents> =
  {
    block: {
      h1: ({ children }) => (
        <Text
          id={children!.toString()}
          fontSize="1.6rem"
          fontWeight="bold"
          paddingBlock="1.5rem"
        >
          {children}
        </Text>
      ),
      h5: ({ children }) => (
        <Text fontSize="1rem" fontWeight="semibold" paddingBlock="1rem">
          {children}
        </Text>
      ),
      normal: ({ children }) => <Text lineHeight="1.7rem">{children}</Text>,
    },
    listItem: {
      bullet: ({ children }) => (
        <Box
          as="li"
          listStylePosition="inside"
          paddingLeft="2rem"
          paddingBlock=".4rem"
          fontSize=".9rem"
        >
          {children}
        </Box>
      ),
    },
    types: {
      image: ({ value }) => (
        <Image src={urlFor(value).url()} alt="Cover Image" />
      ),
    },
    marks: {
      link: ({ value, children }) => (
        <Link
          href={value.href}
          target="_blank"
          style={{ textDecoration: "underline" }}
        >
          {children}
        </Link>
      ),
    },
  };
