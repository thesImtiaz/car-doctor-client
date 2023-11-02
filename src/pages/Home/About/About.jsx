import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="min-h-full mt-16 mb-16 p-4">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-5/6 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="absolute w-1/2 rounded-lg shadow-2xl right-5 top-1/2 border-8 border-white"
          />
        </div>
        <div className="lg:w-1/2 space-y-4 lg:ml-8 pt-6 lg:pt-0">
          <h3 className="text-xl font-bold text-[#FF3811]">About Us</h3>
          <h1 className="text-3xl lg:text-5xl font-bold">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="text-sm lg:text-base font-normal">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <p className="text-sm lg:text-base font-normal">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-outline text-lg font-semibold text-[#FF3811] normal-case border-[#FF3811] hover:border-[#FF3811] hover:bg-[#FF3811] hover:text-white">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
