import "../../styles/achievements/achievement.css";

const OrbitComponent = () => {
  return (
    <div className="wrapper w-full h-full">
      <div className="relative">
        <img
          src={"/icons/apple-touch-icon-180x180.png"}
          width={"40"}
          height={"40"}
          alt="Oxygen Logo"
          className="z-10 md:w-[40px] md:h-[40px] w-[20px] h-[20px] relative"
        />
        <div className="apps-orbit absolute">
          <div className="app-orbit md:p-4 md:w-[120px] md:h-[120px] p-2 w-[60px] h-[60px] flex justify-center items-center">
            <img
              src={"/images/achievements/Smart_Center.png"}
              width={80}
              height={80}
              alt=""
              className="md:w-[80px]  w-[30px] "
            />
          </div>
          <div className="app-orbit md:p-4 md:w-[120px] md:h-[120px] p-2 w-[60px] h-[60px] flex justify-center items-center">
            <img
              src={"/images/achievements/MSound.png"}
              width={80}
              height={80}
              alt=""
              className="md:w-[80px] w-[30px] "
            />
          </div>
          <div className="app-orbit md:p-4 md:w-[120px] md:h-[120px] p-2 w-[60px] h-[60px] flex justify-center items-center">
            <img
              src={"/images/achievements/Kpsolla_Profile.jpg"}
              width={80}
              height={80}
              alt=""
              className="md:w-[80px]  w-[30px] "
            />
          </div>
          <div className="app-orbit md:p-4 md:w-[120px] md:h-[120px] p-2 w-[60px] h-[60px] flex justify-center items-center">
            <img
              src={"/images/achievements/Central.jpg"}
              width={80}
              height={80}
              alt=""
              className="md:w-[80px]  w-[30px] "
            />
          </div>
          <div className="app-orbit md:p-4 md:w-[120px] md:h-[120px] p-2 w-[60px] h-[60px] flex justify-center items-center">
            <img
              src={"/images/achievements/laki.png"}
              width={60}
              height={60}
              alt=""
              className="md:w-[60px] w-[30px] "
            />
          </div>
          <div className="app-orbit md:p-4 md:w-[120px] md:h-[120px] p-2 w-[60px] h-[60px] flex justify-center items-center">
            <img
              src={"/images/achievements/ForHer.png"}
              width={80}
              height={80}
              alt=""
              className="md:w-[80px]  w-[30px] "
            />
          </div>
          <div className="app-orbit md:p-4 md:w-[120px] md:h-[120px] p-2 w-[60px] h-[60px] flex justify-center items-center">
            <img
              src={"/images/achievements/Anti.png"}
              width={80}
              height={80}
              alt=""
              className="md:w-[80px] w-[30px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrbitComponent;
