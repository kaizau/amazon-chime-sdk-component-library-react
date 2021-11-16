import { Heading } from "amazon-chime-sdk-component-library-react";
import React from "react";
import { Link } from "react-router-dom";
import routes from "../constants/routes";

const Menu: React.FC = () => (
  <>
    <Heading level={4}>
      React Component Library Test Demo
    </Heading>
    <nav>
      <ul>
        <li><Link id="simple-app" to={routes.SIMPLE_APP}>Simple App</Link></li>
      </ul>
    </nav>
  </>
)
export default Menu;
