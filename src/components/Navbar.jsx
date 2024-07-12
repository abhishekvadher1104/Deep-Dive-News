import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container gap-2">
          {/* ganral */}
          <div className="dropdown">
            <Link
              className="btn btn-secondary dropdown-toggle"
              to="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              General
            </Link>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <Link className="dropdown-item" to="/in">
                  India
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/us">
                 America
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/sa">
                  South Africa
                </Link>
              </li>
            </ul>
          </div>

          {/* busness */}
          <div className="dropdown me-3">
            <Link
              className="btn btn-secondary dropdown-toggle"
              to="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Business
            </Link>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <Link className="dropdown-item" to="/in/business">
                  India
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/us/business">
                 America
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/sa/business">
                  South Africa
                </Link>
              </li>
            </ul>
          </div>

          {/* Entertainment */}

          <div className="dropdown me-3">
            <Link
              className="btn btn-secondary dropdown-toggle"
              to="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Entertainment
            </Link>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <Link className="dropdown-item" to="/in/entertainment">
                  India
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/us/entertainment">
                 America
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/sa/entertainment">
                  South Africa
                </Link>
              </li>
            </ul>
          </div>

          {/* health */}

          <div className="dropdown me-3">
            <Link
              className="btn btn-secondary dropdown-toggle"
              to="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Health
            </Link>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <Link className="dropdown-item" to="/in/health">
                  India
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/us/health">
                 America
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/sa/health">
                  South Africa
                </Link>
              </li>
            </ul>
          </div>

          {/* sports */}
          <div className="dropdown me-3">
            <Link
              className="btn btn-secondary dropdown-toggle"
              to="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sports
            </Link>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <Link className="dropdown-item" to="/in/sports">
                  India
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/us/sports">
                 America
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/sa/sports">
                  South Africa
                </Link>
              </li>
            </ul>
          </div>

          {/* technology */}
          <div className="dropdown me-3">
            <Link
              className="btn btn-secondary dropdown-toggle"
              to="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Technology
            </Link>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <Link className="dropdown-item" to="/in/technology">
                  India
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/us/technology">
                 America
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/sa/technology">
                  South Africa
                </Link>
              </li>
            </ul>
          </div>


          {/* science */}
          <div className="dropdown me-3">
            <Link
              className="btn btn-secondary dropdown-toggle"
              to="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Science
            </Link>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <Link className="dropdown-item" to="/in/science">
                  India
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/us/science">
                 America
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/sa/science">
                  South Africa
                </Link>
              </li>
            </ul>
          </div>

        
      </div>
    </nav>
  );
}

export default Navbar;
