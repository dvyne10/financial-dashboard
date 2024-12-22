import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import './chartConfig';
import { setupWorker } from 'msw/browser'
import { handlers } from './mocks/server'
import reportWebVitals from "./reportWebVitals";


const worker = setupWorker(...handlers)

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }
  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return await worker.start()
}

// await worker.start()

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
enableMocking().then(() => {root.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
