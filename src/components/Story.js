import hero1 from '../assets/images/hero-1.jpg';
import hero2 from '../assets/images/hero-2.jpg';
import hero3 from '../assets/images/hero-3.jpg';

const Story = () => {
  return (
    <div className="story">
      <div className="story__content">
        <h1 className="heading-primary mb-sm">
          Your College Journey Starts Here
        </h1>
        <p className="primary-text">
          Trav4College offers a robust platform that includes rich details on
          admissions, student profiles, cost of study, graduate outcomes and
          much more.
        </p>
        <div className="button-box">
          <button className="btn btn__blue btn__blue--large1 mr-bg">
            Signup
          </button>
          <button className="btn btn__white btn__white--large2 mr-bg">
            Download App
          </button>
        </div>
      </div>
      <div className="story__picture">
        <figure className="story__img-item story__img-item--1">
          <img src={hero1} alt="hero-1" className="story__img" />
        </figure>
        <figure className="story__img-item story__img-item--2">
          <img src={hero2} alt="hero-2" className="story__img" />
        </figure>
        <figure className="story__img-item story__img-item--3">
          <img src={hero3} alt="hero-3" className="story__img" />
        </figure>
      </div>
    </div>
  );
};

export default Story;
