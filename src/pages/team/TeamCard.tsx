import { Facebook, Github, Linkedin } from "lucide-react";

interface ITeamCard {
  name: string;
  image?: string;
  position: string;
  details: string;
}
const TeamCard = ({ name, position, image, details }: ITeamCard) => {
  return (
    <>
      <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600">
        <div className="flex flex-col sm:-mx-4 sm:flex-row">
          <img
            className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
            src={image}
            alt=""
          />

          <div className="mt-4 sm:mx-4 sm:mt-0">
            <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl group-hover:text-white">
              {name}
            </h1>

            <p className="mt-2 text-gray-500 capitalize group-hover:text-gray-300">
              {position}
            </p>
          </div>
        </div>

        <p className="mt-4 text-gray-500 capitalize  group-hover:text-gray-300">
          {details}
        </p>

        <div className="flex mt-4 -mx-2">
          <a
            href="#"
            className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href="#"
            className="mx-2 text-gray-600  hover:text-gray-500  group-hover:text-white"
            aria-label="Facebook"
          >
            <Facebook className="w-4 h-4" />
          </a>

          <a
            href="#"
            className="mx-2 text-gray-600  hover:text-gray-500  group-hover:text-white"
            aria-label="Github"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
