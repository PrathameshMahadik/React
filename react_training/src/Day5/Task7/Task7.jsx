/* 7.Create a form in your React component that allows the user to input data 
(e.g., a post title and content). Use Axios to send a POST request to an API endpoint, posting the user's data. */
import React, { useState } from "react";
import axios from "axios";
import { JSONPLACEHOLDER } from "../url";

const AxiosPost = () => {
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const handleSubmit = () => {
    axios
      .post(JSONPLACEHOLDER, { id, title, body })
      .then((response) => {
        console.log("POST request successfull!");
        console.log(response);
      })
      .catch((error) => {
        console.error("POST request failed:", error);
      });
  };

  return (
    <>
      <h2>Axios Post</h2>
        <label>UserId</label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Body</label>
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button onClick={handleSubmit}>Post</button>
    </>
  );
};

export default AxiosPost;
