import Image from "next/image";
import Button from "../common/button";
import IconArrowCircleUpright from "../vectors/arrowCircleUpright";

function HeroSection() {
  return (
    <section className="hero-glow h-auto min-h-screen">
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
        <div className="w-full flex justify-center items-center mt-11">
          <div className="flex -space-x-6 items-center me-2">
            <img
              className="w-11 h-11 rounded-full"
              src="https://i.pravatar.cc/45?img=1"
              alt="User 1"
            />
            <img
              className="w-11 h-11 rounded-full"
              src="https://i.pravatar.cc/45?img=2"
              alt="User 2"
            />
            <img
              className="w-11 h-11 rounded-full"
              src="https://i.pravatar.cc/45?img=3"
              alt="User 3"
            />
          </div>
          <span>Trusted by 20000+ Clients</span>
        </div>
        <div className="mt-8">
          <Image
            src="/mobile.png"
            alt="Hero Image"
            width={200}
            height={200}
            priority
            className="w-80 h-auto max-w-[360px] lg:hidden"
          />
          <img
            src="/desktop.png"
            alt="Hero Image"
            className="w-5/6 mx-auto hidden lg:block object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
