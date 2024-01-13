import { gql } from '@apollo/client';

export const GetProductQuery = gql`
  query GetProduct($id: ID!) {
    Product(id: $id) {
      id
      name
      power
      description
      price
      quantity
      brand
      weight
      height
      width
      length
      model_code
      colour
      img_url
    }
  }
`;
export const GetAllProductsQuery = gql`
  query GetAllProducts {
    allProducts {
      id
      brand
    }
  }
`;
