import React from "react";
const Data = (props) => {
  const { data } = props;
  return (
    <section className="container">
      {data.map((x, index) => {
        return (
          <div className="card" key={`name_${index}`}>
            <>
              <img
                src={x.image}
                alt="product_picture"
                height={120}
                width={150}
              />
            </>
            <div className="info" >
              <h4 id="title">{x.title}</h4>
              <br />
              <br />
              <p >PRICE : {x.price}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Data;
