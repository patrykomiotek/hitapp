import { Link } from "react-router-dom";

import { Route } from "../../routes";

export const Menu = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={Route.HOME.path}>Home</Link>
          </li>
          <li>
            <Link to={Route.PRODUCTS_LIST.path}>Products</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
