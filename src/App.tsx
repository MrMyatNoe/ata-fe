import "./App.css";

import { useState } from "react";

import { Container } from "@chakra-ui/react";

import { Header } from "./components/Header/Header";
import { Table } from "./components/Table/Table";
import { useTableData } from "./hooks/useTableData";
import { SearchCriteria } from "./types/Data";

const initialSearchCriteria: SearchCriteria = {
  period: "",
  status: "",
  fromDate: new Date(),
  toDate: new Date(),
};
function App() {
  const [searchCriteria, setSearchCriteria] = useState<SearchCriteria>(
    initialSearchCriteria
  );

  const { count } = useTableData(searchCriteria);

  return (
    <Container maxW="100%" mt="4">
      <Header onSearch={setSearchCriteria} filterCount={count} />
      <Table searchCriteria={searchCriteria} />
    </Container>
  );
}

export default App;
