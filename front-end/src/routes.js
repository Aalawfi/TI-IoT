import Dashboard from "./views/protected-views/Dashboard";
import Devices from "./views/protected-views/Devices";
import Alerts from "./views/protected-views/Alerts";
const dashboardRoutes = [
  
    {
      path: "dashboard",
      name: "Dashboard",
      icon: "nc-icon nc-chart-pie-35",
      component: Dashboard,
      layout: "/admin",
    },
    {
      path: "devices",
      name: "Devices",
      icon: "nc-icon nc-bell-55",
      component: Devices,
      layout: "/admin",
    },
    {
      path: "alerts",
      name: "Alerts",
      icon: "nc-icon nc-bell-55",
      component: Alerts,
      layout: "/admin", 
    },
  ];
  
  export default dashboardRoutes;