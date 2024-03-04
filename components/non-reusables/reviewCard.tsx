import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Stack,
  Text,
} from "@chakra-ui/react";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <Card bg="transparent" boxShadow="none" minW="25rem" cursor="default">
      <CardHeader paddingBlock={0} as={Stack} direction="row" align="center">
        <Avatar
          size="xs"
          color="palette.background.primary"
          bg="palette.accent"
          src={review.imageUrl}
          name={review.name}
        />
        <Text fontWeight="semibold">{review.name}</Text>
      </CardHeader>
      <CardBody paddingBlock={5}>
        <Text lineHeight={6} fontSize=".8rem">
          &quot;{review.comment}&quot;
        </Text>
      </CardBody>
      <CardFooter paddingBlock={0}>
        {[...Array(5)].map((_, index) => {
          return index + 1 <= review.rate ? (
            <Box color="palette.accent" key={index}>
              <RiStarSFill />
            </Box>
          ) : (
            <Box key={index}>
              <RiStarSLine />
            </Box>
          );
        })}
      </CardFooter>
    </Card>
  );
}
