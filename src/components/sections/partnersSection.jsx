import Image from "next/image";

const partnerLogos = [
  "/partners/partnerLogo01.svg",
  "/partners/partnerLogo02.svg",
  "/partners/partnerLogo03.svg",
  "/partners/partnerLogo04.svg",
  "/partners/partnerLogo05.svg",
];

function Partners() {
  return (
    <section className="mt-16 lg:mt-52">
      <h2 className="text-neutral-400 text-2xl text-center">
        Trusted by global brands
      </h2>
      <div className="relative scroll-fade mt-8">
        <div className="px-4 inline-flex items-center justify-center overflow-x-auto w-full no-scrollbar">
          {partnerLogos.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={`Partner Logo ${index + 1}`}
              className="m-4 max-w-[150px] h-auto"
              width={150}
              height={150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
