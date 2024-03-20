import React from "react";

export const Hero = () => {
  return (
    <section className="overflow-hidden mt-24">
      <div className="bg-black py-1 px-2">
        <p className="text-white text-center capitalize">
          Get the Latest updates from the Wingsi community.
        </p>
      </div>

      <div className="flex flex-wrap p-10 -m-4">
        <div className="w-full lg:w-5/12 p-4">
          <a href="#" className="group">
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{ height: 600 }}
            >
              <img
                className="absolute inset-0 rounded-2xl w-full h-full object-cover transform group-hover:scale-105 transition duration-200"
                src="/images/ban.jpeg"
                alt=""
              />
              <div className="absolute bottom-8 left-8">
                <h2 className="font-heading text-orange-500 text-6xl sm:text-8xl uppercase max-w-xs">
                  WINGSI
                </h2>
              </div>
            </div>
          </a>
        </div>
        <div className="w-full lg:w-7/12 p-4">
          <div className="bg-orange-500 rounded-2xl flex flex-col justify-between h-full p-8">
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-white uppercase max-w-2xl">
              Women in Gender Support Initiative
            </h2>
            <div>
              <p className="text-sm md:text-lg font-semibold text-neutral-200 mb-6 max-w-xl">
                Women in Gender Support Initiative (WINGSI) is a feminist
                peacebuilding and human rights organisation with presence and
                impact around African.
              </p>
              <a
                href="#"
                className="bg-gray-900 rounded-full hover:bg-gray-800 focus:ring-4 focus:ring-gray-200 text-white text-sm font-semibold px-4 h-12 inline-flex items-center transition duration-200"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-10 -m-4">
        <div className="w-1/2 md:w-1/3 lg:w-1/6 p-4">
          <img
            className="mx-auto flex-shrink-0 h-14"
            src="/images/crs.png"
            alt=""
          />
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/6 p-4">
          <img
            className="mx-auto flex-shrink-0 h-20"
            src="/images/muselogo.png"
            alt=""
          />
        </div>
        {/* <div className="w-1/2 md:w-1/3 lg:w-1/6 p-4">
          <img
            className="mx-auto flex-shrink-0 h-20"
            src="/images/wil.webp"
            alt=""
          />
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/6 p-4">
          <img
            className="mx-auto flex-shrink-0 h-11"
            src="/images/un.png"
            alt=""
          />
        </div> */}
        <div className="w-1/2 md:w-1/3 lg:w-1/6 p-4">
          {/* <img
            className="mx-auto flex-shrink-0 h-20"
            src="https://shuffle.dev/shopky-assets/logos/nike-logo.svg"
            alt=""
          /> */}
          <h1 className="text-lg font-bold text-pink-600">
            Nana Arts Initiative
          </h1>
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/6 p-4">
          <img
            className="mx-auto flex-shrink-0 h-14"
            src="/images/irex.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
