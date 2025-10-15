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

function WhyUs() {
  return (
    <section className="mt-16">
      <div className="text-center w-full">
        <div className="inline-block px-4 py-2 mx-auto bg-neutral-800 border-2 border-neutral-400 rounded-full text-neutral-50 text-center">
          Why Choose Us
        </div>
        <h2 className="mt-7 mx-auto max-w-[360px] font-bold text-3xl md:text-6xl text-center">
          Get Clear Insights into Your Start-up’s Finances
        </h2>
      </div>
      <div className="relative scroll-fade mt-8">
        <div className="px-4 inline-flex items-center overflow-x-auto w-full no-scrollbar "></div>
      </div>
    </section>
  );
}

export default WhyUs;
