"use client";

import { Spinner } from "@/components/Spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import { Navigation } from "./_components/Navigation";
import { SearchCommand } from "@/searchCommand";
import { SettingsModal } from "@/components/modals/SettingsModal";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  if (isLoading) {
    return (
      <div className="flex items-center h-full justify-center ">
        <Spinner size={"lg"} />
      </div>
    );
  }
  if (!isAuthenticated) {
    return redirect("/");
  }

  return (
    <div className="flex  h-full  dark:bg-[#1F1F1F]">
      <Navigation />
      <main className="h-full overflow-y-auto flex-1">
        <SearchCommand/>
        <SettingsModal/>
        {children}
        </main>
    </div>
  );
};

export default MainLayout;
