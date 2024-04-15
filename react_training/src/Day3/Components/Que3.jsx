import React from "react";
import { Link } from "react-router-dom";
import { link } from "./link";
const Que3 = () => {
  return (
    <div>
      <nav>
        <ul>
          {Object.keys(link)
            .slice(0, 2)
            .map((key, index) => {
              return (
                <section key = {`name_${index}`}>
                  <li>
                    <Link to={key}>{link[key]}</Link>
                  </li>
                </section>
              );
            })}
        </ul>
      </nav>
    </div>
  );
};
export default Que3;
