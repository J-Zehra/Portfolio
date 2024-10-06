import React, { forwardRef, MutableRefObject, useEffect, useRef } from "react";
import {
  Engine,
  Render,
  Runner,
  Bodies,
  World,
  Events,
  Body,
  Mouse,
} from "matter-js";
import { Box } from "@chakra-ui/react";

type SocialsProps = {
  // Define any props for the Socials component, if needed.
};

export const Socials = forwardRef<HTMLDivElement, SocialsProps>(
  function Socials(_, ref) {
    const sceneRef = useRef<HTMLDivElement | null>(null);
    const parentRef = ref as MutableRefObject<HTMLDivElement>;
    const engineRef = useRef(
      Engine.create({
        gravity: {
          y: 0, // Set gravity to 0 for vacuum-like continuous motion
        },
      })
    );

    const cursorRef = useRef<string>("default");

    useEffect(() => {
      if (!sceneRef.current || !parentRef.current) return;
      const engine = engineRef.current;
      const { clientHeight, clientWidth } = parentRef.current;

      const render = Render.create({
        element: sceneRef.current,
        engine: engine,
        options: {
          width: clientWidth,
          height: clientHeight,
          wireframes: false,
          background: "transparent",
        },
      });

      const walls = [
        Bodies.rectangle(clientWidth / 2, 0, clientWidth, 10, {
          isStatic: true,
          render: {
            fillStyle: "transparent",
          },
        }), // Top wall
        Bodies.rectangle(clientWidth / 2, clientHeight, clientWidth, 10, {
          isStatic: true,
          render: {
            fillStyle: "transparent",
          },
        }), // Ground
        Bodies.rectangle(0, clientHeight / 2, 10, clientHeight, {
          isStatic: true,
          render: {
            fillStyle: "transparent",
          },
        }), // Left wall
        Bodies.rectangle(clientWidth, clientHeight / 2, 10, clientHeight, {
          isStatic: true,
          render: {
            fillStyle: "transparent",
          },
        }), // Right wall
      ];

      // Create social media icon bubbles
      const bubbles = [
        createBubble(150, 100, 30, "facebook"),
        createBubble(300, 150, 30, "instagram"),
        createBubble(450, 200, 30, "twitter"),
      ];

      // Add the walls and bubbles to the world
      World.add(engine.world, [...walls, ...bubbles]);

      // Add click event listener for the canvas
      const mouse = Mouse.create(render.canvas);

      render.canvas.addEventListener("mousemove", (event) => {
        const { offsetX, offsetY } = event;
        let cursorStyle = "default";

        bubbles.forEach((bubble) => {
          if (
            isWithinRadius(
              offsetX,
              offsetY,
              bubble.position.x,
              bubble.position.y,
              bubble.circleRadius!
            )
          ) {
            cursorStyle = "pointer";
          }
        });

        // Update the cursor style based on whether we're hovering over a bubble
        if (cursorStyle !== cursorRef.current) {
          render.canvas.style.cursor = cursorStyle;
          cursorRef.current = cursorStyle;
        }
      });

      render.canvas.addEventListener("click", (event) => {
        const { offsetX, offsetY } = event;

        // Check if the click happened on any bubble
        bubbles.forEach((bubble) => {
          if (
            isWithinRadius(
              offsetX,
              offsetY,
              bubble.position.x,
              bubble.position.y,
              bubble.circleRadius!
            )
          ) {
            handleBubbleClick(bubble);
          }
        });
      });

      // Run the renderer and engine
      Render.run(render);
      const runner = Runner.create();
      Runner.run(runner, engine);

      // Clean up on component unmount
      return () => {
        Render.stop(render);
        World.clear(engine.world, false);
        Engine.clear(engine);
        render.canvas.remove();
        render.textures = {};
      };
    }, []);

    // Function to create a bubble with an icon
    const createBubble = (
      x: number,
      y: number,
      radius: number,
      icon: string
    ) => {
      const bubble = Bodies.circle(x, y, radius, {
        restitution: 1, // Perfectly elastic collision
        frictionAir: 0, // No air resistance to simulate vacuum
        velocity: {
          x: (Math.random() - 0.5) * 2,
          y: (Math.random() - 0.5) * 2,
        }, // Random initial velocity
        render: {
          fillStyle: "#353535", // Default bubble color
        },
      });

      // Apply a random continuous force to simulate random bubble motion
      Body.applyForce(
        bubble,
        { x, y },
        { x: (Math.random() - 0.5) * 0.01, y: (Math.random() - 0.5) * 0.01 }
      );

      return bubble;
    };

    // Function to handle bubble click event
    const handleBubbleClick = (bubble: Body) => {
      console.log("Bubble clicked!", bubble);
      // Example: Increase bubble's velocity on click
      Body.setVelocity(bubble, {
        x: (Math.random() - 0.5) * 10,
        y: (Math.random() - 0.5) * 10,
      });

      // Change bubble color to red on click
      bubble.render.fillStyle = "#165252";
    };

    // Function to check if a click is within a bubble's radius
    const isWithinRadius = (
      clickX: number,
      clickY: number,
      bubbleX: number,
      bubbleY: number,
      radius: number
    ) => {
      const distance = Math.sqrt(
        (clickX - bubbleX) * (clickX - bubbleX) +
          (clickY - bubbleY) * (clickY - bubbleY)
      );
      return distance <= radius;
    };

    return (
      <Box
        position="absolute"
        w="100%"
        h="100vh"
        zIndex={1}
        ref={sceneRef}
        style={{ pointerEvents: "auto", overflow: "auto" }} // Enable scrolling over the canvas
      ></Box>
    );
  }
);
