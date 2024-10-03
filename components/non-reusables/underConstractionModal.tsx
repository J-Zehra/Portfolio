import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function UnderConstractionModal({ isOpen, onClose }: Props) {
  const navigate = useRouter();

  const handleClick = () => {
    navigate.push("case-studies");
    // close();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      preserveScrollBarGap
      autoFocus={false}
    >
      <ModalOverlay />
      <ModalContent bg="palette.background.secondary.color">
        <ModalCloseButton />
        <ModalHeader>Notice!</ModalHeader>
        <ModalBody>
          <Text>
            Please note that my site is still under construction. But you can
            checkout my works!
          </Text>
        </ModalBody>
        <ModalFooter>
          <Link href="case-studies">
            <Button>See Case Studies</Button>
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
