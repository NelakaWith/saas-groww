import Image from "next/image";
import Button from "../common/button";
import IconArrowCircleUpright from "../vectors/arrowCircleUpright";

function HeroSection() {
  return (
    <section className=" hero-glow h-screen">
      <div className="flex flex-col justify-center items-center pt-48 mx-5">
        <Button
          text="Elevate your journey! Read More"
          type="outline"
          size="sm"
          icon={<IconArrowCircleUpright size={24} />}
        />
        <h1 className="text-4xl md:text-6xl font-bold text-center mt-8 max-w-[700px]">
          AI Driven Universal Finance tool you need
        </h1>
        <div>
          <img className="rounded-full" src="https://i.pravatar.cc/45?img=1" />
          <img className="rounded-full" src="https://i.pravatar.cc/45?img=2" />
          <img className="rounded-full" src="https://i.pravatar.cc/45?img=3" />
        </div>
        <div>
          <Image
            src="/mobile.png"
            alt="Hero Image"
            width={200}
            height={200}
            priority
            className="w-auto h-auto max-w-[360px]"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
