import "./App.css";

import { Container } from "@chakra-ui/react";

import { Header } from "./components/common/Header";

function App() {
  return (
    <Container maxW="100%" mt="4">
      <Header />
    </Container>
  );
}

export default App;
