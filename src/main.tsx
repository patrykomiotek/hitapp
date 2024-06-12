import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const htmlElement = document.getElementById("root")!;

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./mocks/browser");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking().then(() => {
  // ReactDOM.render(<App />, rootElement); // 16 | 17
  ReactDOM.createRoot(htmlElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
