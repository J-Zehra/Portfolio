import React from "react";
import Container from "../reusables/container";
import { Box, Wrap } from "@chakra-ui/react";
import SectionHeader from "../reusables/sectionHeader";
import ServiceCard from "../non-reusables/serviceCard";
import { SiWebmoney } from "react-icons/si";
import { MdDesignServices, MdIntegrationInstructions } from "react-icons/md";

export default function Specialties() {
  const services = [
    {
      title: "Web Development",
      subtitle: "Forging Digital Experiences",
      description:
        "I ensure your online presence stands out, delivering a seamless experience for your audience.",
      icon: <SiWebmoney />,
    },
    {
      title: "UI/UX Design",
      subtitle: "Crafting Engaging User Experiences",
      description:
        "I craft designs that not only look great but also enhance user engagement and satisfaction",
      icon: <MdDesignServices />,
    },
    {
      title: "API Integration",
      subtitle: "Seamless Integration, Max Efficiency",
      description:
        "Streamline your business operations. Connecting third-party applications and building custom API endpoints",
      icon: <MdIntegrationInstructions />,
    },
  ];

  return (
    <Container as="section" marginBlock="8rem">
      <SectionHeader
        title="What I do."
        coloredText="What"
        description="My specialties and the serivces I offer"
      />
      <Wrap w="100%" justify="space-between" marginTop="5rem">
        {services.map((service, index) => {
          return (
            <Box
              key={service.title}
              marginTop={index !== 0 ? `${7 * index}rem` : ""}
            >
              <ServiceCard
                title={service.title}
                icon={service.icon}
                description={service.description}
                subtitle={service.subtitle}
              />
            </Box>
          );
        })}
      </Wrap>
    </Container>
  );
}
