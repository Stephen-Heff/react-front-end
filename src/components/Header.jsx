import React, { useState } from "react";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header id="header">
      <div className="mainheader">
        <div className="menuSeparator">
          <a className="title-name" href="#">
            StephenF
          </a>
          <nav className="bigNav">
            <ul>
              {/* <li>
                <a href="#about">About</a>
              </li> */}
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              {/* <li>
                <a href="#education">Education</a>
              </li> */}
            </ul>
          </nav>
          <button onClick={toggleMenu}>
            <i class="fa-solid fa-bars" id="menu-toggle"></i>
          </button>
        </div>

        {openMenu ? (
          <nav className="phoneNav">
            <ul>
              {/* <li>
                <a href="#about">About</a>
              </li> */}
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              {/* <li>
                <a href="#education">Education</a>
              </li> */}
            </ul>
          </nav>
        ) : null}
      </div>

      <div className="main-container" id="main-container">
        <div className="content">
          <img
            className="me"
            src="me2.png"
            alt="image of a black boy with headphones coding on a laptop"
          />

          <div className="text">
            <h1> Stephen Folorunsho</h1>
            <p>Frontend Developer</p>

            <div className="icon">
              <a href="https://github.com/Stephen-Heff" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/stephen-folorunsho-068b1b123/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="mailto:folosstephen@gmail.com" target="_blank">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default App;
