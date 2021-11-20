/* eslint-disable jsx-a11y/anchor-is-valid */
import "../styles/navbar.css";
import TopBar from "./Topbar.jsx";

function Navbar() {
  // let dropDown = document.getElementById("dropdown-menu");
  // dropDown.addEventListener("mouseover", function () {
  //   dropDown.style.display = "block";
  // });
  return (
    <div className="header-container">
      <nav className="header-content">
        <div className="navigation-background"></div>
        <TopBar />
        <div className="navigation-container">
          <div className="navigation-main">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="navigation-logo">
              <svg
                xmlns="http:www.w3.org/2000/svg"
                viewBox="0 0 14 21"
                role="presentation"
              >
                <path
                  d="M0 0h14v7H7zm0 7h7l7 7H7v7l-7-7z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="navigation-logowordmark">Framer</span>
            </a>
            <ul className="nav-links">
              <li>
                <a className="pagination-link" href="#">
                  Teams
                </a>
              </li>
              <li>
                <a className="pagination-link" href="#">
                  Showcase
                </a>
              </li>
              <li>
                <a className="pagination-link" href="#">
                  Developers
                </a>
              </li>
              <li className="sub-links">
                <a className="pagination-link" href="#">
                  Resources
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 6 6"
                    class="Navigation_pageArrow"
                    role="presentation"
                  >
                    <path
                      d="M.371 2.995A.6.6 0 01.822 2h4.356a.6.6 0 01.451.995L3.602 5.312a.8.8 0 01-1.204 0z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>

                <ul id="dropdown-menu">
                  <li>
                    <a className="pagination-link" href="#">
                      Tutorials
                    </a>
                  </li>
                  <li>
                    <a className="pagination-link" href="#">
                      Example
                    </a>
                  </li>
                  <li>
                    <a className="pagination-link" href="#">
                      Components
                    </a>
                  </li>
                  <li>
                    <a className="pagination-link" href="#">
                      Templates
                    </a>
                  </li>
                  <li>
                    <a className="pagination-link" href="#">
                      Session
                    </a>
                  </li>
                  <li>
                    <a className="pagination-link" href="#">
                      Support
                    </a>
                  </li>
                  <li>
                    <a className="pagination-link" href="#">
                      Updates
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="pagination-link" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="pagination-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="navigation-search pagination-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  role="presentation"
                >
                  <path
                    d="M11.4 5.9a5.5 5.5 0 110 11 5.5 5.5 0 110-11zM18 18l-2.5-2.5"
                    fill="transparent"
                    stroke-width="2"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </li>
            </ul>

            <div className="navigation-actions">
              <button className="sign-in pagination-link">Sign in</button>
              <button className="signup">Sign Up For Free</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
