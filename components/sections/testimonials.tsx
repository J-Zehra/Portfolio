import React, { useEffect } from "react";
import Container from "../reusables/container";
import ReviewCard from "../non-reusables/reviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Box, Center, Highlight, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { SiFiverr } from "react-icons/si";
import { client } from "@/sanity-client/client";
import { useQuery } from "react-query";
import TestimonialsLoading from "../non-reusables/testimonialsLoading";

export default function Testimonials() {
  const { data: reviews, isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      return await client.fetch<Review[]>(
        `*[_type == "review"]{ 
          _id, 
          "imageUrl": image.asset->url, 
          name, 
          rate, 
          comment, 
          source, 
          place  
        }`
      );
    },
  });

  return (
    <Box bg="palette.background.primary.color">
      <Container as="section" paddingBlock="6rem">
        <Stack
          direction="row"
          align="center"
          justify="space-between"
          paddingBottom="3rem"
        >
          <Text fontWeight="bold" fontSize="1.1rem">
            <Highlight
              query="Clients"
              styles={{ color: "palette.accent.primary.color" }}
            >
              Clients says:
            </Highlight>
          </Text>
          <Center gap="1rem">
            <Link href="https://www.fiverr.com/jazenm" target="_blank">
              <Box
                fontSize="3rem"
                color="palette.accent.primary.color"
                _hover={{ color: "palette.accent.primary.hover" }}
              >
                <SiFiverr />
              </Box>
            </Link>
          </Center>
        </Stack>
        <Swiper
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
          }}
          loop
          modules={[Autoplay]}
          spaceBetween={80}
        >
          {isLoading ? (
            <TestimonialsLoading />
          ) : (
            reviews?.map((review) => {
              return (
                <SwiperSlide key={review._id}>
                  <ReviewCard review={review} />
                </SwiperSlide>
              );
            })
          )}
        </Swiper>
      </Container>
    </Box>
  );
}
