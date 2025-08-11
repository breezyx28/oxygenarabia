import Jumbotrun from "../../components/pages/Jumbotrun";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <>
      <Jumbotrun pageName={"Our Team"} />
      <section className="section-container bg-white">
        <div className="container px-6 py-10 mx-auto">
          <div className="section-text">
            Our <span className="text-primary">Executive Team</span>
          </div>

          <p className="max-w-2xl my-6 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
            <TeamCard name="arthur melo" position="design director" />

            <TeamCard name="Amelia. Anderson" position="Lead Developer" />

            <TeamCard name="Olivia Wathan" position="Lead designer" />

            <TeamCard name="John Doe" position="Full stack developer" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
