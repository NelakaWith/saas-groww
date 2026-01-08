import SectionTag from "../common/sectionTag";

function Integrations() {
  return (
    <section className="mt-8 md:mt-52 md:mx-auto md:max-w-7xl">
      <div className="px-8 text-center">
        <SectionTag title="Integration" />
        <h2 className="font-bold text-4xl mt-4">
          We Offers Wide Range of Integrations
        </h2>
        <p className="mt-2 text-neutral-400">
          Seamlessly connect with popular tools and platforms to enhance your
          workflow and productivity. Our comprehensive integration ecosystem
          allows you to sync data across multiple applications, automate
          repetitive tasks, and create powerful workflows that save time and
          reduce manual effort. Whether you're connecting with project
          management tools like Jira and Trello, communication platforms such as
          Slack and Microsoft Teams, or data analytics services including Google
          Analytics and Mixpanel, our robust API and pre-built connectors ensure
          smooth data flow and real-time synchronization. Experience the power
          of unified operations as your favorite tools work together
          harmoniously, eliminating data silos and streamlining your business
          processes for maximum efficiency and productivity gains.
        </p>
      </div>
    </section>
  );
}

export default Integrations;
