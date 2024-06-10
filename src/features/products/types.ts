export type ProductDto = {
  id: number;
  fields: {
    name: string;
    description: string;
    price: number;
  };
};

export type AirtableResponse<T> = {
  records: T;
};
