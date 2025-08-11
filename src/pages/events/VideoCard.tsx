import { Svg } from "../../components/icons";
import eventAnimation from "../../helper/animations/eventAnimation";
import React, { useRef } from "react";

interface Iprops {
  index: number;
  path: string;
  title: string;
  description: string;
}

const VideoCard = ({ path, title, description, index }: Iprops) => {
  const [played, setPlayed] = React.useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayLayerRef = useRef<HTMLDivElement>(null);
  const controlLayerRef = useRef<HTMLDivElement>(null);

  let {
    videoCardFadeInTop,
    videoCardFadeOutBottom,
    initVideoCardFadeInTop,
    initVideoCardFadeOutBottom,
  } = eventAnimation;

  const handlePlayVideo = () => {
    if (played === false) {
      videoRef.current?.play();
      setPlayed(true);
    } else {
      videoRef.current?.pause();
      setPlayed(false);
    }
  };

  React.useEffect(() => {
    let controlLayer = controlLayerRef?.current;
    let overlayLayer = overlayLayerRef?.current;
    console.log(played);

    if (played === true) {
      controlLayer?.addEventListener("mouseenter", () => {
        overlayLayer?.classList.add("bg-gradient-video-layer");
        videoCardFadeOutBottom(`#${controlLayer?.id}`);
      });
      controlLayer?.addEventListener("mouseleave", () => {
        overlayLayer?.classList.remove("bg-gradient-video-layer");
        videoCardFadeInTop(`#${controlLayer?.id}`);
      });
    } else {
      console.log("played false");
      if (
        overlayLayer?.classList.contains("bg-gradient-video-layer") === false
      ) {
        overlayLayer?.classList.add("bg-gradient-video-layer");
        initVideoCardFadeInTop(`#${controlLayer?.id}`);
        initVideoCardFadeOutBottom(`#${controlLayer?.id}`);
      } else {
        initVideoCardFadeInTop(`#${controlLayer?.id}`);
        initVideoCardFadeOutBottom(`#${controlLayer?.id}`);
      }
    }
  }, [played]);

  return (
    <div className="relative h-[250px] w-auto rounded-[20px]">
      <div className="absolute video-player w-full h-full rounded-[20px]">
        <video
          onPause={() => {
            setPlayed(false);
          }}
          onPlay={() => {
            setPlayed(true);
          }}
          ref={videoRef}
          src={path}
          className="absolute object-cover w-full h-full rounded-[20px]"
          controls={false}
        ></video>
      </div>
      <div
        ref={overlayLayerRef}
        id={`overlay-layer-${index}`}
        className={`w-full h-full absolute bg-gradient-video-layer rounded-[20px]`}
      >
        <div
          ref={controlLayerRef}
          id={`control-layer-${index}`}
          className={`relative w-full h-full flex justify-between items-end p-[2rem] bottom-0 left-0 gap-x-[1.2rem]`}
        >
          <div className="flex flex-col gap-y-2">
            <p className="text-white text-sm capitalize">{description}</p>
            <p className="text-2xl font-bold text-white">{title}</p>
          </div>
          <div className="play-button relative flex">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-50"></span>
            <label
              htmlFor={path + "-event-video"}
              className="relative bg-slate-200/50 rounded-full inline-flex p-1 z-10 cursor-pointer"
              onClick={handlePlayVideo}
            >
              {played === false ? (
                Svg.playBtn
              ) : (
                <div className="p-[0.55rem]">{Svg.pauseBtn}</div>
              )}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
