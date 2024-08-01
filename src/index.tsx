import React from "react";
import ReactDOM from "react-dom/client";
import "./output.css";
import App from "./App";
import { ClerkProvider } from "@clerk/nextjs";
import { WatchlistProvider } from "./context/WatchListContext";

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY as string;

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ClerkProvider publishableKey={clerkPubKey}>
        <WatchlistProvider>
          <App />
        </WatchlistProvider>
      </ClerkProvider>
    </React.StrictMode>
  );

  // reportWebVitals();
} else {
  console.error(
    'Root element not found. Please check your HTML file for an element with id="root".'
  );
}
