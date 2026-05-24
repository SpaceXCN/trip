import { RouterProvider } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import { router } from "./routes";

export default function App() {
  return (
    <>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
      <Analytics />
    </>
  );
}
