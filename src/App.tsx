import "./App.css";

import { useState } from "react";

import { Container } from "@chakra-ui/react";

import { Header } from "./components/common/Header";
import { Table } from "./components/common/Table";
import { useTableData } from "./hooks/useTableData";

function App() {
  const [searchCriteria, setSearchCriteria] = useState({
    period: "",
    status: "",
    fromDate: new Date(),
    toDate: new Date(),
  });

  const { count } = useTableData(searchCriteria);

  return (
    <Container maxW="100%" mt="4">
      <Header onSearch={setSearchCriteria} filterCount={count} />
      <Table searchCriteria={searchCriteria} />
    </Container>
  );
}

export default App;
