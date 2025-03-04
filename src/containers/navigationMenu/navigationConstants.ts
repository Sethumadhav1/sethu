import homeIcon from "../../assets/homeIcon.png";
import homeIconActive from "../../assets/homeIconActive.png";
import tripPlanIcon from "../../assets/tripPlanIcon.png";
import tripPlanIconActive from "../../assets/tripPlanIconActive.png";
import inboundIcon from "../../assets/inboundIcon.svg";
import inboundIconActive from "../../assets/inboundIconActive.svg";
import group1 from "../../assets/ges.png";
import group2 from "../../assets/lsc.svg";
import group1Active from "../../assets/gesActive.png";
import group2Active from "../../assets/lscActive.svg";
import group1Highlighted from "../../assets/gesHighlighted.png";
import group2Highlighted from "../../assets/lscHighlighted.svg";

export interface NavState {
  state: string;
  navTextHideClass: string;
  menuTitle: string;
  // menuIcon: File | string
}

function Navgen(locationTypes: Array<string | undefined>): {
  name: string;
  path: string;
  icon: string;
  activeIcon: string;
  nav: boolean;
  type: string;
}[] {
  const SmartWarehouseButtons = [
    {
      name: "Location-1",
      path: "/group1/Location-1",
      icon: homeIcon,
      activeIcon: homeIconActive,
      nav: locationTypes.includes("Location-1"),
      type: "group1",
    },
    {
      name: "Location-2",
      path: "/group1/Location-2",
      icon: tripPlanIcon,
      activeIcon: tripPlanIconActive,
      nav: locationTypes.includes("Location-2"),
      type: "group1",
    },
    {
      name: "Location-3",
      path: "/group2/location-3",
      icon: inboundIcon,
      activeIcon: inboundIconActive,
      nav: locationTypes.includes("Location-2"),
      type: "group2",
    },
  ];
  return SmartWarehouseButtons;
}

export function GroupIcons(name: string) {
  switch (name.toLowerCase()) {
    case "group1":
      return {
        icon: group1,
        active: group1Active,
        highlighted: group1Highlighted,
      };
    case "group2":
      return {
        icon: group2,
        active: group2Active,
        highlighted: group2Highlighted,
      };
  }
}
export const WebAppsGen = (
  locationTypes: Array<{
    dashboardPage: string;
    dashboardType: string;
    defaultPage: string;
  }>
) =>
  locationTypes
    .map((item) => item.dashboardType)
    .filter((item, i, ar) => ar.indexOf(item) === i)
    .map((item) => {
      return {
        id: item,
        name: item,
        label: item,
        path: "/",
        icon: GroupIcons(item),
        buttons: Navgen(locationTypes.map((i) => i.dashboardPage)).filter(
          (i) => i.type === item
        ),
        redirect: "/",
      };
    });
