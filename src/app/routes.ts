import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ReparationToiture from "./pages/ReparationToiture";
import RenovationToiture from "./pages/RenovationToiture";
import NettoyageToiture from "./pages/NettoyageToiture";
import RechercheFuite from "./pages/RechercheFuite";
import Zinguerie from "./pages/Zinguerie";
import PoseVelux from "./pages/PoseVelux";
import UrgenceToiture from "./pages/UrgenceToiture";
import Realisations from "./pages/Realisations";
import Avis from "./pages/Avis";
import APropos from "./pages/APropos";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "reparation-toiture", Component: ReparationToiture },
      { path: "renovation-toiture", Component: RenovationToiture },
      { path: "nettoyage-toiture", Component: NettoyageToiture },
      { path: "recherche-fuite", Component: RechercheFuite },
      { path: "zinguerie", Component: Zinguerie },
      { path: "pose-velux", Component: PoseVelux },
      { path: "urgence-toiture", Component: UrgenceToiture },
      { path: "realisations", Component: Realisations },
      { path: "avis", Component: Avis },
      { path: "a-propos", Component: APropos },
      { path: "contact", Component: Contact },
    ],
  },
]);
