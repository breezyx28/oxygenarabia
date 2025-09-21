const MeshGrdientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full">
      <img
        src="/images/backgrounds/mesh-gradient.png"
        alt="mesh gradient background"
        className="absolute inset-0 w-full h-full object-cover z-1"
      />
      {children}
    </div>
  );
};

export default MeshGrdientLayout;
