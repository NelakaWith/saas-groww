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
        <SectionTag title="Why Choose Groww" />
        <h2 className="mt-7 mx-auto max-w-[360px] md:max-w-[800px] font-bold text-3xl md:text-6xl text-center">
          Get Clear Insights into Your Start-up’s Finances
        </h2>
      </div>

      {/* Mobile/Tablet: Horizontal scroll */}
      <div className="relative scroll-fade mt-16 lg:hidden">
        <div className="px-4 flex items-stretch overflow-x-auto w-full no-scrollbar">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 md:w-80 glass-xl p-6 m-4 rounded-xl flex flex-col self-stretch justify-between"
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

      {/* Desktop (lg+): 3 columns - cards, image, cards */}
      <div className="hidden lg:flex gap-6 px-16 mt-16 max-w-7xl mx-auto items-center">
        {/* First column: 2 cards stacked */}
        <div className="flex-1 flex flex-col gap-6 items-center">
          {insights.slice(0, 2).map((insight, index) => (
            <div key={index} className="glass-xl p-6 rounded-xl flex flex-col">
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

        {/* Middle column: Image */}
        <div className="flex-shrink-0 px-6">
          <img
            src="/mobile.png"
            alt="Mobile App Interface"
            className="h-auto max-w-xs rounded-xl object-cover"
          />
        </div>

        {/* Last column: 2 cards stacked */}
        <div className="flex-1 flex flex-col gap-6">
          {insights.slice(2).map((insight, index) => (
            <div
              key={index + 2}
              className="glass-xl p-6 rounded-xl flex flex-col"
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
