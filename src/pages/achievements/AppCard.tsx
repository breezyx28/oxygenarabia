import { Link } from "react-router-dom";

interface componentProps {
  logo: string;
  name: string;
  description?: string | null;
  size?: [] | null;
}

const AppCard = ({ logo, name, description }: componentProps) => {
  return (
    <div className="relative p-4 bg-white text-slate-800 rounded-2xl hover:shadow-xl shadow-md duration-100 ease-in cursor-pointer">
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-y-2 p-2">
          <div className="flex items-center gap-x-3">
            <div className="app-icon">
              <img src={logo} width={100} className="rounded-full" alt={name} />
            </div>
            <div className="app-name text-slate-600 font-semibold text-md">
              {name}
            </div>
          </div>
          <div className="app-description text-xs text-slate-400">
            {description ??
              `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          voluptatum tenetur hic eaque aperiam labore consequuntur, architecto
          molestias est reiciendis.`}
          </div>
        </div>
        <Link to={"#"} className="link link-neutral text-slate-800">
          Explore
        </Link>
      </div>
    </div>
  );
};

export default AppCard;
