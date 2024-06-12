import { http, HttpResponse } from "msw";
// import { AirtableResponse, ProductDto } from "../features/products/types";

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get("https://example.com/user", () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(
      {
        id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
        firstName: "John",
        lastName: "Maverick",
      },
      { status: 401 }
    );
  }),
  http.get("https://api.airtable.com/v0/appaJtXeMfWSfEGke/products", () => {
    return HttpResponse.json(
      {
        records: [
          {
            id: "123",
            fields: {
              name: "Product 1",
              description: "Lorem ipsum",
              price: 123,
            },
          },
          {
            id: "125",
            fields: {
              name: "Product 2",
              description: "ipsum dolor",
              price: 55,
            },
          },
        ],
      },
      { status: 200 }
    );
  }),
];
