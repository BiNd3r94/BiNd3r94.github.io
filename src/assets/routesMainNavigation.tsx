import {HomeView} from "../views/HomeView";
import {ReactNode} from "react";
import {KlassischeHomoeopathieView} from "../views/KlassischeHomoeopathieView";
import {UeberMichView} from "../views/UeberMichView";
import {FortbildungenView} from "../views/FortbildungenView";
import {ContactView} from "../views/ContactView";
import {DatenschutzView} from "../views/legal-views/DatenschutzView";
import {ImpressumView} from "../views/legal-views/ImpressumView";
import {LinksView} from "../views/legal-views/LinksView";

export const routesMainNavigation: Route[] = [
  {
    label: "Startseite",
    path: "/",
    component: <HomeView/>
  },
  {
    label: "Klassische Homöopathie",
    path: "/klassische-homöopathie",
    component: <KlassischeHomoeopathieView/>
  },
  {
    label: "Über mich",
    path: "/ueber-mich",
    component: <UeberMichView/>
  },
  {
    label: "Fortbildungen/Behandlungsschwerpunkte",
    path: "/fortbildungen",
    component: <FortbildungenView/>
  },
  {
    label: "Kontakt",
    path: "/kontakt",
    component: <ContactView/>
  }
]

export const routesFooterNavigation: Route[] = [
  {
    label: "Datenschutzerklärung",
    path: "/datenschutz",
    component: <DatenschutzView/>
  },
  {
    label: "Impressum",
    path: "/impressum",
    component: <ImpressumView/>
  },
  {
    label: "Links",
    path: "/links",
    component: <LinksView/>
  }
]

type Route = {
  label: string,
  path: string,
  component: ReactNode
}