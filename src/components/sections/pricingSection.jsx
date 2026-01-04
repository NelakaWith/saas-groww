import SectionTag from "@/components/common/sectionTag";
import IconifyClient from "@/components/common/IconifyClient";
import Button from "../common/button";
import IconArrowCircleUpright from "../vectors/arrowCircleUpright";

const packages = [
  {
    name: "Free",
    price: 0,
    referral: 50,
    features: [
      "Basic Task Management",
      "Up to 3 Users",
      "Community Support",
      "Limited Integrations",
      "Basic Analytics",
    ],
    includedText: "What’s included in free:",
  },
  {
    name: "Advanced",
    price: 19,
    referral: 100,
    features: [
      "Everything in Free",
      "Unlimited Tasks & Projects",
      "Up to 10 Users",
      "Email & Chat Support",
      "All Integrations",
      "Advanced Analytics",
      "Customizable Workflows",
      "Automations",
    ],
    includedText: "Everything in Free, plus:",
  },
  {
    name: "Enterprise",
    price: 49,
    referral: 200,
    features: [
      "Everything in Advanced",
      "Unlimited Users",
      "Dedicated Account Manager",
      "Custom Integrations",
      "Single Sign-On (SSO)",
      "Priority SLA Support",
      "Audit Logs & Compliance",
      "Onboarding & Training",
    ],
    includedText: "Everything in Advanced, plus:",
  },
];

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
        <div className="flex flex-col md:flex-row gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={pkg.name}
              className="min-h-[620px] flex flex-col gap-8 bg-neutral-800 rounded-2xl border-spacing-1 border-neutral-400 p-8 flex-1"
            >
              <div className="flex-1">
                <span className="text-lg font-bold">{pkg.name}</span>
                <div className="mt-6">
                  <span className="text-6xl font-bold">${pkg.price}</span>
                  <span className="text-3xl font-bold text-neutral-400">
                    /mo
                  </span>
                </div>
                <p className="text-sm mb-6">
                  Get <span className="text-brand-300">${pkg.referral}</span> on
                  referrals.
                </p>
                <span>{pkg.includedText}</span>
                <ul className="mt-2 flex flex-col gap-2">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <IconifyClient
                        icon="mdi:check-circle"
                        className="text-brand-b300 text-xl"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                text="Get Started"
                type="outline"
                className="text-center"
              />
            </div>
          ))}
        </div>
        <div className="text-center flex flex-col gap-8 rounded-2xl border-spacing-1 border-neutral-400 p-8 mt-10 bg-gradient-to-b from-brand-300 via-25% via-brand-400 to-75% to-neutral-800">
          <span className="font-semibold text-xl">
            Grab it fast to Get Special Price
          </span>
          <Button
            text="Book Demo Now"
            icon={<IconArrowCircleUpright size={24} />}
          />
        </div>
      </div>
    </section>
  );
}

export default Pricing;
