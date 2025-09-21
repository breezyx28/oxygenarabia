import React from "react";
import { Link } from "react-router-dom";
import { Svg } from "../../components/icons";
import LogoBase from "../../components/logo/LogoBase";
import "../../styles/nav/uppernav.css";
import GlassEffect from "@/components/ui/GlassEffect";
import NavDropdown from "@/components/ui/NavDropdown";
import { motion } from "framer-motion";
import {
  Users,
  Clock,
  Trophy,
  Calendar,
  FileText,
  Briefcase,
  BookOpen,
  Heart,
} from "lucide-react";

const UpperNav = () => {
  const [menuOpened, setMenuOpend] = React.useState<boolean>(false);
  const [resourcesOpen, setResourcesOpen] = React.useState<boolean>(false);
  const [isAtTop, setIsAtTop] = React.useState<boolean>(true);

  React.useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);
    handleRouteChange();

    const handleScroll = () => {
      setIsAtTop(window.scrollY < 700);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">
      {/* Desktop Nav */}
      <div className="desktop-responsive hidden md:flex justify-center">
        <div className="fixed max-w-[1080px] w-full translate-x-[-50%] top-[20px] left-1/2 right-1/2 z-[50] flex justify-center">
          {/* Outer animation container */}
          <motion.div
            className="z-[50] flex justify-center w-full"
            initial={{ scaleX: 0, borderRadius: "100px" }}
            animate={{ scaleX: 1, borderRadius: "9999px" }}
            transition={{
              delay: 1.5,
              duration: 0.6,
              ease: [0.175, 0.885, 0.1, 1],
            }}
            style={{ transformOrigin: "center" }}
          >
            <GlassEffect className="w-full overflow-visible">
              {/* Inner content fades in after expansion */}
              <motion.div
                className="upper-nav w-full duration-100 ease-in rounded-full z-50 overflow-visible"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
              >
                <div className="w-full px-[1.2rem] md:py-[0.5rem] py-0 hidden md:flex justify-between items-center overflow-visible">
                  <a href={"/"} className="logo w-[30px] h-[30px]">
                    <LogoBase
                      className={isAtTop ? "filter brightness-0 invert" : ""}
                    />
                  </a>
                  <div className="upper-menu flex justify-between items-center divide-x divide-white gap-x-10 overflow-visible">
                    <ul className="flex gap-x-10 overflow-visible">
                      <li
                        className={` duration-300 ease-in font-semibold text-base transition-colors ${
                          isAtTop ? "text-white" : "text-foreground"
                        }`}
                      >
                        <Link
                          className="upper-nav-link font-[500] text-sm"
                          to={"/"}
                          replace
                        >
                          HOME
                        </Link>
                      </li>
                      <li
                        className={`duration-300 ease-in font-semibold text-base transition-colors ${
                          isAtTop ? "text-white" : "text-foreground"
                        }`}
                      >
                        <Link
                          className="upper-nav-link font-[500] text-sm"
                          to={"/services"}
                        >
                          SERVICES
                        </Link>
                      </li>

                      {/* Resources Dropdown */}
                      <NavDropdown
                        label="RESOURCES"
                        isOpen={resourcesOpen}
                        onToggle={() => setResourcesOpen(!resourcesOpen)}
                        isAtTop={isAtTop}
                        gridCols={4}
                        menuItems={[
                          { text: "About Us", href: "/about", icon: Users },
                          {
                            text: "Our History",
                            href: "/history",
                            icon: Clock,
                          },
                          {
                            text: "Achievements",
                            href: "/achievements",
                            icon: Trophy,
                          },
                          { text: "Events", href: "/events", icon: Calendar },
                          { text: "Blog", href: "/blog", icon: FileText },
                          {
                            text: "Careers",
                            href: "/careers",
                            icon: Briefcase,
                          },
                          {
                            text: "Knowledge Base",
                            href: "/knowledge-base",
                            icon: BookOpen,
                          },
                          {
                            text: "Our Culture",
                            href: "/our-culture",
                            icon: Heart,
                          },
                        ]}
                      />
                    </ul>

                    <div className="ltr:pl-[1rem] rtl:pr-[1rem]">
                      <Link
                        to={"/#contact-us-section"}
                        className="primary-btn shadow-none text-[12px] px-[20px] !py-[5px] font-[500] rounded-full"
                      >
                        Try Free Now
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </GlassEffect>
          </motion.div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="mobile-responsive w-screen fixed top-0 left-0 px-10 py-4 md:hidden flex justify-between items-center md:z-0 z-50 bg-white">
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
            className="btn text-white bg-primary border-0 rounded-[20px]"
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
    item.classList.remove("link-active");
    if (item.getAttribute("to") === currentPage) {
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
