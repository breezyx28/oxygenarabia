import React from "react";
import { Link } from "react-router-dom";
import { Svg } from "../../components/icons";
import LogoBase from "../../components/logo/LogoBase";
import "../../styles/nav/uppernav.css";

const UpperNav = () => {
  const [menuOpened, setMenuOpend] = React.useState<boolean>(false);
  const [resourcesOpen, setResourcesOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);
    handleRouteChange();
  }, []);

  return (
    <div className="upper-nav duration-100 glass-card ease-in fixed max-w-[2000px] w-full px-[5rem] md:py-[1.2rem] py-0 z-50">
      <div className="desktop-responsive hidden md:flex justify-between items-center">
        <Link to={"/"} className="logo">
          <LogoBase />
        </Link>
        <div className="upper-menu">
          <ul className="flex gap-x-10">
            <li className="text-slate-500 hover:text-slate-800 duration-100 ease-in font-semibold">
              <Link className="upper-nav-link" to={"/"} replace>
                Home
              </Link>
            </li>
            <li className="text-slate-500 hover:text-slate-800 duration-100 ease-in font-semibold">
              <Link className="upper-nav-link" to={"/services"}>
                Services
              </Link>
            </li>

            {/* Resources Dropdown */}
            <li
              className="relative text-slate-500 hover:text-slate-800 duration-100 ease-in font-semibold cursor-pointer"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <span className="upper-nav-link">Resources</span>
              {resourcesOpen && (
                <ul className="absolute w-[220px] top-full left-0 mt-2 bg-white shadow-lg rounded-md p-4 space-y-2 z-50">
                  <li>
                    <Link className="block hover:text-slate-800" to={"/about"}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block hover:text-slate-800"
                      to={"/history"}
                    >
                      Our History
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block hover:text-slate-800"
                      to={"/achievements"}
                    >
                      Achievements
                    </Link>
                  </li>
                  <li>
                    <Link className="block hover:text-slate-800" to={"/events"}>
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link className="block hover:text-slate-800" to={"/blog"}>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block hover:text-slate-800"
                      to={"/careers"}
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block hover:text-slate-800"
                      to={"/knowledge-base"}
                    >
                      Knowledge Base
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block hover:text-slate-800"
                      to={"/our-culture"}
                    >
                      Our Culture
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
        <Link to={"/#contact-us-section"} className="primary-btn shade-x">
          Try Free Now
        </Link>
      </div>

      {/* Mobile Nav */}
      <div className="mobile-responsive w-screen fixed top-0 left-0 px-10 py-4 md:hidden flex justify-between items-center">
        <Link to={"/"} className="logo">
          <LogoBase />
        </Link>
        <div
          className={`fixed bg-white shadow-sm ${
            menuOpened
              ? "uppernav-mobile-slide-0"
              : "uppernav-mobile-slide-full"
          } duration-200 ease-in top-0 w-full z-50 h-screen flex flex-col justify-between px-10 py-4`}
        >
          <div className="wrapper flex flex-col gap-y-10">
            <div className="flex justify-between items-center">
              <LogoBase />
              <button
                onClick={() => setMenuOpend(false)}
                className="relative top-0 right-0 p-3 text-slate-800"
              >
                {Svg.close}
              </button>
            </div>
            <div className="mobile-upper-menu h-full">
              <ul className="flex flex-col gap-y-10 h-full">
                <li className="text-slate-700 text-2xl font-bold hover:ml-4 duration-150">
                  <Link to={"/"} onClick={() => setMenuOpend(false)}>
                    Home
                  </Link>
                </li>
                <li className="text-slate-700 text-2xl font-bold hover:ml-4 duration-150">
                  <Link to={"/services"} onClick={() => setMenuOpend(false)}>
                    Services
                  </Link>
                </li>

                {/* Mobile Resources Dropdown */}
                <li className="text-slate-700 text-2xl font-bold">
                  <span>Resources</span>
                  <ul className="mt-4 ml-4 space-y-3 text-lg font-normal">
                    <li>
                      <Link to={"/about"} onClick={() => setMenuOpend(false)}>
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to={"/history"} onClick={() => setMenuOpend(false)}>
                        Our History
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/achievements"}
                        onClick={() => setMenuOpend(false)}
                      >
                        Achievements
                      </Link>
                    </li>
                    <li>
                      <Link to={"/events"} onClick={() => setMenuOpend(false)}>
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link to={"/blog"} onClick={() => setMenuOpend(false)}>
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link to={"/careers"} onClick={() => setMenuOpend(false)}>
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/knowledge-base"}
                        onClick={() => setMenuOpend(false)}
                      >
                        Knowledge Base
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/our-culture"}
                        onClick={() => setMenuOpend(false)}
                      >
                        Our Culture
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <Link
            to={"/#contact-us-section"}
            onClick={() => setMenuOpend(false)}
            className="btn text-white bg-primary border-0 rounded-[20px] shadow-lg"
          >
            Try Free Now
          </Link>
        </div>
        <button onClick={() => setMenuOpend(true)}>{Svg.menu}</button>
      </div>
    </div>
  );
};

export default UpperNav;

const setActiveLink = (currentPage: string) => {
  let navLinks = document.querySelectorAll(".upper-nav-link");

  navLinks.forEach((item) => {
    // remove all active links first
    item.classList.remove("link-active");

    // get the current page and assign it to specific link item
    if (item.getAttribute("to") === currentPage) {
      console.log(currentPage);

      item.classList.add("link-active");
    }
  });
};

const handleRouteChange = () => {
  let upperNavLink = document.querySelectorAll(".upper-nav-link");
  let upperNav = document.querySelector(".upper-nav");
  let listItem = document.querySelectorAll(
    ".upper-nav>.desktop-responsive>.upper-menu>ul>li"
  );

  upperNavLink.forEach((item: Element) => {
    item?.addEventListener("click", () => {
      let page = item.getAttribute("to") ?? "/";
      setActiveLink(page);
    });
  });

  const currentPath = window.location.pathname;

  if (currentPath !== "/") {
    upperNav?.classList.add("glass-card");
    listItem?.forEach((item) =>
      item.classList?.replace("text-white", "text-slate-800")
    );
  }
};

// const handleScroll = () => {
//   let upperNav = document.querySelector(".upper-nav");
//   let listItem = document.querySelectorAll(
//     ".upper-nav>.desktop-responsive>.upper-menu>ul>li"
//   );
//   window?.addEventListener("scroll", ({ currentTarget }) => {
//     let scrollPostion = currentTarget?.scrollY;

//     if (scrollPostion >= 50) {
//       upperNav?.classList.add("glass-card");
//       listItem?.forEach((item) =>
//         item.classList?.replace("text-white", "text-slate-800")
//       );
//     } else {
//       if (upperNav?.classList.contains("glass-card")) {
//         upperNav?.classList.remove("glass-card");
//         listItem?.forEach((item) =>
//           item.classList?.replace("text-slate-800", "text-white")
//         );
//       }
//     }
//   });
// };
