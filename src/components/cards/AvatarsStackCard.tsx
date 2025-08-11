import AvatarGroup from "../avatars/AvatarGroup";

const AvatarsStackCard = () => {
  return (
    <div className="avatar-stack-card bg-white px-4 py-3 rounded-[15px] max-w-[200px] h-auto shadow-xl">
      <div className="flex flex-col gap-y-1 text-center">
        <AvatarGroup />
        <p className="text-lg text-slate-700 font-semibold">5000+ reviews</p>
      </div>
    </div>
  );
};

export default AvatarsStackCard;
