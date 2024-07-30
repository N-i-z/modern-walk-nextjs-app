import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "../index.css";

export const metadata: Metadata = {
  title: "React App",
  description: "Web site created with Next.js.",
};

const clerkPubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider publishableKey={clerkPubKey}>
          <div id="root">{children}</div>
        </ClerkProvider>
      </body>
    </html>
  );
}
