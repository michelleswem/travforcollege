import android from '../assets/images/android-dl.webp';
import ios from '../assets/images/ios-dl.webp';
import phone from '../assets/images/app_mockup.png';

const Signup = () => {
  return (
    <div className="signup">
      <div className="signup__content">
        <h1 className="signup__heading">
          For Aspiring College Students & Parents Sign up for free today.
        </h1>
        <div className="signup-box">
          <a
            href="https://webapp.trav4college.com/user/login"
            className="signup__btn mr-sm"
          >
            <img src={android} alt="android-app" />
          </a>
          <a
            href="https://webapp.trav4college.com/user/register"
            className="signup__btn mr-sm"
          >
            <img src={ios} alt="ios-app" />
          </a>
        </div>
      </div>
      <div className="signup__photo">
        <figure className="signup__item">
          <svg
            class="h-full w-full"
            width="578"
            height="727"
            viewBox="0 0 578 727"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <circle
              opacity="0.6"
              cx="289"
              cy="364"
              r="289"
              fill="#0480FC"
            ></circle>
            <circle cx="289.5" cy="363.5" r="243.5" fill="#0480FC"></circle>
            <rect x="130" y="16" width="321" height="691" fill="white"></rect>
            <rect x="107" width="364" height="727" fill="url(#pattern0)"></rect>
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xmlnsHref="#image0"
                  transform="scale(0.00274725 0.00137552)"
                ></use>
              </pattern>
              <image
                id="image0"
                width="364"
                height="727"
                xlinkHref={phone}
              ></image>
            </defs>
          </svg>
        </figure>
      </div>
    </div>
  );
};

export default Signup;
