"use client";
import { tours } from "@/src/data/tours";
import { formatDate } from "@/src/utils/formatDate";
import { Tour } from "../../types/tours";
import Link from "next/link";
import Icon from "../../general/Icon";

export const UpcomingTour = () => {
  const { data } = tours;
  const currentDate = new Date();

  const currentTour: Tour = data
    .filter((tour) => new Date(tour.date) >= currentDate)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0];

  const { formattedDate, formattedTime } = formatDate({
    date: new Date(currentTour.date),
  });

  return (
    <section
      data-testid="section-weather"
      className="py-10 d:py-[185px] relative bg-cover bg-no-repeat"
      style={{ backgroundImage: "url(/images/nexttour.png)" }}
    >
      <div className="custom-container">
        <div className="flex items-center max-md:flex-wrap-reverse max-d:gap-5 w-full justify-center xl:justify-between">
          <div className="md:max-w-[836px] w-full flex max-md:flex-row max-md:flex-wrap-reverse max-md:items-center max-xl:flex-col-reverse max-xl:gap-5 items-start justify-between">
            <a
              href={`https://www.google.com/maps?q=${encodeURIComponent(
                currentTour.location
              )}`}
              className="flex subheading-s xl:mt-[77px] p-4 items-center gap-4 border-2 border-black-opacity-light rounded-2xl bg-white-opacity-secondary backdrop-blur-[32px]"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon name="map" width={66} />
              <p>{currentTour.title}</p>
              <Icon name="arrow-right" width={24} />
            </a>

            <div className="subheading-s border-2 border-black-opacity-light rounded-2xl max-w-[311px] w-full bg-white-opacity-secondary backdrop-blur-[32px] p-6 ">
              <div className="pb-4 border-b border-white-opacity">
                <p className="mb-4">{formattedDate}</p>
                <div className="bg-dark-blue px-2 py-1 subheading-m rounded-lg flex justify-between">
                  <p>{formattedTime}</p>
                  <p>24c</p>
                </div>
              </div>
              <div className="flex flex-col py-4 border-b border-white-opacity">
                Distance:{" "}
                <span className="subheading-l">{currentTour.distance}KM</span>
              </div>
              <div className="flex flex-col py-4 border-b border-white-opacity">
                Height:{" "}
                <span className="subheading-l">
                  {currentTour.altitude} MDPL
                </span>
              </div>
            </div>
          </div>

          <div className="relative z-10 md:max-w-[536px] w-full flex flex-col gap-8 self-end xl:mr-[45px]">
            <div>
              <span className="text-white-opacity mb-1">Upcoming Tour</span>
              <h2 className="heading-m font-bold">{currentTour.title}</h2>
            </div>

            <p className="description-xs text-white-opacity-tertiary">
              {currentTour.description}
            </p>

            <Link
              href="/"
              className="text-primary-cyan description-s flex gap-4"
            >
              See more
              <Icon name="arrow" width={47} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
