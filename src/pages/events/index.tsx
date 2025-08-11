import Jumbotrun from "../../components/pages/Jumbotrun";
import VideoCard from "./VideoCard";
import EventImage from "./EventImage";

const events = () => {
  return (
    <>
      <Jumbotrun pageName={"Oxygen Events"} />
      <section className="section-container py-0">
        <div className="container px-6 py-10 mx-auto flex flex-col gap-y-[5rem]">
          <div className="section-title flex flex-col gap-y-4">
            <div className="section-text">
              Our <span className="text-primary">Events</span>
            </div>
            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
              quam voluptatibus
            </p>
          </div>
          <div className="grid grid-flow-cols lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            <VideoCard
              index={0}
              title={"Oxygen Services"}
              description={"Lorem ipsum dolor"}
              path={"/W.mp4"}
            />
            <VideoCard
              index={1}
              title={"Kpsolla Platform"}
              description={"Lorem ipsum dolor"}
              path={"/videos/events/kpsolla.mp4"}
            />
            <VideoCard
              index={2}
              title={"Smart Center"}
              description={"Lorem ipsum dolor"}
              path={"/videos/events/Smart Center.mp4"}
            />
          </div>
        </div>
        <div className="container px-6 py-10">
          <div className="event-gallary-wrapper w-full h-auto">
            <div className="latest-event flex flex-col gap-y-6">
              <div className="event-category-name text-slate-700 text-3xl font-bold capitalize">
                <span className="text-primary">oxygen</span> latest events
              </div>
              <div className="event-wrapper p-8 bg-slate-200 rounded-[1rem]">
                <div className="event-grid grid grid-flow-cols lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-6">
                  <EventImage
                    path="/images/events/Frame_Oxy12.jpg"
                    width={250}
                    height={200}
                    alt=""
                  />
                  <EventImage
                    path="/images/events/Frame_Oxy13.jpg"
                    width={250}
                    height={200}
                    alt=""
                  />
                  <EventImage
                    path="/images/events/Frame_Oxy14.jpg"
                    width={250}
                    height={200}
                    alt=""
                  />
                  <EventImage
                    path="/images/events/Frame_Oxy19.jpg"
                    width={250}
                    height={200}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default events;
