import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      fontFamily: "Comic Neue",
      radius: {
        sm: "12px",
      },
    }}
  >
    <App />
  </MantineProvider>
);
