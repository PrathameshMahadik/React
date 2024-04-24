import React from "react";
const Data = (props) => {
  return (
      <section className="container">
        {props.data.map((x, index) => {
          return (
            <div className="card" key={`name_${index}`}>
              <>
                <img
                  src={x.image}
                  alt="product_picture"
                  height={150}
                  width={150}
                />
              </>
              <div className="info">
                <h4>{x.title}</h4>
                <p>PRICE : {x.price}</p>
              </div>
            </div>
          );
        })}
      </section>
  );
};

export default Data;
