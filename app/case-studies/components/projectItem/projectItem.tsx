import {
  Box,
  Button,
  Divider,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaReadme } from "react-icons/fa";
import ProjectItemTiltContainer from "./projectItemTiltContainer";
import ProjectItemGradientOverlay from "./projectItemGradientOverlay";
import isOdd from "@/utils/isOdd";
import ProjectItemImage from "./projectItemImage";
import ProjectItemLogo from "./projectItemLogo";
import ProjectItemTitle from "./projectItemTitle";
import ProjectItemSubtitle from "./projectItemSubtitle";
import ProjectItemDescription from "./projectItemDescription";
import ProjectItemActions from "./projectItemActions";

export default function ProjectItem({
  project,
  index,
}: {
  index: number;
  project: Project;
  isLoading: boolean;
}) {
  const [isHover, setIsHover] = useState(false);

  return (
    <Stack
      direction={isOdd(index) ? "row" : "row-reverse"}
      spacing="4rem"
      justify="space-between"
    >
      <Box pos="relative" flex={1.5}>
        <ProjectItemTiltContainer>
          <ProjectItemGradientOverlay index={index} isHover={isHover} />
          <Box pos="relative">
            <ProjectItemImage
              index={index}
              mainImageUrl={project.mainImageUrl}
              subImageUrl={project.subImageUrl}
              onMouseOver={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            />
          </Box>
        </ProjectItemTiltContainer>
      </Box>
      <Stack flex={1} justify="end">
        <Stack spacing="1.6rem">
          <Stack spacing={0.5}>
            <Box marginBottom=".6rem">
              <ProjectItemLogo logoUrl={project.logoUrl} isHover={isHover} />
            </Box>
            <ProjectItemTitle title={project.title} />
            <Divider borderColor="rgba(0, 100, 100, .1)" w="10rem" />
            <ProjectItemSubtitle subtitle={project.subtitle} />
          </Stack>
          <ProjectItemDescription description={project.description} />
          <ProjectItemActions link={project.link} projectId={project._id} />
        </Stack>
      </Stack>
    </Stack>
  );
}
