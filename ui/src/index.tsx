import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { customTheme } from "./customTheme";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <ConfigProvider theme={{ token: customTheme() }}>
      <App />
    </ConfigProvider>
  </BrowserRouter>
);
