import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import { Box, Tooltip, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";

const socials = [
  { label: "Github", link: "", icon: <FaGithub /> },
  { label: "Linkedin", link: "", icon: <FaLinkedinIn /> },
  { label: "Email", link: "", icon: <BiLogoGmail /> },
  { label: "Fiverr", link: "", icon: <TbBrandFiverr /> },
];

import { BiLogoGmail } from "react-icons/bi";

export default function Socials() {
  const sceneRef = useRef(null);
  const engine = useRef(Matter.Engine.create());
  const bubbles = useRef([]);

  useEffect(() => {
    const { Engine, Render, Runner, Bodies, World, Mouse, MouseConstraint } =
      Matter;

    const engineInstance = engine.current;
    const scene = sceneRef.current;
    const width = scene.offsetWidth;
    const height = scene.offsetHeight;

    const render = Render.create({
      element: scene,
      engine: engineInstance,
      options: {
        width,
        height,
        wireframes: false,
        background: "transparent",
      },
    });

    const walls = [
      Bodies.rectangle(width / 2, 0, width, 20, { isStatic: true }), // top
      Bodies.rectangle(width / 2, height, width, 20, { isStatic: true }), // bottom
      Bodies.rectangle(0, height / 2, 20, height, { isStatic: true }), // left
      Bodies.rectangle(width, height / 2, 20, height, { isStatic: true }), // right
    ];

    World.add(engineInstance.world, walls);

    // Create bubbles for each social icon
    socials.forEach((social, index) => {
      const bubble = Bodies.circle(150 + index * 80, 150, 30, {
        restitution: 0.9, // bounce effect
        render: {
          sprite: {
            texture: social.icon.props.children.type.name.toLowerCase(),
            xScale: 1.5,
            yScale: 1.5,
          },
        },
      });
      bubbles.current.push(bubble);
      World.add(engineInstance.world, bubble);
    });

    // Add mouse control to drag bubbles
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engineInstance, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    World.add(engineInstance.world, mouseConstraint);

    // Run the engine and renderer
    Engine.run(engineInstance);
    Render.run(render);

    // Clean up on component unmount
    return () => {
      Render.stop(render);
      Engine.clear(engineInstance);
      render.canvas.remove();
      render.textures = {};
    };
  }, [socials]);

  return (
    <Box ref={sceneRef} w="100%" h="300px" position="relative">
      {socials.map((social, index) => (
        <Tooltip key={index} label={social.label}>
          <Link href={social.link}>
            <Box
              className={`bubble-${index}`}
              w="50px"
              h="50px"
              p="10px"
              borderRadius="50%"
              bg="palette.background.secondary.color"
              color="palette.accent.secondary.color"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {social.icon}
            </Box>
          </Link>
        </Tooltip>
      ))}
    </Box>
  );
}
