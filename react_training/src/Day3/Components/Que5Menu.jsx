/* 5.Extend the application to include nested routes for a more complex user interface.
Create a new section of your application (e.g., a Dashboard) with multiple sub-pages (e.g., Dashboard, Profile, Settings).
Implement nested routing within this section using nested routes.
Add navigation links to switch between the sub-pages within the Dashboard section.
Customize the content displayed on each sub-page. */
import React from "react";
import { Link } from "react-router-dom";
import { link } from "../Components/link";
const Que5Mneu = () => {
  return (
    <div>
      <ul>
        {Object.keys(link)
          .slice(3, 5)
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
export default Que5Mneu;
