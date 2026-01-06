import Image from "next/image";
import Button from "../common/button";
import IconArrowCircleUpright from "../vectors/arrowCircleUpright";

function LetsTalk() {
  return (
    <section className="mt-16">
      <div className="flex flex-col px-8">
        <Image
          src="/letsTalkGraph.svg"
          alt="Let's Talk"
          width={800}
          height={400}
          className="mx-auto"
        />
        <div>
          <h2 className="font-bold text-2xl mt-4">
            We Offers Wide Range of Integrations
          </h2>
          <Button
            className="mt-6 px-14"
            text="Let's Talk"
            type="secondary"
            icon={<IconArrowCircleUpright size={24} />}
          />
        </div>
      </div>
    </section>
  );
}

export default LetsTalk;
