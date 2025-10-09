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
      </div>
    </section>
  );
}

export default HeroSection;
