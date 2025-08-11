type PropsInt = {
  appName?: String;
};

const PhoneDevice = ({ appName }: PropsInt) => {
  return (
    <div>
      <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">
            {appName ?? "..."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneDevice;
