const LogoBase = ({ className }: { className?: string }) => {
  return (
    <img
      src={"/icons/favicon.ico"}
      className={`${className}`}
      width={42}
      height={42}
      alt="Oxygen Logo"
    />
  );
};

export default LogoBase;
