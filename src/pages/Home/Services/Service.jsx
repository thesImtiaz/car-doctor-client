import { FiArrowRight } from "react-icons/fi";
const Service = ({ service }) => {
  const { img, title, price } = service;
  return (
    <div className="mt-8">
      <div className="card border">
        <figure className="px-6 pt-6">
          <img src={img} alt="images" className="rounded-xl h-52 w-96" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="flex text-lg font-semibold text-[#FF3811]">
            <p>Price: ${price}</p>
            <FiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
