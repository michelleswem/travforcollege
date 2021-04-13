import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/ig.png';
import twitter from '../assets/images/twitter.png';
import linkedin from '../assets/images/linkedin.png';
import medium from '../assets/images/medium.png';
import youtube from '../assets/images/yt.png';

import NigeriaSvg from '../assets/images/nigeria.svg';
import UsaSvg from '../assets/images/united-states.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__box">
        <div className="footer__company">
          <h3 className="footer__heading mb-sm">Company</h3>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="!#" className="footer__link">
                About
              </a>
            </li>
            <li className="footer__item">
              <a href="!#" className="footer__link">
                Privacy pollicy
              </a>
            </li>
            <li className="footer__item">
              <a href="!#" className="footer__link">
                Terms and Conditions
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__company">
          <h3 className="footer__heading mb-sm">Product</h3>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="!#" className="footer__link">
                College Applications
              </a>
            </li>
            <li className="footer__item">
              <a href="!#" className="footer__link">
                Scholarships
              </a>
            </li>
            <li className="footer__item">
              <a href="!#" className="footer__link">
                International Exams
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__company">
          <h3 className="footer__heading mb-sm">Resources</h3>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="!#" className="footer__link">
                Testimonial
              </a>
            </li>
            <li className="footer__item">
              <a href="!#" className="footer__link">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__company">
          <h3 className="footer__heading mb-sm">Contact</h3>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="!#" className="footer__link">
                contactus@trav4college.com
              </a>
              /li>
            </li>
            <li className="footer__item">
              <a href="!#" className="footer__link">
                Lagos: +2347063157060, +2349062547048
              </a>
            </li>
            <li className="footer__item">
              <a href="!#" className="footer__link">
                Georgia, USA: +1-800-517-1491
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__socials">
        <img src={facebook} alt="facebook" className="footer__img" />

        <img src={instagram} alt="instagram" className="footer__img" />

        <img src={linkedin} alt="linkedin" className="footer__img" />

        <img src={twitter} alt="twitter" className="footer__img" />

        <img src={medium} alt="medium" className="footer__img" />

        <img src={youtube} alt="youtube" className="footer__img" />
      </div>
      <div className="footer__address">
        <div className="footer__add">
          <img src={NigeriaSvg} alt="nigeria" className="footer__photo" />
          <p className="footer__text">
            The Hive Mall,Plot 16 T.F Kuboye Street,Oniru, Victoria Island,
            Lagos, Nigeria
          </p>
        </div>
        <div className="footer__add">
          <img src={UsaSvg} alt="nigeria" className="footer__photo" />

          <p className="footer__text">
            770 Old Roswell Place Suite I-200, Roswell, GA 30076,USA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
