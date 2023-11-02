import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="p-4">
      <div className="text-center space-y-5">
        <h3 className="text-xl font-bold text-[#FF3811]"> Service</h3>
        <h2 className="text-4xl lg:text-5xl font-bold">Our Service Area</h2>
        <p className="text-sm lg:text-base font-normal">
          The Majority Have Suffered Alteration In Some Form, By Injected
          Humour, Or Randomised <br /> Words Which Don't Look Even Slightly
          Believable.{" "}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="btn btn-outline text-lg font-semibold text-[#FF3811] normal-case border-[#FF3811] hover:border-[#FF3811] hover:bg-[#FF3811]">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
