import videoImg from '../assets/images/hero-2.jpg';
import trust1 from '../assets/images/trust-1.webp';
import trust2 from '../assets/images/trust-2.webp';
import trust3 from '../assets/images/trust-3.webp';

const Reviews = () => {
  return (
    <>
      <section className="school-reviews">
        <div className="school-reviews__box">
          <h2 className="school-reviews__heading">100+ Highschools trust us</h2>
          <p className="school-reviews__text">
            Choosing the right school is key to a student’s success in achieving
            his/her academic goals. Trav4College, coupled with a trusted network
            of accredited schools, is set up to help students successfully
            enroll in schools best suited for them.
          </p>
        </div>
        <div className="school-reviews__photo-box">
          <figure className="school-reviews__item school-reviews__item--1">
            <img
              src={trust1}
              alt="school-img-1"
              className="school-reviews__img"
            />
          </figure>
          <figure className="school-reviews__item school-reviews__item--2">
            <img
              src={trust2}
              alt="school-img-2"
              className="school-reviews__img"
            />
          </figure>
          <figure className="school-reviews__item school-reviews__item--3">
            <img
              src={trust3}
              alt="school-img-3"
              className="school-reviews__img"
            />
          </figure>
        </div>
        <div className="school-reviews__contact">
          <p className="school-reviews__enquiry">
            Are you a high school admin?
            <a href="!#" className="school-reviews__link">
              Contact Us
            </a>
          </p>
        </div>
      </section>
      <section className="video-review">
        <figure className="video-review__item">
          <img src={videoImg} alt="video" className="video-review__video" />
          <figcaption className="video-review__app">
            Available On App Stores
          </figcaption>
        </figure>
      </section>
    </>
  );
};

export default Reviews;
