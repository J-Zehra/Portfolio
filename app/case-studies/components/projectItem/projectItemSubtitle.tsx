import { Text } from "@chakra-ui/react";

type Props = {
  subtitle: string;
};

const ProjectItemSubtitle = ({ subtitle }: Props) => {
  return (
    <Text fontSize="1rem" opacity={0.8} fontWeight="medium">
      {subtitle}
    </Text>
  );
};

export default ProjectItemSubtitle;
