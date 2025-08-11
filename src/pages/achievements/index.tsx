import Jumbotrun from "../../components/pages/Jumbotrun";
import OrbitComponent from "./OrbitComponent";
import AppCard from "./AppCard";

const achievements = () => {
  return (
    <>
      <Jumbotrun pageName={"Achievements"} />
      <section className="section-container flex md:flex-row flex-col justify-between items-center">
        <div className="container relative px-6">
          <div className="section-text">
            Our <span className="text-primary">Achievements</span>
          </div>
          <p className="mt-4 text-gray-500 xl:mt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            quam voluptatibus
          </p>
          <div className="grid grid-flow-cols md:grid-cols-2 grid-cols-1 gap-4 mt-[4rem]">
            <AppCard
              name="Kpsolla Platform"
              logo="/images/achievements/Kpsolla_profile.jpg"
            />
            <AppCard name="Anti" logo="/images/achievements/Anti.png" />
            <AppCard name="Central" logo="/images/achievements/Central.jpg" />
            <AppCard name="ForHer" logo="/images/achievements/ForHer.png" />
          </div>
        </div>
        <div className="relative hidden md:h-[500px] md:h-[250px] w-full md:flex flex-col justify-center items-center">
          <div className="applications-orbit-wrapper">
            <OrbitComponent />
          </div>
        </div>
      </section>
      <section className="section-container flex md:flex-row flex-col gap-y-8 justify-between">
        <div className="container px-6">
          <div className="section-text">
            Our Biggest <span className="text-primary">Achievement</span>
          </div>
          <p className="mt-4 text-gray-500 xl:mt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            quam voluptatibus
          </p>
          <article className="md:mt-[5rem] mt-[2.5rem] md:text-normal text-sm text-slate-700 max-w-[500px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            debitis consequuntur iste nesciunt sed nihil velit qui quidem dolore
            maiores quasi omnis, culpa amet enim aperiam voluptate ipsam
            voluptatem laborum placeat explicabo. Dolor voluptatum sunt, tempore
            nihil obcaecati perferendis esse ratione necessitatibus molestias
            voluptate vitae incidunt doloribus minus delectus laborum quidem.
            Sed quibusdam earum cum ipsa vitae culpa, reprehenderit ea
            cupiditate dolorum exercitationem pariatur natus eius atque in non
            numquam! Doloribus enim, repudiandae obcaecati ducimus, explicabo,
            magni odio quod aspernatur vitae magnam nam molestias maxime
            pariatur ut porro. Similique harum delectus iste deleniti
            praesentium. Expedita nulla suscipit accusamus nemo nobis.
          </article>
        </div>
        <div className="container relative px-6 h-full w-full flex justify-center items-center">
          <div className="absolute w-full h-full">
            <div className="circle absolute z-20 md:top-0 md:left-[10%] -top-5 left-[-10%] squiggly-pattern rounded-full md:w-[250px] md:h-[250px] w-[125px] h-[125px] bg-slate-200"></div>
            <div className="circle absolute z-20 md:bottom-[-10%] md:right-[10%] bottom-[-5%] right-[-5%] squiggly-pattern rounded-full md:w-[250px] md:h-[250px] w-[125px] h-[125px] bg-primary"></div>
            <div className="circle absolute z-10 squiggly-2-pattern rounded-full w-full h-full"></div>
          </div>
          <img
            src={"/images/achievements/award.jpg"}
            height={500}
            width={430}
            alt="Award of Top Fifty Education Innovators in africa"
            className="z-30"
          />
        </div>
      </section>
    </>
  );
};

export default achievements;
