import React from "react";
import { Link } from "react-router-dom";
import { link } from "./link";
const Menu = () => {
  return (
    <div>
      <ul>
        {Object.keys(link)
          .slice(0, 3)
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
    </div>
  );
};

export default Menu;
