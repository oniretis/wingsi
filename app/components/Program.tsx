"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Program() {
  const [showForm, setShowForm] = useState<boolean>(false);

  const formRef = useRef<HTMLDivElement | null>(null);

  const handleClose = () => {
    setShowForm(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [formRef]);

  return (
    <div className="mb-14" id="blog">
      <section
        className="flex flex-col md:flex-row justify-center items-center overflow-hidden"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          width={700}
          height={700}
          src="/images/wd.jpg"
          alt=""
          className="md:w-1/2 w-full block h-full  object-contain "
        />
        <div className="container w-full block md:w-1/2 mx-auto px-5">
          <div className="flex flex-wrap items-center pt-10 justify-center ">
            {/* add it here */}

            <section className="bg-white  antialiased">
              <div className="max-w-screen-xl px-4 py-8 mx-auto ">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 ">
                    Events
                  </h2>
                  <div className="mt-4">
                    <a
                      href="#"
                      title=""
                      className="inline-flex items-center text-lg font-medium text-primary-600 hover:underline "
                    >
                      Learn more about our agenda
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="flow-root items-start max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
                  <div className="-my-4 divide-y divide-gray-200 ">
                    <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                      <p className="w-32 text-lg font-normal text-gray-500 sm:text-right  shrink-0">
                        March 27th
                      </p>
                      <h3 className="text-lg font-semibold text-gray-900 ">
                        <a href="#" className="hover:underline">
                          International Womens Day Brunch :Inspire Inclusion
                        </a>
                      </h3>
                    </div>
                    <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                      <p className="w-32 text-lg font-normal text-gray-500 sm:text-right  shrink-0">
                        February 6th
                      </p>
                      <h3 className="text-lg font-semibold text-gray-900 ">
                        <a href="#" className="hover:underline">
                          International Day for Zero Tolerance of Female Genital
                          Mutilation
                        </a>
                      </h3>
                    </div>
                    <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                      <p className="w-32 text-lg font-normal text-gray-500 sm:text-right  shrink-0">
                        June
                      </p>
                      <h3 className="text-lg font-semibold text-gray-900 ">
                        <a href="#" className="hover:underline">
                          Engaging men for Feminist Peace
                        </a>
                      </h3>
                    </div>
                    <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                      <p className="w-32 text-lg font-normal text-gray-500 sm:text-right  shrink-0">
                        October to December
                      </p>
                      <h3 className="text-lg font-semibold text-gray-900 ">
                        <a href="#" className="hover:underline">
                          Women Situation Room Ghana
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <button
              id="form"
              onClick={() => setShowForm(true)}
              className="group relative font-heading px-10 py-5 w-full lg:w-auto uppercase text-xs font-semibold tracking-px text-orange-50 bg-[#FF6801] overflow-hidden rounded-md"
            >
              <div className="absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-gray-800" />
              <p className="relative z-10">Register now</p>
            </button>

            {showForm && (
              <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen mx-2 my-20 lg:p-10 lg:my-10 text-center sm:block">
                  <div
                    className="fixed inset-0 transition-opacity"
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                  </div>
                  <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>
                  <div
                    className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                    ref={formRef}
                  >
                    <button
                      className="absolute top-0 right-0 p-4 text-white"
                      onClick={handleClose}
                    >
                      Close
                    </button>

                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLSeNkGBqHVaRKxFey9pCh_2uyrofXpxXbYcSs5ZqHLdTph75pw/viewform?embedded=true"
                      width="640"
                      height="704"
                      frameBorder="0"
                      marginHeight={0}
                      marginWidth={0}
                      className="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                    >
                      Loading…
                    </iframe>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
