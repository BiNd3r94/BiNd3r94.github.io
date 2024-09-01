import {routesMainNavigation} from "../assets/routesMainNavigation";
import {MenuItem} from "primereact/menuitem";
import {Menubar} from "primereact/menubar";

export const MainNavigation = () => {
  const getMenuItems: () => MenuItem[] = () => {
    return routesMainNavigation.map((route) => {
      return {
        label: route.label,
        url: route.path
      } as MenuItem
    })
  }

  return (
      <nav>
        <Menubar model={getMenuItems()} className={"header-menu"}/>
      </nav>
  )
}