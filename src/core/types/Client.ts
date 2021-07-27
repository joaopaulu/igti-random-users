export type clientsResponse = {
  results: Client[];
  totalPages: number;
};

export type Client = {
  id: number;
  gender: string;
  name: Name;
};

export type Name = {
  title: string;
  first: string;
  last: string;
};
