import Image from "next/image.js";
import BadPbXperiences from "./BadPbXperiences.jsx";

export default function TodaysPbxSection() {
  return (
    <div className="my-5 lg:my-10 grid sm:grid-cols-1 md:grid-cols-2 font-Open_sans">
      {/* left column */}
      <div className="grid p-3 md:p-8">
        <p className="text-2xl md:text-3xl lg:text-4xl text-primary font-semibold mb-7 font-sans">
          In today’s PBX market...
        </p>
        <p className="text-base lg:text-lg text-customColors-dovegray font-medium leading-relaxed">
          Hosted PBX and cloud-based PBX / UCaaS providers are losing money,
          losing their competitive advantage, and losing control over their
          solutions – and their customers.{" "}
          <b className="tracking-wide text-lg lg:text-xl">
            They know that it’s no longer possible to offer only ‘cheap voice
            calls’ or ‘cloud PBX’ and expect to be competitive or profitable.
          </b>
        </p>
        <p className="my-[27px] text-base lg:text-lg text-customColors-dovegray font-medium leading-relaxed">
          If this sounds familiar, you might be experiencing the following:
        </p>
        <BadPbXperiences />
      </div>
      {/* right column */}
      <div className="font-Open_sans rounded-[50px] mt-5 mx-8 mb-8 p-5 md:p-10 bg-white">
        {/* pic */}
        <div className="w-full flex mb-5">
          <div className="w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 overflow-hidden rounded-full flex">
            <Image
              height={300}
              width={300}
              src="/about2.jpeg"
              alt="image"
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <p className="text-customColors-fiord text-2xl font-semibold">
            Michelle Igwe
          </p>
          <p className="text-primary text-base lg:text-lg font-medium mt-1 mb-5">
            Nethub Head of Marketing
          </p>
        </div>
        <p className="text-base lg:text-lg text-customColors-dovegray mb-[33px]">
          Cloud PBX customers are demanding more functionality, cheaper prices,
          and additional cloud contact center seats from CSPs – all while
          per-seat and per-active-call licensing fees drive margins downward and
          put the squeeze on growth.
        </p>
        <p className="text-base lg:text-lg text-customColors-dovegray">
          NetSwitch comes with the very unique offering of an{" "}
          <b>
            unlimited perpetual license: we do not charge you per subscriber
          </b>
          , so you can maintain a predictable total cost of ownership. That
          means your business telephony service can grow with your customers –
          while your profits grow, too.
        </p>
      </div>
    </div>
  );
}
