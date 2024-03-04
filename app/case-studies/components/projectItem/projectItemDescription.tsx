import { Text } from "@chakra-ui/react";

type Props = {
  description: string;
};

const ProjectItemDescription = ({ description }: Props) => {
  return <Text>{description}</Text>;
};

export default ProjectItemDescription;
