import { Center, Text, VStack } from "@chakra-ui/react";
import { Popover, PopoverContent, PopoverTrigger } from "./components/Popover";

export default function App() {
  return (
    <Center h="100vh">
      <VStack>
        <Popover>
          <PopoverTrigger>
            <Text p="2" px="3" rounded="lg" bg="gray.200" shadow="md">
              Um Conteúdo aqui!
            </Text>
          </PopoverTrigger>
          <PopoverContent>
            <Text
              color="gray.900"
              bg="white"
              rounded="lg"
              p={5}
              border="1px solid"
              borderColor="gray.900"
              shadow="md"
            >
              Popover conteúdo aqui!
            </Text>
          </PopoverContent>
        </Popover>
        <Text>Um outro contéudo na sequencia aqui!</Text>
      </VStack>
    </Center>
  );
}
