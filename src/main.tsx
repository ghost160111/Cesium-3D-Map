import "./index.css";
import { createRoot, Root } from "react-dom/client";
import App from "./App.tsx";

const appRoot: HTMLElement = document.getElementById("root");
const root: Root = createRoot(appRoot!);

root.render(<App />);
