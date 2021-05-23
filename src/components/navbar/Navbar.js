import './style-nav.css';
import { NavLink, BrowserRouter, useHistory } from 'react-router-dom';
import brand from '../../images/brand.png';

function Navbar(props) {
  let history = useHistory();
  return (
    <>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light">
          {/* <a class="navbar-brand" href="#">
            Navbar
          </a> */}
          <img src={brand} alt="logo" className="navbar-brand" />
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <BrowserRouter>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <NavLink
                    onClick={() => history.push('/space-page')}
                    to="/space-page"
                    activeClassName="is-active"
                    className="nav-link"
                  >
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    onClick={() => history.push('/Services')}
                    to="/Services"
                    activeClassName="is-active"
                    className="nav-link"
                  >
                    Services
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    onClick={() => history.push('/About')}
                    to="/About"
                    activeClassName="is-active"
                    className="nav-link"
                  >
                    About
                  </NavLink>
                </li>

                <li class="nav-item">
                  <NavLink
                    onClick={() => history.push('/Events')}
                    to="/Events"
                    activeClassName="is-active"
                    className="nav-link"
                  >
                    Events
                  </NavLink>
                </li>

                <li class="nav-item">
                  <NavLink
                    onClick={() => history.push('/ContactUs')}
                    to="/ContactUs"
                    activeClassName="is-active"
                    className="nav-link"
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </BrowserRouter>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
