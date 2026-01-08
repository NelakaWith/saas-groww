function WhyUsBeyondLimits() {
  return (
    <section className="mt-16">
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row md:max-w-7xl md:mx-auto">
          <img
            src="/whyUs01.png"
            alt="Description of image"
            className="object-cover w-full md:w-96 mx-auto"
          />
          <div className="px-16 py-20 text-center md:text-start">
            <h2 className="text-4xl font-bold">Look Beyond Limits</h2>
            <p className="mt-8">
              Discover unparalleled financial freedom with our AI-driven tools,
              designed to elevate your journey beyond traditional boundaries.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse md:max-w-7xl md:mx-auto">
          <img
            src="/whyUs02.png"
            alt="Description of image"
            className="object-cover w-full md:w-96 mx-auto"
          />
          <div className="px-16 py-20 text-center  md:text-end">
            <h2 className="text-4xl font-bold">Embrace the Future</h2>
            <p className="mt-8">
              Embrace the future of finance with our cutting-edge AI solutions,
              empowering you to transcend limits and achieve your financial
              goals effortlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUsBeyondLimits;
