import Image from "next/image";
import Icon from "../general/Icon";
import Link from "next/link";
export const Hero = () => {
  return (
    <section>
      <div className="py-10 d:py-20 h-full flex flex-col">
        <div className="uppercase font-bold text-center px-5">
          <h1 className="subheading-m xs:subheading-l sm:heading-xs d:heading-s opacity-70">
            The beauty of
            <span className="heading-xs xs:heading-s sm:heading-m d:heading-l font-black block">
              Adventure
            </span>
          </h1>
        </div>

        <HeroBottom />
      </div>
    </section>
  );
};

const HeroBottom = () => {
  return (
    <div className="flex flex-col gap-6 2x:gap-0 2xl:flex-row items-center justify-between mt-20 d:mt-25 2xl:mt-[284px] ml-5 max-2xl:mr-5 pl-[calc((100vw-1630px)/2)]">
      <div className="flex max-sm:flex-col max-sm:items-center max-sm:gap-5 max-sm:text-center items-center 2xl:items-end max-w-[859px] w-full justify-between">
        <Link
          href="/tours"
          className="relative max-w-[304px] sm:mr-2 2x:mr-0 w-full h-80 flex flex-col justify-between rounded-xl overflow-hidden"
        >
          <Image
            src="/images/camper.png"
            fill
            alt="camper"
            className="absolute inset-0"
          />

          <div className="text-xs: description-s pl-8 pt-8 flex items-center gap-4 z-1 relative">
            See Tours
            <Icon name="arrow" width={47} />
          </div>

          <div className="text-base d:description-xs text-center z-1 relative p-4 backdrop-blur-xl bg-black-opacity">
            Our Facilities
          </div>
        </Link>

        <div className="flex flex-col max-w-[507px] w-full gap-4 d:gap-3 2xl:gap-6">
          <p className="subheading-l sm:heading-xs d:heading-s">
            Look deep into Beau
          </p>
          <p className="subheading-s sm:subheading-m 2xl:subheading-l text-primary-cyan">
            The beautiful mountain view
          </p>
          <p className="text-base d:description-xs">
            A mountain is a part of the earths crust that is higher than the
            area around it. Mountains usually have steep sides that
            significantly expose the bedrock.
          </p>
        </div>
      </div>

      <Link
        href="/blog"
        className="max-w-[528px] w-full bg-black-opacity-light backdrop-blur-[32px] grow rounded-[10px] 2xl:rounded-tl-[10px] 2xl:rounded-bl-[10px]"
      >
        <div className="description-s pt-8 pl-8 pb-[29px] flex items-center gap-4">
          Our Blog <Icon name="arrow" width={47} />
        </div>
        <Image src="/images/blog.png" alt="" width={528} height={152} />
      </Link>
    </div>
  );
};
