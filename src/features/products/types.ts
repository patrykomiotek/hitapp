export type ProductDto = {
  id: string;
  fields: {
    name: string;
    description: string;
    price: number;
  };
};

export type AirtableResponse<T> = {
  records: T;
};
