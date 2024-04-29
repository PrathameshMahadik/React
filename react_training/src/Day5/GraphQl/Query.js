import { gql } from "@apollo/client";
const GET_COUNTRY = gql`
  query {
    countries {
      name
      phone
      currency
    }
  }
`;
const ADD_COUNTRY = gql`
  mutation AddCountry($name: String!, $phone: String!, $currency: String!) {
    addCountry(name: $name, phone: $phone, currency: $currency) {
      name
      phone
      currency
    }
  }
`;
const DELETE_COUNTRY = gql`
  mutation DeleteCountry($name: String!) {
    deleteCountry(name: $name) {
      name
    }
  }
`;
export { GET_COUNTRY, ADD_COUNTRY, DELETE_COUNTRY };
