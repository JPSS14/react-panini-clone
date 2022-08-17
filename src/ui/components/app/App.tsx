import { Home } from "../../pages";
import { PaniniThemeProvider } from "../theme";

export const App = () => {
  return (
    <PaniniThemeProvider>
      <Home/>
    </PaniniThemeProvider>
  );
};
