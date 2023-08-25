import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";


const navItems = [
    {
      icon: faHome,
      redirectPath: "/home",
      label: "Home",
    },
    {
      icon: faMagnifyingGlass,
      redirectPath: "/search",
      label: "Search",
    },
    {
      icon: faSquarePlus,
      redirectPath: "/create",
      label: "Create",
    },
    {
      icon: faEnvelopeOpen,
      redirectPath: "/activity",
      label: "Activity",
    },
    {
      icon: faUser,
      redirectPath: "/profile",
      label: "Profile",
    },
  ];

  export default navItems;