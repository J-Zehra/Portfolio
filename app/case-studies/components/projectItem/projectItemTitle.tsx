import { Text } from "@chakra-ui/react";

type Props = {
  title: string;
};

const ProjectItemTitle = ({ title }: Props) => {
  return (
    <Text fontSize="1.6rem" fontWeight="bold">
      {title}
    </Text>
  );
};

export default ProjectItemTitle;
