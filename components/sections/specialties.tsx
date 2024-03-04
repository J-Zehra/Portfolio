import React from "react";
import Container from "../reusables/container";
import { Text, Wrap } from "@chakra-ui/react";
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
        "From frontend design to backend development, I ensure your online presence stands out, delivering a seamless experience for your audience.",
      icon: <SiWebmoney />,
    },
    {
      title: "UI/UX Design",
      subtitle: "Crafting Engaging User Experiences",
      description:
        "I excel in creating intuitive and visually stunning interfaces. I craft designs that not only look great but also enhance user engagement and satisfaction",
      icon: <MdDesignServices />,
    },
    {
      title: "API Integration",
      subtitle: "Seamless Integration, Max Efficiency",
      description:
        "Integrating systems and services to streamline your business operations. Connecting third-party applicationns and building custom API endpoints",
      icon: <MdIntegrationInstructions />,
    },
  ];

  return (
    <Container as="section" marginBlock="6rem 8rem">
      <SectionHeader
        title="Specialties"
        description="Here are my specialties and the serivces I offer"
      />
      <Wrap w="100%" justify="space-between" marginTop="5rem">
        {services.map((service, index) => {
          return (
            <ServiceCard
              gradientVariant={index + 1}
              key={service.title}
              title={service.title}
              icon={service.icon}
              description={service.description}
              subtitle={service.subtitle}
            />
          );
        })}
      </Wrap>
    </Container>
  );
}
