import LogoSvg from '../assets/images/iconlogo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src={LogoSvg} alt="Trav4college logo" className="header__logo" />
        <span className="header__text">Trav4college</span>
      </div>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <a
              href="https://trav4college.com/applications"
              className="header__link"
            >
              College Application
            </a>
          </li>
          <li className="header__item">
            <a
              href="https://trav4college.com/scholarships"
              className="header__link"
            >
              Scholarships
            </a>
          </li>
          <li className="header__item">
            <a
              href="https://trav4college.com/partners"
              className="header__link"
            >
              Study Abroad Solutions
            </a>
          </li>
        </ul>
      </nav>
      <a
        href="https://webapp.trav4college.com/user/login"
        className="btn-text mr-bg"
      >
        Login
      </a>
      <a
        href="https://webapp.trav4college.com/user/register"
        className="btn btn__blue btn__small"
      >
        Get started
      </a>
    </header>
  );
};

export default Header;
