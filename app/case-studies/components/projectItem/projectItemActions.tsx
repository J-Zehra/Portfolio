import { Button, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FaReadme } from "react-icons/fa";

type Props = {
  link: string;
  projectId: string;
};

const ProjectItemActions = ({ link, projectId }: Props) => {
  return (
    <Stack direction="row" align="center" spacing="2rem">
      <Link href={`case-studies/${projectId}`}>
        <Button leftIcon={<FaReadme />}>Read Case Study</Button>
      </Link>
      <Link href={link} target="_blank">
        <Text
          textDecoration="underline"
          _hover={{ color: "palette.accent" }}
          fontWeight="semibold"
        >
          See live
        </Text>
      </Link>
    </Stack>
  );
};

export default ProjectItemActions;
