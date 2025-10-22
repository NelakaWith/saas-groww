import SectionTag from "../common/sectionTag";

const insights = [
  {
    icon: "/iconEth.svg",
    title: "Expert Financial Guidance",
    description:
      "Receive personalized advice from financial experts to help you navigate your startup's financial landscape.",
  },
  {
    icon: "/iconCardHolder.svg",
    title: "Salary Scheduling",
    description:
      "Manage your salary payments efficiently with our automated scheduling tools.",
  },
  {
    icon: "/iconPieChart.svg",
    title: "Transaction Detail Review",
    description:
      "Get detailed insights into your transactions to monitor cash flow and identify trends.",
  },
  {
    icon: "/iconBarChart.svg",
    title: "Advance Report Generator",
    description:
      "Generate comprehensive reports to gain insights into your startup's financial performance.",
  },
];

function WhyUsInsights() {
  return (
    <section className="mt-16">
      <div className="text-center w-full px-16">
        <SectionTag title="Why Choose Us" />
        <h2 className="mt-7 mx-auto max-w-[360px] font-bold text-3xl md:text-6xl text-center">
          Get Clear Insights into Your Start-up’s Finances
        </h2>
      </div>
      <div className="relative scroll-fade mt-16">
        <div className="px-4 flex items-stretch overflow-x-auto w-full no-scrollbar">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 md:w-80 lg:w-96 glass-xl p-6 m-4 rounded-xl flex flex-col self-stretch justify-between"
            >
              <img
                src={insight.icon}
                alt={`${insight.title} Icon`}
                className="w-8 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{insight.title}</h3>
              <p className="text-neutral-400">{insight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUsInsights;
