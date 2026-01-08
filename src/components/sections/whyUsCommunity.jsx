import Button from "../common/button";
import SectionTag from "../common/sectionTag";
import IconArrowCircleUpright from "../vectors/arrowCircleUpright";

function WhyUsCommunity() {
  return (
    <section className="mt-8">
      <div className="w-full px-4">
        <div className="text-center px-16">
          <SectionTag title="Why Choose Groww" />
          <h2 className="font-bold text-4xl mt-4">The Power Of Community</h2>
          <p className="mt-2">
            Join a thriving community of 2 million+ investors leveraging Groww's
            platform for their financial journey.
          </p>
        </div>
        {/* top half */}
        <div className="mt-8 flex-col md:max-w-7xl md:mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col md:flex-row gap-8 bg-neutral-800 rounded-2xl border-spacing-1 border-neutral-400 p-8">
              <div className="flex-1 md:flex-col md:items-center md:justify-center">
                <h2 className="text-2xl font-medium">
                  Tailored Financial Plans By Experts
                </h2>
                <p className="mt-2">
                  Get personalized investment strategies crafted by our team of
                  financial advisors.
                </p>
                <Button
                  className="mt-4"
                  text="Learn More"
                  type="secondary"
                  icon={<IconArrowCircleUpright size={24} />}
                />
              </div>
              <div className="flex-1 md:flex md:items-center md:justify-center">
                <img
                  src="/card.png"
                  alt="Tailored Financial Plans"
                  className="w-full h-auto mx-auto md:mx-0 md:w-72"
                />
              </div>
            </div>
            <div>
              <img
                src="/coins.png"
                alt="Tailored Financial Plans"
                className="w-full h-auto mx-auto"
              />
            </div>
          </div>
        </div>
        {/* bottom half */}
        <div className="mt-8 flex-col md:max-w-7xl md:mx-auto px-8">
          <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 auto-rows-fr gap-8">
            <div className="flex-1">
              <img
                src="/coins.png"
                alt="Tailored Financial Plans"
                className="w-full h-auto mx-auto"
              />
            </div>
            <div className="grid grid-cols-2 gap-6 flex-1">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className={`rounded-2xl h-40 flex items-center justify-center ${
                    index == 3 ? "bg-brand-300" : "glass-xl"
                  }`}
                >
                  <img
                    src={`/randomLogo0${index + 1}.svg`}
                    alt={`Community Image ${index}`}
                    className=""
                  />
                </div>
              ))}
            </div>
            <div className="rounded-2xl glass-xl p-8 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="font-bold text-2xl">10 Million+ Downloads</h2>
                <p className="mt-2">
                  Join millions of users who have downloaded Groww and are
                  benefiting from our comprehensive financial tools and
                  resources.
                </p>
                <Button
                  className="mt-4"
                  text="Join Now"
                  type="outline"
                  size="sm"
                  icon={<IconArrowCircleUpright size={24} />}
                />
              </div>
              <div className="w-full flex justify-start items-center mt-11">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUsCommunity;
