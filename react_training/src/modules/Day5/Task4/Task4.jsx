import React, { useState, useEffect } from "react";
import { JSONPLACEHOLDER } from "../../../constants/url";

const Task4 = () => {
  const [array, setArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 10;

  useEffect(() => {
    fetch(JSONPLACEHOLDER).then((response) => {
      response
        .json()
        .then((result) => {
          setArray(result);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }, []);
  });
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const miniData = array.slice(startIndex, endIndex);

  return (
    <>
      <h2>Pagination</h2>
      <ul>
        {miniData.map((item) => (
          <li key={item.id}>{item.body}</li>
        ))}
      </ul>
      <div className="pageButton">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={endIndex >= array.length}
        >
          Next
        </button>
      </div>
    </>
  );
};
export default Task4;
