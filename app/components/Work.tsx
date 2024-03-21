import Image from "next/image";
import React from "react";

export const Work = () => {
  return (
    <section className="bg-white " id="work">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 ">
            Our Work
          </h2>
          <p className="font-light text-gray-500 sm:text-xl ">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md  ">
            <div className="flex justify-between items-center mb-5 text-gray-500">
              <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded  ">
                <svg
                  className="mr-1 w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
                Women
              </span>
              <span className="text-sm">7th of March, 2024</span>
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              <a href="#">2024 International Women&apos;s Day Celebration.</a>
            </h2>
            <p className="mb-5 font-light text-gray-500 ">
              As part of WINGS Initiative activities to commemorate the
              International Women&apos;s Day Celebration, we embarked on a walk
              to create awareness on inclusion of women at all levels. The walk
              took place in the city of Calabar, Cross River State, Nigeria.
              WINGS Initiative rallied various women rights organisations, women
              groups, women servicing organisations, religious and traditional
              bodies.
            </p>
            <div className="w-full mt-5 mb-10">
              <Image
                src="/images/1st.jpeg"
                width={500}
                height={500}
                alt="first"
              />
            </div>
            <div className="flex justify-between items-center">
              {/* <div className="flex items-center space-x-4">
                <img
                  className="w-7 h-7 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  alt="Jese Leos avatar"
                />
                <span className="font-medium ">Jese Leos</span>
              </div> */}
              <a
                href="#"
                className="inline-flex items-center font-medium text-primary-600  hover:underline"
              >
                Read more
                <svg
                  className="ml-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </article>
          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md  ">
            <div className="flex justify-between items-center mb-5 text-gray-500">
              <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded  ">
                <svg
                  className="mr-1 w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                    clipRule="evenodd"
                  />
                  <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                </svg>
                Traning
              </span>
              <span className="text-sm">Nov 16, 2023</span>
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              <a href="#">
                A One-day Training for Grassroots Women on Peace and Security.
              </a>
            </h2>
            <p className="mb-5 font-light text-gray-500 ">
              To commemorate the International Day of the Rural Woman, the
              Akpabuyo Youth Parliament trained 70 women from Idundu Clan,
              Akpabuyo Local Government Area, Cross River State, Nigeria in
              peacebuilding. In recent years, there has been an increase in
              insecurity. This conflict has escalated and intensified
              threatening human security and survival of people most especially
              women and girls. Rural women can play a crucial role as agents for
              peacebuilding in their communities and beyond. Their unique
              experiences, perspectives, and contributions can address the root
              causes of conflict and contribute to sustainable peace.
            </p>

            <div className="w-full mt-5 mb-10">
              <Image
                src="/images/2nd.jpeg"
                width={500}
                height={500}
                alt="first"
              />
            </div>
            <div className="flex justify-between items-center">
              {/* <div className="flex items-center space-x-4">
                <img
                  className="w-7 h-7 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                  alt="Bonnie Green avatar"
                />
                <span className="font-medium ">Bonnie Green</span>
              </div> */}
              <a
                href="#"
                className="inline-flex items-center font-medium text-primary-600  hover:underline"
              >
                Read more
                <svg
                  className="ml-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
