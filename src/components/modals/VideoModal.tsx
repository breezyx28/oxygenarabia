"use client";
import React, { useRef } from "react";

const VideoModal = (props: any) => {
  const [autoPlay, setAutoPlay] = React.useState(false);
  const videoRef: any = useRef(null);

  let handleModalChange = (event: any) => {
    let modalState = event.currentTarget.checked;
    setAutoPlay(modalState);
  };

  React.useEffect(() => {
    if (autoPlay) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [autoPlay]);

  return (
    <>
      {props.children}
      <input
        type="checkbox"
        onChange={handleModalChange}
        id={props?.modalID}
        className="modal-toggle"
      />
      <label
        htmlFor={props?.modalID}
        className="modal cursor-pointer bg-slate-800/80"
      >
        <label className="modal-box relative p-0" htmlFor="">
          <video
            ref={videoRef}
            src={props.path ?? "./W.mp4"}
            controls={true}
          ></video>
        </label>
      </label>
    </>
  );
};

export default VideoModal;
