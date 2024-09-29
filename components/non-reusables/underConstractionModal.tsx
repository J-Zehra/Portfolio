import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function UnderConstractionModal({ isOpen, onClose }: Props) {
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
        <ModalHeader>Notice!</ModalHeader>
        <ModalBody>
          <Text>
            Please note that my site is still under construction. Some pages
            might not have a content yet.
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
