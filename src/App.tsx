import "./App.css";

import { Container } from "@chakra-ui/react";

import { Header } from "./components/common/Header";
import { Table } from "./components/common/Table";

function App() {
  return (
    <Container maxW="100%" mt="4">
      <Header />
      <Table />
    </Container>
  );
}

export default App;
