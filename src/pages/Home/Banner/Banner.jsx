import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="p-4">
      <div className="carousel w-full h-[350px] md:h-[600px] rounded-xl ">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-xl object-cover" />
          <div className="absolute flex top-0 bottom-0 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
            <div className="text-white space-y-2 md:space-y-7 pl-8 md:pl-14 md:w-1/2">
              <h2 className="text-3xl md:text-6xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-sm md:text-lg font-normal">
                There are many variations of passages of available,
                <br /> but the majority have suffered alteration in some form
              </p>

              <div className="flex gap-4">
                <button className="btn btn-outline text-lg font-semibold text-white normal-case border-white hover:border-[#FF3811] hover:bg-[#FF3811]">
                  Discover More
                </button>
                <button className="btn btn-outline text-lg font-semibold text-white normal-case border-white hover:border-[#FF3811] hover:bg-[#FF3811]">
                  Latest Project
                </button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0 ">
            <a
              href="#slide6"
              className="md:h-14 md:w-14 btn btn-circle btn-outline hover:bg-[#FF3811] hover:border-none"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="md:h-14 md:w-14 btn btn-circle btn-outline hover:bg-[#FF3811] hover:border-none"
            >
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded-xl object-cover" />
          <div className="absolute flex top-0 bottom-0 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
            <div className="text-white space-y-2 md:space-y-7 pl-8 md:pl-14 md:w-1/2">
              <h2 className="text-3xl md:text-6xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-sm md:text-lg font-normal">
                There are many variations of passages of available,
                <br /> but the majority have suffered alteration in some form
              </p>

              <div className="flex gap-4">
                <button className="btn btn-outline text-lg font-semibold text-white normal-case border-white hover:border-[#FF3811] hover:bg-[#FF3811]">
                  Discover More
                </button>
                <button className="btn btn-outline text-lg font-semibold text-white normal-case border-white hover:border-[#FF3811] hover:bg-[#FF3811]">
                  Latest Project
                </button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0 ">
            <a
              href="#slide1"
              className="md:h-14 md:w-14 btn btn-circle btn-outline hover:bg-[#FF3811] hover:border-none"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="md:h-14 md:w-14 btn btn-circle btn-outline hover:bg-[#FF3811] hover:border-none"
            >
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full rounded-xl object-cover" />
          <div className="absolute flex top-0 bottom-0 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
            <div className="text-white space-y-2 md:space-y-7 pl-8 md:pl-14 md:w-1/2">
              <h2 className="text-3xl md:text-6xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-sm md:text-lg font-normal">
                There are many variations of passages of available,
                <br /> but the majority have suffered alteration in some form
              </p>

              <div className="flex gap-4">
                <button className="btn btn-outline text-lg font-semibold text-white normal-case border-white hover:border-[#FF3811] hover:bg-[#FF3811]">
                  Discover More
                </button>
                <button className="btn btn-outline text-lg font-semibold text-white normal-case border-white hover:border-[#FF3811] hover:bg-[#FF3811]">
                  Latest Project
                </button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0 ">
            <a
              href="#slide2"
              className="md:h-14 md:w-14 btn btn-circle btn-outline hover:bg-[#FF3811] hover:border-none"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="md:h-14 md:w-14 btn btn-circle btn-outline hover:bg-[#FF3811] hover:border-none"
            >
              ❯
            </a>
          </div>
        </div>

        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full rounded-xl object-cover" />
          <div className="absolute flex top-0 bottom-0 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
            <div className="text-white space-y-2 md:space-y-7 pl-8 md:pl-14 md:w-1/2">
              <h2 className="text-3xl md:text-6xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-sm md:text-lg font-normal">
                There are many variations of passages of available,
                <br /> but the majority have suffered alteration in some form
              </p>

              <div className="flex gap-4">
                <button className="btn btn-outline text-lg font-semibold text-white normal-case border-white hover:border-[#FF3811] hover:bg-[#FF3811]">
                  Discover More
                </button>
                <button className="btn btn-outline text-lg font-semibold text-white normal-case border-white hover:border-[#FF3811] hover:bg-[#FF3811]">
                  Latest Project
                </button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0 ">
            <a
              href="#slide3"
              className="md:h-14 md:w-14 btn btn-circle btn-outline hover:bg-[#FF3811] hover:border-none"
            >
              ❮
            </a>
            <a
              href="#slide5"
              className="md:h-14 md:w-14 btn btn-circle btn-outline hover:bg-[#FF3811] hover:border-none"
            >
              ❯
            </a>
          </div>
        </div>

        <div id="slide5" className="carousel-item relative w-full">
          <img src={img5} className="w-full rounded-xl object-cover" />
          <div className="absolute flex top-0 bottom-0 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
            <div className="text-white space-y-2 md:space-y-7 pl-8 md:pl-14 md:w-1/2">
              <h2 className="text-3xl md:text-6xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-sm md:text-lg font-normal">
                There are many variations of passages of available,
                <br /> but the majority have suffered alteration in some form
              </p>

              <div className="flex gap-4">
                <button className="btn btn-outline text-lg font-semibold text-white normal-case border-white hover:border-[#FF3811] hover:bg-[#FF3811]">
                  Discover More
                </button>
                <button className="btn btn-outline text-lg font-semibold text-white normal-case border-white hover:border-[#FF3811] hover:bg-[#FF3811]">
                  Latest Project
                </button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0 ">
            <a
              href="#slide4"
              className="md:h-14 md:w-14 btn btn-circle btn-outline hover:bg-[#FF3811] hover:border-none"
            >
              ❮
            </a>
            <a
              href="#slide6"
              className="md:h-14 md:w-14 btn btn-circle btn-outline hover:bg-[#FF3811] hover:border-none"
            >
              ❯
            </a>
          </div>
        </div>

        <div id="slide6" className="carousel-item relative w-full">
          <img src={img6} className="w-full rounded-xl object-cover" />
          <div className="absolute flex top-0 bottom-0 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
            <div className="text-white space-y-2 md:space-y-7 pl-8 md:pl-14 md:w-1/2">
              <h2 className="text-3xl md:text-6xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-sm md:text-lg font-normal">
                There are many variations of passages of available,
                <br /> but the majority have suffered alteration in some form
              </p>

              <div className="flex gap-4">
                <button className="btn btn-outline text-lg font-semibold text-white normal-case border-white hover:border-[#FF3811] hover:bg-[#FF3811]">
                  Discover More
                </button>
                <button className="btn btn-outline text-lg font-semibold text-white normal-case border-white hover:border-[#FF3811] hover:bg-[#FF3811]">
                  Latest Project
                </button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0 ">
            <a
              href="#slide5"
              className="md:h-14 md:w-14 btn btn-circle btn-outline hover:bg-[#FF3811] hover:border-none"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="md:h-14 md:w-14 btn btn-circle btn-outline hover:bg-[#FF3811] hover:border-none"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
