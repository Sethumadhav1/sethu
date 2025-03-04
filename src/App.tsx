import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Container from "./containers/Container";
import theme from "./theme";
import "./App.css";
import "./App.mobile.css";
import "./styles/Content.css";
import "./styles/Content.mobile.css";
import "./styles/Content.tablet.css";
import { ThemeProvider } from "@mui/material";
import "./components/commonComponents/CommonComponentStyles.css"

import { useEffect } from "react";

import SupportOwner from "./pages/SupportOwner";
import SupportManager from "./pages/SupportManager";
import { Landing } from "./pages/Landing";
import { TicketCreation } from "./pages/TicketCreation";
import LOne from "./pages/LOne";
import LTwo from "./pages/LTwo";
import LogGenie from "./pages/logGenie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      { path: "", element: <Landing /> },
      { path: "Location-1", element: <SupportOwner /> },
      { path: "Location-2", element: <SupportManager /> },
      { path: "Location-3", element: <TicketCreation /> },
      {path:"Location-4",element:<LOne/>},
      {path:"Location-5",element:<LTwo/>},
      {path:"Location-6",element:<LogGenie/>}
    ],
  },
]);

function App() {
  // Checks the difference between token expiry time and current time every minute
  // Renews AD Token if token expiry is withing 5 minutes

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
