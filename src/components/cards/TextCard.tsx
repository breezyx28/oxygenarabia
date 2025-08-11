const TextCard = () => {
  return (
    <div className="text-card bg-white px-4 py-2 rounded-[15px] max-w-[140px] h-auto shadow-xl">
      <div className="flex flex-col gap-y-1 text-center">
        <h2 className="text-sm text-slate-400">Build On</h2>
        <p className="text-xl text-slate-700 font-bold">5000+</p>
      </div>
    </div>
  );
};

export default TextCard;
