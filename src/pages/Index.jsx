import { Container, VStack, Text, Box, Link, Image, SimpleGrid, Button, Input, Textarea, useToast } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope, FaRocket } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const toast = useToast();

  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // Simulate sending data
    toast({
      title: "Message Sent",
      description: "We have received your message and will get back to you soon.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setContactDetails({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Text fontSize="5xl" fontWeight="bold">
            John Doe
          </Text>
          <Text fontSize="xl">Software Developer</Text>
          <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNDc2Nzg0Nnww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="full" boxSize="150px" alt="John Doe" mt={4} />
        </Box>

        <SimpleGrid columns={[1, 2, 2]} spacing={10}>
          <VStack align="start" spacing={4}>
            <Text fontSize="3xl" fontWeight="bold">
              Projects
            </Text>
            <Box p={4} shadow="md" borderWidth="1px" borderRadius="lg">
              <Text fontSize="2xl" fontWeight="bold">
                Project 1
              </Text>
              <Text mt={2}>A detailed description of Project 1. This could include technologies used, the purpose of the project, and any other relevant details.</Text>
              <Link href="https://github.com" isExternal>
                <Button leftIcon={<FaGithub />} mt={2} colorScheme="teal">
                  View on GitHub
                </Button>
              </Link>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px" borderRadius="lg">
              <Text fontSize="2xl" fontWeight="bold">
                Project 2
              </Text>
              <Text mt={2}>A detailed description of Project 2. This could include technologies used, the purpose of the project, and any other relevant details.</Text>
              <Link href="https://github.com" isExternal>
                <Button leftIcon={<FaGithub />} mt={2} colorScheme="teal">
                  View on GitHub
                </Button>
              </Link>
            </Box>
          </VStack>

          <VStack align="start" spacing={4}>
            <Text fontSize="3xl" fontWeight="bold">
              Contact Me
            </Text>
            <Input placeholder="Your Name" name="name" value={contactDetails.name} onChange={handleInputChange} />
            <Input placeholder="Your Email" name="email" type="email" value={contactDetails.email} onChange={handleInputChange} />
            <Textarea placeholder="Your Message" name="message" value={contactDetails.message} onChange={handleInputChange} />
            <Button rightIcon={<FaRocket />} colorScheme="blue" onClick={handleSubmit}>
              Send Message
            </Button>
          </VStack>
        </SimpleGrid>

        <Box>
          <Text fontSize="2xl" fontWeight="bold">
            Connect with me
          </Text>
          <Link href="https://linkedin.com" isExternal>
            <Button leftIcon={<FaLinkedin />} m={2} colorScheme="blue">
              LinkedIn
            </Button>
          </Link>
          <Link href="mailto:john.doe@example.com">
            <Button leftIcon={<FaEnvelope />} m={2} colorScheme="green">
              Email
            </Button>
          </Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
