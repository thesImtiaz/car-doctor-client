import timetable from "../../../assets/icons/timetable.svg";
import phone from "../../../assets/icons/phone.svg";
import location from "../../../assets/icons/location.svg";

const Contacts = () => {
  return (
    <div className="p-4">
      <div className="flex flex-wrap items-center justify-around w-full h-60 mb-4 bg-black rounded-lg">
        <div className="flex gap-4">
          <div>
            <img src={timetable} alt="" />
          </div>

          <div>
            <h2 className="text-base font-medium text-white">
              We are open monday-friday
            </h2>
            <p className="text-2xl font-bold text-white">7:00 am - 9:00 pm</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div>
            <img src={phone} alt="" />
          </div>

          <div>
            <h2 className="text-base font-medium text-white">
              Have a question?
            </h2>
            <p className="text-2xl font-bold text-white">+2546 251 2658</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div>
            <img src={location} alt="" />
          </div>

          <div>
            <h2 className="text-base font-medium text-white">
              Need a repair? our address
            </h2>
            <p className="text-2xl font-bold text-white">
              Liza Street, New York
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
