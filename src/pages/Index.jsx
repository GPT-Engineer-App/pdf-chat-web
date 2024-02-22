import { ChakraProvider, Box, Flex, Text, VStack, Input, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, IconButton, useToast } from "@chakra-ui/react";
import { FaPaperPlane, FaFilePdf, FaPlus } from "react-icons/fa";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      toast({
        title: "PDF Selected.",
        description: `File name: ${file.name}`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const sendMessage = () => {
    toast({
      title: "Message Sent.",
      description: "Your message has been sent successfully!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <ChakraProvider>
      <Flex minHeight="100vh" width="full" align="center" justifyContent="center">
        <VStack spacing={4} width="lg">
          <Text fontSize="2xl" fontWeight="bold">
            Chat with PDF
          </Text>
          <Flex width="full" align="center" justifyContent="space-between">
            <Input placeholder="Type your message here..." size="md" flexGrow={1} mr={2} />
            <IconButton icon={<FaPaperPlane />} onClick={sendMessage} colorScheme="blue" aria-label="Send message" />
          </Flex>
          <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={onOpen}>
            Attach PDF
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Attach PDF File</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Input type="file" accept="application/pdf" onChange={handleFileChange} />
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost" leftIcon={<FaFilePdf />} onClick={() => {}}>
                  Upload PDF
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </VStack>
      </Flex>
    </ChakraProvider>
  );
};

export default Index;
