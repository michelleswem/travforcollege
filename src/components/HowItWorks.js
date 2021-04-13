import rocket from '../assets/images/rocket.png';
import books from '../assets/images/books.png';
import school from '../assets/images/school.png';

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="how-it-works__box">
        <h1 className="how-it-works__heading-primary">
          How Trav4college Works
        </h1>
      </div>
      <div className="how-it-works__container">
        <div className="how-it-works__review">
          <img src={rocket} alt="plan" className="how-it-works__img" />
          <h3 className="how-it-works__heading-3">Plan</h3>
          <p className="how-it-works__text">
            We will help you map out your goals and aspirations and also help
            you take conscious steps towards discovering schools that will fit
            into your objectives and goals. We will be there to help you through
            the entire process- from helping you make a list of preferred
            schools, to selecting an exam and putting together your documents
            for your application.
          </p>
        </div>
        <div className="how-it-works__review">
          <img src={school} alt="apply" className="how-it-works__img" />
          <h3 className="how-it-works__heading-3">Apply</h3>
          <p className="how-it-works__text">
            Once a suitable school is found, we begin the process of soliciting
            with our partner schools and then send your applications in. Through
            the application process, from the point of ‘applied’ till your
            application status says ‘admitted’, we will stand rigidly behind you
            and make the necessary preparations for when you get admitted.
          </p>
        </div>
        <div className="how-it-works__review">
          <img src={books} alt="travel" className="how-it-works__img" />
          <h3 className="how-it-works__heading-3">Travel</h3>
          <p className="how-it-works__text">
            Obtaining your visa and other travel documents may sometimes be
            challenging, for this reason, we will be handling your visa
            application process. We will help you secure your travel visa and
            flexible tickets and also notify the school prior to resumption date
            so they can prepare towards receiving an international student.
            Trav4college will help you settle in and even keep in touch with you
            till your education program is over.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
