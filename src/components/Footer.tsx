import {routesFooterNavigation} from "../assets/routesMainNavigation";
import {Link} from "react-router-dom";

export const Footer = () => {
  return (
      <div className={"footer"}>
        <div className={"footer-content"}>
          <div className={"footer-info"}>

          </div>
          <div className={"footer-legal"}>
            {routesFooterNavigation.map((route, index) => {
              return (
                  <div className={"m-3"} key={"footer-link-" + index}>
                    <Link to={route.path}>{route.label}</Link>
                  </div>
              )
            })}
          </div>
        </div>
      </div>
  )
}
