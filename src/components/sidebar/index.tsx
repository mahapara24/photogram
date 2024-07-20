import React from "react";
import homeIcon from "../../assets/icons/home.svg";
import addIcon from "../../assets/icons/add.svg";
import myphotoIcon from "../../assets/icons/myphotos.svg";
import profileIcon from "../../assets/icons/profile.svg";
import notificationIcon from "../../assets/icons/notification.svg";
import directIcon from "../../assets/icons/direct.svg";
import settingsIcon from "../../assets/icons/settings.svg";
import logout from "../../assets/icons/logout.svg";
import { Link } from "react-router-dom";
import { useUserAuth } from "../../context/userAuthContext";

interface ISidebarProps {}

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: homeIcon,
  },
  {
    name: "Add Photos",
    link: "/post",
    icon: addIcon,
  },
  {
    name: "My Photos",
    link: "/myphotos",
    icon: myphotoIcon,
  },
  {
    name: "Profile",
    link: "/profile",
    icon: profileIcon,
  },
  {
    name: "Notifications",
    link: "#",
    icon: notificationIcon,
  },
  {
    name: "Direct",
    link: "#",
    icon: directIcon,
  },
  {
    name: "Settings",
    link: "#",
    icon: settingsIcon,
  },
];

const Sidebar: React.FunctionComponent<ISidebarProps> = () => {
  const { logOut } = useUserAuth();
  return (
    <nav className="flex flex-col space-x-2 relative h-screen max-w-sm w-full">
      <div className="flex justify-center m-5">
        <div className="text-white text-lg">PhotoGram</div>
      </div>
      {navItems.map((item) => (
        <div className="pl-4" key={item.name}>
          <Link
            className="flex justify-start items-center py-4 space-x-3 text-white"
            to={item.link}
          >
            <span>
              <img
                className="w-5 h-5 mr-2"
                src={item.icon}
                alt={item.name}
                style={{ filter: "invert(100%)" }}
              />
            </span>
            <span>{item.name}</span>
          </Link>
        </div>
      ))}{" "}
      <div className="pl-4">
        <Link
          className="flex justify-start items-center py-4 space-x-3 text-white"
          to="/login"
          onClick={logOut}
        >
          <span>
            <img
              className="w-5 h-5 mr-2"
              src={logout}
              alt="logout icon"
              style={{ filter: "invert(100%)" }}
            />
          </span>
          <span>Logout</span>
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
