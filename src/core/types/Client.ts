export type clientsResponse = {
  results: Client[];
  totalPages: number;
};

export type Client = {
  id: number;
  gender: string;
  name: Name;
  location: Location;
  email: string;
  dob: Dob;
  phone: string;
  picture: Picture;
};

export type Name = {
  title: string;
  first: string;
  last: string;
};

export type Location = {
  city: string;
  state: string;
  country: string;
};

export type Dob = {
  age: number;
};

export type Picture = {
  medium: string;
};
