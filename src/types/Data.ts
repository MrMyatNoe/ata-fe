export enum Operation {
  All = "all",
  Transmission = "transmission",
  Buy = "buy",
  Sell = "sell",
}

export enum Status {
  All = "all",
  Waiting = "waiting",
  Approved = "approved",
  Rejected = "rejected",
  Suspended = "suspended",
  Completed = "completed",
}

export type Data = {
  id: number;
  account: number;
  operation: Operation;
  symbol: string;
  description: string;
  quantity: number;
  filledQuantity: number;
  price: number;
  status: Status;
  date: Date;
  expiration: Date;
  noRef: string;
  extRef: string;
  firstName: string;
  lastName: string;
  netAmount: number;
  exchangeRate: number;
  osLimit: number;
  referenceNumber: string;
  dateTime: Date;
  telephone: string;
  userId: number;
};

export type SearchCriteria = {
  period: string;
  status: string;
  fromDate: Date;
  toDate: Date;
};
export const dataSamples: Data[] = [
  {
    id: 1,
    account: 12345,
    operation: Operation.Buy,
    symbol: "AAPL",
    description: "Apple Inc.",
    quantity: 10,
    filledQuantity: 10,
    price: 150.0,
    status: Status.Rejected,
    date: new Date("2024-01-01T10:00:00"),
    expiration: new Date("2024-12-31T23:59:59"),
    noRef: "REF123",
    extRef: "2-XXXXXXX1-0000",
    firstName: "John",
    lastName: "Doe",
    netAmount: 1500.0,
    exchangeRate: 1.0,
    osLimit: 1000,
    referenceNumber: "RN123",
    dateTime: new Date("2024-01-01T10:00:00"),
    telephone: "123-456-7890",
    userId: 101,
  },
  {
    id: 2,
    account: 67890,
    operation: Operation.Sell,
    symbol: "GOOGL",
    description: "Alphabet Inc.",
    quantity: 5,
    filledQuantity: 5,
    price: 2800.0,
    status: Status.Completed,
    date: new Date("2024-02-01T11:00:00"),
    expiration: new Date("2023-12-31T23:59:59"),
    noRef: "REF456",
    extRef: "2-XXXXXXX2-0000",
    firstName: "Jane",
    lastName: "Smith",
    netAmount: 14000.0,
    exchangeRate: 1.0,
    osLimit: 2000,
    referenceNumber: "RN456",
    dateTime: new Date("2024-02-01T11:00:00"),
    telephone: "234-567-8901",
    userId: 102,
  },
  {
    id: 3,
    account: 11223,
    operation: Operation.Transmission,
    symbol: "MSFT",
    description: "Microsoft Corp.",
    quantity: 15,
    filledQuantity: 15,
    price: 300.0,
    status: Status.Waiting,
    date: new Date("2024-03-01T12:00:00"),
    expiration: new Date("2024-12-31T23:59:59"),
    noRef: "REF789",
    extRef: "2-XXXXXXX3-0000",
    firstName: "Alice",
    lastName: "Johnson",
    netAmount: 4500.0,
    exchangeRate: 1.0,
    osLimit: 1500,
    referenceNumber: "RN789",
    dateTime: new Date("2024-03-01T12:00:00"),
    telephone: "345-678-9012",
    userId: 103,
  },
  {
    id: 4,
    account: 44556,
    operation: Operation.Sell,
    symbol: "TSLA",
    description: "Tesla Inc.",
    quantity: 8,
    filledQuantity: 8,
    price: 700.0,
    status: Status.Approved,
    date: new Date("2024-04-01T13:00:00"),
    expiration: new Date("2024-12-31T23:59:59"),
    noRef: "REF101",
    extRef: "2-XXXXXXX4-0000",
    firstName: "Bob",
    lastName: "Brown",
    netAmount: 5600.0,
    exchangeRate: 1.0,
    osLimit: 800,
    referenceNumber: "RN101",
    dateTime: new Date("2024-04-01T13:00:00"),
    telephone: "456-789-0123",
    userId: 104,
  },
  {
    id: 5,
    account: 77889,
    operation: Operation.Buy,
    symbol: "AMZN",
    description: "Amazon.com Inc.",
    quantity: 12,
    filledQuantity: 12,
    price: 3300.0,
    status: Status.Suspended,
    date: new Date("2024-05-01T14:00:00"),
    expiration: new Date("2024-12-31T23:59:59"),
    noRef: "REF202",
    extRef: "2-XXXXXXX5-0000",
    firstName: "Charlie",
    lastName: "Davis",
    netAmount: 39600.0,
    exchangeRate: 1.0,
    osLimit: 1200,
    referenceNumber: "RN202",
    dateTime: new Date("2024-05-01T14:00:00"),
    telephone: "567-890-1234",
    userId: 105,
  },
];
