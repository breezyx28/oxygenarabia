const LogoMobile = ({ className }: { className?: string }) => {
  return (
    <img
      src={"/icons/favicon.ico"}
      className={`${className}`}
      width={32}
      height={32}
      alt="Oxygen Logo"
    />
  );
};

export default LogoMobile;
