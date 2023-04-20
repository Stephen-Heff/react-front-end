export default function Header() {
  return (
    <header id="header">
      <div className="mainheader">
        <a className="title-name" href="#">
          Stephenf
        </a>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="main-container" id="main-container">
        <div className="content">
          <img
            className="me"
            src="me.png"
            alt="image of a black boy with headphones on coding on a laptop"
          />

          <div className="text">
            <h1> Stephen Folorunsho</h1>
            <p>Full-Stack Web Developer</p>

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
              <a href="mailto:stephenfolorunsho@hotmail.com" target="_blank">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
