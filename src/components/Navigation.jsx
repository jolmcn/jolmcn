import { NavLink, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="mainNav">
      <Link to="/">
      <header>Jack OLeary McNeice</header>
      </Link>
        <nav className="topNav">
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/projects" activeClassName="active">Projects</NavLink>
            </li>
            {/* <li>
              <NavLink to="/photography" activeClassName="active">Photography</NavLink>
            </li> */}
            <li>
              <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
};

export default Navigation;