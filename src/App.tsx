import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import { CartProvider } from "./context/CartContext";
import { WatchlistProvider } from "./context/WatchListContext";
// import { Navbar } from "./ui-core/components";
import "./index.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <WatchlistProvider>
          {/* <Navbar /> */}
          <main>
            <SignedIn>
              <Component {...pageProps} />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </main>
        </WatchlistProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
