import Index from "views/Index.js";
import Login from "views/examples/Login.js";
import Character from "views/Character.js";
import Help from "views/help";
import About from "views/About";
import Prisoners from "views/prisoners";
import Complaints from "views/Complaints";
import Visitors from "views/Visitors";
import Transfers from "views/Transfers";
import Notifications from "views/Notifications";

var routes = [
  {
    path: "/index",
    name: "Welcome",
    icon: "ni ni-shop text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/prisoners",
    name: "Prisoners",
    icon: "ni ni-user-run text-danger",
    component: Prisoners,
    layout: "/admin",
  },
  {
    path: "/addprisoner",
    name: "Add prisoner",
    icon: "ni ni-single-02 text-success",
    component: Character,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "ni ni-time-alarm text-default",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/complaints",
    name: "Complaints",
    icon: "ni ni-notification-70 text-danger",
    component: Complaints,
    layout: "/admin",
  },
  {
    path: "/visitors",
    name: "Visitors",
    icon: "ni ni-satisfied text-primary",
    component: Visitors,
    layout: "/admin",
  },
  {
    path: "/Trasnsfers",
    name: "Trasnsfers",
    icon: "ni ni-send text-default",
    component: Transfers,
    layout: "/admin",
  },
  {
    path: "/help",
    name: "Help",
    icon: "ni ni-bulb-61 text-yellow",
    component: Help,
    layout: "/admin",
  },
  {
    path: "/about",
    name: "About",
    icon: "ni ni-world-2 text-info",
    component: About,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Logout",
    icon: "ni ni-button-power text-danger",
    component: Login,
    layout: "/auth",
  },
];
export default routes;
