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
        <div className="mt-8 flex-col px-8">
          <div className="flex flex-col">
            <div className="flex bg-neutral-800 rounded-xl border-spacing-1 border-neutral-400 p-8">
              <div className="flex-1">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUsCommunity;
