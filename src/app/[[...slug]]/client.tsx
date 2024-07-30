"use client";

import React from "react";
import dynamic from "next/dynamic";
import { WatchlistProvider } from "src/context/WatchListContext";

const App = dynamic(() => import("../../App"), { ssr: false });

export function ClientOnly() {
  return (
    <WatchlistProvider>
      <App />
    </WatchlistProvider>
  );
}
