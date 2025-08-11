import Jumbotrun from "../../components/pages/Jumbotrun";

const about = () => {
  return (
    <>
      <Jumbotrun pageName={"About Us"} />
      <section className="section-container py-0 z-50 bg-white">
        <div className="container px-6 py-10 mx-auto">
          <div className="wrapper flex md:flex-row flex-col justify-center md:gap-x-[1rem] gap-x-0 gap-y-[1rem] items-center w-full">
            <div className="flex flex-col items-center gap-y-[1rem] md:order-1 order-2">
              <div className="section-text md:pt-0 pt-4">
                Who Are <span className="text-primary">We</span>
              </div>
              <p className="mt-4 text-gray-500 xl:mt-6 max-w-[1000px]">
                Oxygen Technology Co., Ltd., a company engaged in information
                technology and telecommunications services (ICT) Industry. Since
                establish in 2012, it has achieved many successes and continued
                rapid growth ever since. As a result of its continuous work in
                developing technological solutions that serve vital sectors such
                as education, medicine, mobile telecommunications and many other
                sectors, Oxygen company won the award of a one of the top fifty
                education innovators from the African Union in the year 2018,
                with the annual conference for the development of education in
                Senegal.
              </p>
            </div>
            <div className="w-full h-full flex justify-center md:order-2 order-1">
              <img
                className="max-w-[450px] object-cover"
                src={"/images/building.jpg"}
                height={"905"}
                width={"640"}
                alt="Building"
              />
            </div>
          </div>
        </div>
        <div className="container px-6 py-10 mx-auto">
          <div className="wrapper flex md:flex-row flex-col justify-between items-center w-full h-full">
            <div className="w-full h-full flex justify-center">
              <img
                className="max-w-[450px] object-cover"
                src={"/images/building.jpg"}
                height={"905"}
                width={"640"}
                alt="Building"
              />
            </div>
            <div className="flex flex-col items-center gap-y-[1rem]">
              <div className="section-text md:pt-0 pt-4">
                What Drives <span className="text-primary">Us</span>
              </div>
              <p className="mt-4 text-gray-500 xl:mt-6 max-w-[1000px]">
                Our passion for technology drives us to achieve more we believe
                that innovation motivates actions to take risks, encourage
                curiosity to create new ideas, our constant strive to exceed
                expectations gives us courage to reach beyond our comfort zone
                to innovative and explore new things.
              </p>
            </div>
          </div>
        </div>
        <div className="container px-6 py-10 mx-auto">
          <div className="wrapper flex md:flex-row flex-col justify-center md:gap-x-[1rem] gap-x-0 gap-y-[1rem] items-center w-full h-full">
            <div className="w-full h-full flex justify-center">
              <img
                className="max-w-[450px] object-cover"
                src={"/images/building.jpg"}
                height={"905"}
                width={"640"}
                alt="Building"
              />
            </div>
            <div className="flex flex-col items-center gap-y-[1rem]">
              <div className="section-text md:pt-0 pt-4">
                <span className="text-primary">Oxygen</span> Values
              </div>
              <p className="mt-4 text-gray-500 xl:mt-6 max-w-[1000px]">
                One Step Ahead We develop reliable, future solutions that
                innovate and deliver strong long-term performance. We
                continually move in the direction of our strengths to be one
                step ahead. Together we achieve more working as one team ,
                moving decisively in the same direction and combine our
                strengths for the interest of our business and customers.
                Reliability We are committed to living up to our promises. We do
                what we say to earn the trust of our customers, colleagues and
                stakeholders. Diversity Diversity is more than just the sum of
                many parts or products.It’s our superpower
              </p>
            </div>
          </div>
        </div>
        <div className="container px-6 py-10 mx-auto">
          <div className="wrapper flex md:flex-row flex-col justify-center md:gap-x-[1rem] gap-x-0 gap-y-[1rem] items-center w-full h-full">
            <div className="w-full h-full flex justify-center">
              <img
                className="max-w-[450px] object-cover"
                src={"/images/building.jpg"}
                height={"905"}
                width={"640"}
                alt="Building"
              />
            </div>
            <div className="flex flex-col items-center gap-y-[1rem]">
              <div className="section-text md:pt-0 pt-4">
                Mission & Milestones
              </div>
              <p className="mt-4 text-gray-500 xl:mt-6 max-w-[1000px]">
                Oxygen Technologies’ mission is to develop smart connecting
                solutions that make African people life better and more
                convenient. With high talented human resource and technological
                tools, oxygen developed and deployed number of products and
                service in many sectors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
