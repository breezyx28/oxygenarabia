const AvatarGroup = () => {
  return (
    <div className="avatar-group -space-x-6">
      <div className="avatar">
        <div className="w-10">
          <img src="/images/avatars/1.png" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-10">
          <img src="/images/avatars/2.png" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-10">
          <img src="/images/avatars/3.png" />
        </div>
      </div>
      <div className="avatar placeholder">
        <div className="w-10 bg-neutral-focus text-neutral-content">
          <span>+99</span>
        </div>
      </div>
    </div>
  );
};

export default AvatarGroup;
