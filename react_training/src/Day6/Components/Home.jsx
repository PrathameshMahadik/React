import React from "react";

const Home = (props) => {
  const { comment } = props;
  return (
    <div>
      <h2>{comment}</h2>
    </div>
  );
};
export default Home;
