import Image from "next/image";
import Button from "../common/button";
import IconArrowCircleUpright from "../vectors/arrowCircleUpright";

function LetsTalk() {
  return (
    <section className="mt-16 md:mt-52 md:mx-auto md:max-w-7xl">
      <div className="flex flex-col md:flex-row md:items-center md:gap-8 px-8">
        <Image
          src="/letsTalkGraph.svg"
          alt="Let's Talk"
          width={800}
          height={400}
          className="mx-auto md:flex-1"
        />
        <div className="md:flex-1">
          <h2 className="font-bold text-2xl mt-4">
            We’re exited to Help You With Your Financial Planning
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
