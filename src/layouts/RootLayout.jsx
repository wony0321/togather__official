import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RootLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
