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
    <section className="mt-16 md:mt-52">
      <div className="flex flex-col md:flex-row w-full px-4 items-center md:items-start gap-8 md:max-w-7xl md:mx-auto">
        <div className="px-8 text-center md:text-start md:flex-1">
          <SectionTag title="Why Choose Groww" />
          <h2 className="font-bold text-4xl mt-4">
            Tailored Financial Plans By Experts
          </h2>
          <p className="mt-2 text-neutral-400">
            Get personalized investment strategies crafted by our team of
            financial advisors. Our experts analyze your goals and risk profile
            to create customized solutions that maximize returns while
            minimizing risks.
          </p>
          <Button
            className="mt-6"
            text="Learn More"
            type="secondary"
            icon={<IconArrowCircleUpright size={24} />}
          />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 auto-rows-fr gap-8 px-8 md:flex-1">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start text-center md:text-start"
            >
              <div className="p-4 mx-auto md:mx-0 rounded-2xl bg-neutral-800">
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
