import Button from "../common/button";
import SectionTag from "../common/sectionTag";
import IconArrowCircleUpright from "../vectors/arrowCircleUpright";
import Image from "next/image";

const features = [
  {
    icon: "/iconLightning.svg",
    title: "Get Paid Faster",
    description: "Receive your payments quickly and efficiently.",
  },
  {
    icon: "/iconMoneyWavy.svg",
    title: "Monitor Cash Flow",
    description: "Keep track of your income and expenses in real-time.",
  },
  {
    icon: "/iconSticker.svg",
    title: "Easy Bill Payment",
    description:
      "Simplify your bill payments with automated reminders and easy tracking.",
  },
  {
    icon: "/iconDonutChart.svg",
    title: "Advance Analysis",
    description:
      "Gain insights into your financial data with our advanced analysis tools.",
  },
];

function WhyUsPlans() {
  return (
    <section className="mt-8">
      <div className="flex flex-col w-full px-4 items-center gap-8">
        <div className="px-8 text-center">
          <SectionTag title="Why Choose Groww" />
          <h2 className="font-bold text-4xl mt-4">
            Tailored Financial Plans By Experts
          </h2>
          <p className="mt-2">
            Get personalized investment strategies crafted by our team of
            financial advisors.
          </p>
          <Button
            className="mt-6"
            text="Learn More"
            type="secondary"
            icon={<IconArrowCircleUpright size={24} />}
          />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 auto-rows-fr gap-8 px-8 ">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start text-center">
              <div className="p-4 mx-auto rounded-2xl bg-neutral-800">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  className="w-8 h-8"
                  width={32}
                  height={32}
                />
              </div>
              <h2 className="font-semibold text-xl mt-4">{feature.title}</h2>
              <p className="text-neutral-400 mt-4">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUsPlans;
