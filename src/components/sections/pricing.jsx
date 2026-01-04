import SectionTag from "@/components/common/sectionTag";
import IconifyClient from "@/components/common/IconifyClient";
import Button from "../common/button";

function Pricing() {
  return (
    <section className="mt-16">
      <div className="px-8 text-center">
        <SectionTag title="Pricing" />
        <h2 className="font-bold text-4xl mt-4">Our Offer For Everyone</h2>
        <p className="mt-2">
          officer youth hesitation girl servant widow hurt spot imagine bow log
          solve stuff compare various even cultivate coward.
        </p>
      </div>
      <div className="mt-8 flex-col px-8">
        <div className="flex flex-col gap-8">
          {/* package types */}
          <div className="min-h-[620px] flex flex-col gap-8 bg-neutral-800 rounded-2xl border-spacing-1 border-neutral-400 p-8">
            <div className="flex-1">
              <span className="text-lg font-bold">Free</span>
              <div className="mt-6">
                <span className="text-6xl font-bold">$0</span>
                <span className="text-3xl font-bold text-neutral-400">/mo</span>
              </div>
              <p className="text-sm mb-6">
                Get <span className="text-brand-300">$50</span> on referrals.
              </p>
              <span>What’s included in free:</span>
              <ul className="mt-2 flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <IconifyClient
                    icon="mdi:check-circle"
                    className="text-brand-b300 text-xl"
                  />
                  Limited Tasks and Features
                </li>
                <li className="flex items-center gap-2">
                  <IconifyClient
                    icon="mdi:check-circle"
                    className="text-brand-b300 text-xl"
                  />
                  Up to 3 Users
                </li>
              </ul>
            </div>
            <Button text="Get Started" type="outline" className="text-center" />
          </div>
          {/* /package types */}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
