/* 9.Create a React component that makes GraphQL queries to retrieve a list of items 
(e.g., a list of books, movies, or products) from a GraphQL API. Implement pagination 
for large datasets and display the data in a user-friendly way. */
// Extend the previous assignment to allow users to perform mutations, such as adding, updating, or deleting items. Implement a form and mutation queries to interact with the GraphQL API.
import React, { useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import { inputFields } from "../MockData/Task9";

const MyQuery = gql`
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

const Task9 = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    currency: "",
  });

  const { error, data, loading } = useQuery(MyQuery);
  const [addCountry] = useMutation(ADD_COUNTRY);
  const [deleteCountry] = useMutation(DELETE_COUNTRY);

  const handleChange = (e, fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    const { name, phone, currency } = formData;
    e.preventDefault();
    try {
      const { data } = await addCountry({
        variables: { name, phone, currency },
        refetchQueries: [{ query: MyQuery }],
      });
      console.log("Added country:", data.addCountry);
      setFormData({
        name: "",
        phone: "",
        currency: "",
      });
    } catch (err) {
      console.error("Error adding country:", err);
    }
  };
  const handleDelete = async (name) => {
    try {
      const { data } = await deleteCountry({
        variables: { name },
        refetchQueries: [{ query: MyQuery }],
      });
      console.log("Deleted country:", data.deleteCountry);
    } catch (err) {
      console.error("Error deleting country:", err);
    }
  };
  if (loading) return "Loading...";
  if (error) return <h2 className="error">{error.message}</h2>;

  return (
    <>
      <h2>GraphQl Mutation</h2>
      <div className="graphQlApi">
        {data.countries.slice(0, 12).map((country) => (
          <div key={country.name}>
            <h2>{country.name}</h2>
            <h3>{country.phone}</h3>
            <h3>{country.currency}</h3>
            <button onClick={() => handleDelete(country.name)}>Delete</button>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        {inputFields.map((field, index) => (
          <input
            key={index}
            type="text"
            placeholder={field.label}
            value={formData[field.name]}
            onChange={(e) => handleChange(e, field.name)}
            required
          />
        ))}
        <button type="submit">Add Country</button>
      </form>
    </>
  );
};
export default Task9;
